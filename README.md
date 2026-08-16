# GitHub para não desenvolvedores

Curso hands-on de 2 dias da [Product Arena](https://productarena.com.br) que ensina GitHub para gente
**não-técnica** — PM, designer, marketing — prototipar, versionar e publicar protótipos em HTML.

**Site do curso:** <https://cauecm.github.io/CursoGitHub/>

## A ideia

Ninguém aqui vai virar engenheiro. O **Claude** entra como quem cria e edita o HTML; o **GitHub** é
quem guarda o histórico, organiza as variações em branches e coloca o resultado no ar.

A escolha de design do curso é usar o **GitHub Desktop** (o app visual, sem terminal) para todas as
ações de Git. O aluno *vê* a pasta local mudando ao trocar de branch, *vê* o conflito acontecendo na
tela. Primeiro entende o mecanismo, depois automatiza com o Claude Code.

- **Dia 1** — do "o que é o GitHub" ao primeiro commit publicado
- **Dia 2** — branches, merge e conflito, Pull Request, deploy e Claude Code

## Repositório de exemplo

Os alunos exploram e clonam a [ArenaCash](https://github.com/CaueCM/ArenaCash) — o site institucional
de uma fintech **fictícia**, publicado em <https://cauecm.github.io/ArenaCash/>.

## Estrutura

```
site/
├── index.html            ← landing do curso
├── dia-1.html            ← workbook do Dia 1
├── styles.css            ← componentes do site e do workbook
├── colors_and_type.css   ← tokens do Design System da Product Arena
├── app.js                ← scroll-spy, progresso por passo, atalho "E"
├── assets/               ← logo
└── fonts/                ← Archivo, Inter, JetBrains Mono

material-do-aluno.md      ← o conteúdo do curso escrito para o aluno;
                            é daqui que sai o texto das páginas
```

Site estático, sem build step. Para rodar local:

```bash
cd site && python3 -m http.server 4321
```

O deploy é automático: todo push em `main` publica a pasta `site/` via GitHub Actions.

## Como usar as páginas de dia

- A barra no topo mostra o progresso do dia, salvo no navegador (duplo clique reseta)
- Cada passo de exercício tem um checkbox
- A tecla <kbd>E</kbd> abre e fecha todos os exercícios de uma vez

## Identidade visual

Vermelho Product Arena (`#FF494C`) sobre preto, Archivo para display, Inter para texto e JetBrains Mono
para código. Os tokens estão em `site/colors_and_type.css` — não invente cor nem fonte fora dele.
