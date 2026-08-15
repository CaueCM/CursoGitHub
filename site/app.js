(() => {
  // =========================================================
  // Navegação / Scroll / Atalhos
  // =========================================================

  // Se o alvo de um link âncora estiver dentro de um <details> fechado,
  // abre a cadeia inteira antes de rolar
  function openDetailsIfTarget(id) {
    const target = document.getElementById(id);
    if (!target) return null;
    let el = target;
    while (el) {
      if (el.tagName === 'DETAILS' && !el.open) el.open = true;
      el = el.parentElement;
    }
    return target;
  }

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length <= 1) return;
      const target = openDetailsIfTarget(href.slice(1));
      if (target) {
        e.preventDefault();
        setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
      }
    });
  });

  // Âncora no load inicial (ex: dia-1.html#pre-requisitos vindo da landing)
  if (location.hash.length > 1) {
    setTimeout(() => openDetailsIfTarget(location.hash.slice(1)), 0);
  }

  // Sidebar: destaca o bloco visível
  const sideLinks = document.querySelectorAll('.side-list a');
  const blocks = Array.from(document.querySelectorAll('.block'));

  if (sideLinks.length && blocks.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        sideLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    blocks.forEach(b => b.id && observer.observe(b));
  }

  // Scroll to top
  const topBtn = document.getElementById('scroll-top');
  if (topBtn) {
    window.addEventListener('scroll', () => {
      topBtn.classList.toggle('visible', window.scrollY > 600);
    });
    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Tecla "E" abre/fecha todos os exercícios de uma vez
  const exercises = document.querySelectorAll('.exercise');
  let allOpen = false;
  if (exercises.length) {
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'e' || e.ctrlKey || e.metaKey || e.altKey) return;
      const tag = document.activeElement.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      allOpen = !allOpen;
      exercises.forEach(ex => ex.open = allOpen);
    });
  }

  // =========================================================
  // Progresso — checkbox por passo, barra por exercício, barra do dia
  // Uma chave de localStorage por página, pra Dia 1 e Dia 2 não se misturarem.
  // =========================================================

  if (!exercises.length) return;

  const page = (location.pathname.split('/').pop() || 'index.html').replace('.html', '');
  const STATE_KEY = `curso-github-prototipacao/progress/v1/${page}`;

  let state;
  try { state = JSON.parse(localStorage.getItem(STATE_KEY) || '{}'); }
  catch { state = {}; }

  function saveState() {
    try { localStorage.setItem(STATE_KEY, JSON.stringify(state)); }
    catch { /* modo privado / storage cheio — o progresso só não persiste */ }
  }

  // Declarados antes do loop: updateExerciseProgress() já chama
  // sincronizaDiagramaMerge() na primeira passada, e const em TDZ quebraria
  const figuraMerge = document.getElementById('diagrama-merge');

  const RED = 'var(--pa-red, #FF494C)';
  const YELLOW = 'var(--pa-yellow, #FFD233)';
  const LIME = 'var(--pa-lime, #C6F04A)';
  const BG = 'var(--pa-black, #0A0A0A)';
  const MUTED = 'var(--pa-gray-400, #A3A3A3)';

  const Y_MAIN = 72, Y_CORES = 162, Y_COPY = 248;

  const LEGENDAS = [
    'Como você chegou aqui: a <strong>main</strong> tem o trabalho de ontem, e a <strong>variacao-cores</strong> está aberta — o trabalho existe, mas não chegou na versão oficial.',
    '<strong>Passo 1 — merge tranquilo.</strong> A variacao-cores voltou pra main. O Git juntou sozinho, sem perguntar nada, porque ninguém mais tinha mexido naquelas linhas.',
    '<strong>Passo 2.</strong> Nasce a <strong>variacao-copy</strong>, com um texto novo pro botão. Até aqui, nenhum problema: ela está isolada.',
    '<strong>Passo 3 — a armadilha, de propósito.</strong> A main mudou <em>a mesma linha</em> de outro jeito. Agora existem duas versões do mesmo botão, em linhas do tempo diferentes.',
    '<strong>Passo 4 — conflito e resolução.</strong> O merge para e pergunta. Você escolhe o texto final, apaga os marcadores e commita. As duas linhas viram uma só.'
  ];

  // Barra global no topbar — criada antes do loop, porque
  // updateExerciseProgress() já chama updateDayProgress() na primeira passada
  const topbar = document.querySelector('.topbar-inner');
  let dayEl = null;

  if (topbar) {
    dayEl = document.createElement('div');
    dayEl.id = 'day-progress';
    dayEl.title = 'Progresso do dia · clique duplo pra resetar';
    dayEl.innerHTML =
      '<span class="day-label">P R O G R E S S O</span>' +
      '<span class="day-bar"><span class="day-fill"></span></span>' +
      '<span class="day-text">0/0 passos · 0%</span>';

    const nav = topbar.querySelector('.top-nav');
    if (nav) topbar.insertBefore(dayEl, nav);
    else topbar.appendChild(dayEl);

    dayEl.addEventListener('dblclick', () => {
      if (!confirm('Resetar todo o progresso dos exercícios desta página?')) return;
      for (const k in state) delete state[k];
      saveState();
      document.querySelectorAll('.step-check input[type="checkbox"]').forEach(c => c.checked = false);
      document.querySelectorAll('.step-block').forEach(s => s.classList.remove('step-done'));
      exercises.forEach(ex => {
        ex.classList.remove('ex-complete');
        updateExerciseProgress(ex);
      });
    });
  }

  exercises.forEach(ex => {
    const numEl = ex.querySelector('.ex-num');
    if (!numEl) return;
    const exNum = numEl.textContent.trim();
    const steps = ex.querySelectorAll('.step-block');
    if (!steps.length) return;

    // Um checkbox no cabeçalho de cada passo
    steps.forEach((step, i) => {
      const head = step.querySelector('.step-block-head');
      if (!head) return;

      const stepId = `ex-${exNum}/step-${i + 1}`;
      const label = document.createElement('label');
      label.className = 'step-check';
      label.title = 'Marcar passo como concluído';

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.dataset.stepId = stepId;
      input.checked = !!state[stepId];

      const tick = document.createElement('span');
      tick.className = 'step-check-tick';
      tick.setAttribute('aria-hidden', 'true');

      label.append(input, tick);
      head.insertBefore(label, head.firstChild);

      // Não deixa o clique no checkbox fechar o accordion
      label.addEventListener('click', e => e.stopPropagation());

      input.addEventListener('change', () => {
        if (input.checked) state[stepId] = true;
        else delete state[stepId];
        saveState();
        step.classList.toggle('step-done', input.checked);
        updateExerciseProgress(ex);
      });

      step.classList.toggle('step-done', input.checked);
    });

    // Barra de progresso no cabeçalho do exercício
    const summary = ex.querySelector('summary');
    const time = summary.querySelector('.ex-time');
    const progress = document.createElement('span');
    progress.className = 'ex-progress';
    progress.innerHTML =
      '<span class="progress-bar"><span class="progress-fill"></span></span>' +
      `<span class="progress-text">0/${steps.length}</span>`;
    summary.insertBefore(progress, time);

    updateExerciseProgress(ex);
  });

  function updateExerciseProgress(ex) {
    const checks = ex.querySelectorAll('.step-check input[type="checkbox"]');
    if (!checks.length) return;
    const done = Array.from(checks).filter(c => c.checked).length;
    const total = checks.length;
    const fill = ex.querySelector('.progress-fill');
    const text = ex.querySelector('.progress-text');
    if (fill) fill.style.width = Math.round((done / total) * 100) + '%';
    if (text) text.textContent = `${done}/${total}`;
    ex.classList.toggle('ex-complete', done === total);
    updateDayProgress();
    if (ex.id === 'ex-merge') sincronizaDiagramaMerge(done);
  }

  function updateDayProgress() {
    if (!dayEl) return;
    const allChecks = document.querySelectorAll('.exercise .step-check input[type="checkbox"]');
    if (!allChecks.length) return;
    const done = Array.from(allChecks).filter(c => c.checked).length;
    const total = allChecks.length;
    const pct = Math.round((done / total) * 100);
    dayEl.querySelector('.day-fill').style.width = pct + '%';
    dayEl.querySelector('.day-text').textContent = `${done}/${total} passos · ${pct}%`;
  }

  updateDayProgress();

  // =========================================================
  // Diagrama de merge do Bloco 2.5 — se redesenha conforme o aluno
  // avança nos passos do Exercício 7 (ou clica nas abas à mão).
  // =========================================================

  function ponto(cx, cy, cor, r) {
    r = r || 11;
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${BG}" stroke="${cor}" stroke-width="3.5"/>` +
           `<circle cx="${cx}" cy="${cy}" r="${r / 2.2}" fill="${cor}"/>`;
  }

  function etiqueta(y, texto, cor) {
    return `<rect x="12" y="${y - 14}" width="140" height="28" rx="14" fill="${cor}"/>` +
           `<text x="82" y="${y + 4}" fill="${BG}" text-anchor="middle" font-size="11" font-weight="700" ` +
           `letter-spacing="1" font-family="var(--font-display, Archivo, sans-serif)">${texto}</text>`;
  }

  function nota(x, y, texto, ancora) {
    return `<text x="${x}" y="${y}" fill="${MUTED}" font-size="11.5" text-anchor="${ancora || 'middle'}" ` +
           `font-family="var(--font-mono, monospace)">${texto}</text>`;
  }

  function desenhaMerge(estado) {
    let s = '';

    // --- main, sempre presente ---
    s += `<path d="M 176 ${Y_MAIN} H 700" stroke="${RED}" stroke-width="4.5" fill="none" stroke-linecap="round"/>`;
    s += etiqueta(Y_MAIN, 'MAIN', RED);
    s += ponto(196, Y_MAIN, RED);

    // --- variacao-cores ---
    s += etiqueta(Y_CORES, 'VARIACAO-CORES', YELLOW);
    if (estado === 0) {
      // aberta: sai da main, anda e não volta
      s += `<path d="M 196 ${Y_MAIN} V ${Y_CORES - 24} Q 196 ${Y_CORES} 220 ${Y_CORES} H 330"` +
           ` stroke="${YELLOW}" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
      s += `<path d="M 342 ${Y_CORES} H 386" stroke="${YELLOW}" stroke-width="4.5" fill="none"` +
           ` stroke-dasharray="1 12" stroke-linecap="round"/>`;
      s += ponto(300, Y_CORES, YELLOW);
      s += nota(364, Y_CORES + 30, 'ainda aberta');
    } else {
      // mesclada: sai da main e volta
      s += `<path d="M 196 ${Y_MAIN} V ${Y_CORES - 24} Q 196 ${Y_CORES} 220 ${Y_CORES} H 336` +
           ` Q 360 ${Y_CORES} 360 ${Y_CORES - 24} V ${Y_MAIN}"` +
           ` stroke="${YELLOW}" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
      s += ponto(288, Y_CORES, YELLOW);
      s += ponto(360, Y_MAIN, RED, 14);
      s += nota(360, Y_MAIN - 26, 'merge sem conflito');
    }

    // --- variacao-copy ---
    if (estado >= 2) {
      s += etiqueta(Y_COPY, 'VARIACAO-COPY', LIME);
      const fim = estado >= 4 ? 596 : 660;
      s += `<path d="M 440 ${Y_MAIN} V ${Y_COPY - 24} Q 440 ${Y_COPY} 464 ${Y_COPY} H ${fim}"` +
           ` stroke="${LIME}" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
      s += ponto(440, Y_MAIN, RED);
      s += ponto(540, Y_COPY, LIME);
      s += nota(540, Y_COPY + 32, 'muda o texto do botão');

      if (estado >= 4) {
        s += `<path d="M 596 ${Y_COPY} Q 620 ${Y_COPY} 620 ${Y_COPY - 24} V ${Y_MAIN}"` +
             ` stroke="${LIME}" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
      }
    }

    // --- commit na main que provoca o conflito ---
    if (estado >= 3) {
      s += ponto(540, Y_MAIN, RED);
      s += nota(540, Y_MAIN - 26, 'muda A MESMA linha');
      if (estado === 3) {
        // marca de atenção entre os dois commits rivais
        s += `<path d="M 540 ${Y_MAIN + 16} V ${Y_COPY - 16}" stroke="${RED}" stroke-width="2"` +
             ` stroke-dasharray="4 5" fill="none" opacity="0.7"/>`;
        s += `<text x="556" y="${(Y_MAIN + Y_COPY) / 2 + 4}" fill="${RED}" font-size="11.5"` +
             ` font-family="var(--font-mono, monospace)">conflito a caminho</text>`;
      }
    }

    // --- merge final ---
    if (estado >= 4) {
      s += ponto(620, Y_MAIN, RED, 15);
      // numa linha acima da nota do passo 3, senão as duas se sobrepõem
      s += nota(700, Y_MAIN - 48, 'conflito resolvido', 'end');
    }

    return `<svg class="branch-diagram" viewBox="0 0 760 300" role="img" aria-label="Estado ${estado} do exercício de merge">${s}</svg>`;
  }

  function sincronizaDiagramaMerge(passosFeitos) {
    if (!figuraMerge) return;
    renderizaMerge(Math.min(passosFeitos, 4));
  }

  function renderizaMerge(estado) {
    if (!figuraMerge) return;
    figuraMerge.querySelector('.merge-canvas').innerHTML = desenhaMerge(estado);
    figuraMerge.querySelector('.merge-legenda').innerHTML = LEGENDAS[estado];
    figuraMerge.querySelectorAll('.merge-step').forEach(b => {
      const ativo = Number(b.dataset.estado) === estado;
      b.classList.toggle('is-active', ativo);
      b.setAttribute('aria-selected', ativo ? 'true' : 'false');
    });
  }

  if (figuraMerge) {
    figuraMerge.querySelectorAll('.merge-step').forEach(b => {
      b.addEventListener('click', () => renderizaMerge(Number(b.dataset.estado)));
    });
    // estado inicial: reflete os passos já marcados do Exercício 7
    const exMerge = document.getElementById('ex-merge');
    const jaFeitos = exMerge
      ? exMerge.querySelectorAll('.step-check input:checked').length
      : 0;
    renderizaMerge(Math.min(jaFeitos, 4));
  }
})();
