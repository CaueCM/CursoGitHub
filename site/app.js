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
})();
