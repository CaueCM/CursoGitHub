# Material do aluno — GitHub para não desenvolvedores

> **O que é este documento.** A `ementa.md` é o plano de aula: escrita pro facilitador, com tempos de fala,
> ordem de corte se o tempo apertar e instruções do tipo "mostre em slide". Este documento é a outra ponta:
> o mesmo conteúdo escrito **pro aluno**, em segunda pessoa, sem bastidor de condução.
>
> É daqui que sai o texto de `site/dia-1.html` e `site/dia-2.html`. Quando o conteúdo mudar, muda aqui primeiro.

**As regras de voz deste material:**

1. Fala com o aluno, sempre: "você faz", nunca "o aluno faz" ou "mostre pra turma".
2. Bloco expositivo **ensina**: é texto pra ler e entender, não um roteiro do que o facilitador diz.
3. Nada de bastidor: sem "parte expositiva (7 min)", sem "abra a roda", sem "se faltar tempo corte X".
4. O facilitador só aparece quando o aluno precisa esperar por ele ("seu facilitador vai compartilhar o link").
5. Tempo aparece só onde ajuda o aluno a se organizar: duração do bloco e de cada passo do exercício.
6. Toda seção "o que fixar" fala do que **você** acabou de fazer, não do que a turma deveria ter aprendido.

---

## Dia 1 — Do zero ao primeiro commit

**2h, tudo pelo navegador.** Você explora um repositório de verdade, entende o mecanismo do Git, cria o seu
próprio repositório, commita o primeiro slide e publica ele numa URL pública, sem instalar nada. No último
bloco o Claude Code entra, conecta na sua conta e traz o projeto pra sua máquina.

---

### Bloco 1.1 — O que é o GitHub

#### O que é

GitHub é um lugar na internet que guarda projetos inteiros, com todo o histórico de mudanças, sempre.

Pensa num Google Drive em que cada versão salva fica pra sempre, e dá pra ver exatamente o que cada pessoa mudou, quando e por quê.

Um projeto guardado desse jeito tem um nome: **repositório**. É a palavra que você mais vai ouvir nos
próximos dois dias, então vale se acostumar com ela desde já. Repositório é a pasta do projeto, só que
com memória.

#### As quatro abas que todo repositório tem

Quando você abre um repositório no github.com, sempre encontra as mesmas abas no topo:

| Aba | O que tem lá dentro |
|---|---|
| **Code** | Os arquivos do projeto, como numa pasta comum |
| **Commits** | O histórico: o que mudou, quando e por quem |
| **Branches** | As linhas do tempo paralelas que existem hoje no projeto |
| **Pull requests** | Os pedidos de "posso juntar minha mudança na versão principal?" |

Você não precisa entender cada uma delas agora. Precisa só saber que existem. A gente volta em todas as quatro ao longo dos dois dias, uma de cada vez.

#### Exercício 1 — Explore o repositório da ArenaCash, sem roteiro

Este é o repositório da ArenaCash, a fintech fictícia que serve de cenário pros exercícios. É um
repositório com história de verdade: vários commits, duas branches abertas e Pull Requests.

**O repositório:** <https://github.com/Product-Arena/arena-cash>
**O site que sai dele, no ar:** <https://product-arena.github.io/arena-cash/>

Abra os dois em abas separadas. Um é o código; o outro é o mesmo código publicado, funcionando na
internet. No fim do Dia 1 você vai ter esse mesmo par, repositório e página no ar, com o seu nome.

**Não tem entregável neste exercício.** O objetivo é você criar familiaridade antes da gente nomear as
peças. Não tem resposta certa e não tem como errar.

**Passo 1 — Navegue sozinho**

Passe cinco minutos só explorando o repositório, sem explicação nenhuma. Clique em tudo que parecer
clicável. Entre nas abas, abra um arquivo, clique num commit.

Enquanto navega, vá anotando (mentalmente ou num papel) duas coisas:

- o que você **reconheceu** (algo que lembra o Drive, o Notion, qualquer outra ferramenta)
- o que ficou **estranho** (palavra que você nunca viu, tela que não fez sentido)

> **O que fixar:** o repositório que você acabou de espiar é o mesmo tipo de estrutura que **você** vai
> criar do zero daqui a pouco, no Bloco 1.4.

---

### Bloco 1.2 — Por que usar GitHub sendo não-técnico

Ninguém aqui vai virar engenheiro. Então a pergunta é **o que isso destrava pra você, hoje, no seu trabalho**.

São cinco respostas.

#### 1. Vibe coding direto no código da empresa

Hoje, quando você quer um ajuste numa tela, o caminho é descrever pro time técnico e entrar na fila.

Com o código num repositório que você consegue acessar, dá pra pedir o ajuste direto ao Claude e ver o resultado em minutos, não em sprints. Não pra substituir o time de engenharia, mas pra você conseguir
testar uma ideia antes de pedir que alguém a construa de verdade.

#### 2. Repositório de apresentações e HTML

Suas apresentações e protótipos em HTML deixam de ser arquivo solto anexado em email ou perdido numa
pasta do Drive.

Ganham três coisas de uma vez: histórico (dá pra ver como aquilo evoluiu), versionamento (dá pra voltar)
e um link público que não quebra.

#### 3. Análise de dados e algoritmos da empresa

Muito processo importante da empresa mora em código: scripts, planilhas versionadas, a regra que decide
quem recebe qual oferta.

Com o Claude ajudando a ler, você consegue entender essa lógica sem aprender a programar. Deixa de ser
"só o time técnico enxerga isso".

#### 4. Controle de versão

Nada se perde. Toda mudança tem autor, data e motivo registrados.

Errou, testou algo que não funcionou, quer voltar pro que tinha ontem? É questão de segundos, não de reconstruir do zero.

#### 5. Repositórios públicos como base de conhecimento

Os quatro motivos acima são sobre *o seu* código. Este é sobre o dos outros: o GitHub é também a maior
biblioteca aberta de conhecimento técnico que existe, e ela não é só código. Tem listas curadas, produtos
inteiros com o código à mostra e coleções organizadas por assunto.

Pra quem não programa, o uso prático é direto: **abrir, ler e perguntar**. Cole um trecho no Claude e peça
a explicação, ou peça ao Claude Code pra ler o repositório inteiro e resumir o que dá pra aproveitar.
Quatro pra começar:

| Onde | O que é |
|---|---|
| <https://github.com/public-apis/public-apis> | Um catálogo enorme de APIs públicas e gratuitas, separadas por assunto. Ótimo pra descobrir com o que o seu protótipo poderia conversar |
| <https://github.com/sindresorhus/awesome> | O índice das "awesome lists": coletâneas sobre praticamente qualquer tema, de design a economia. Comece por aqui quando não souber por onde começar |
| <https://github.com/OpenCut-app/OpenCut> | Um editor de vídeo open source, alternativa ao CapCut. Dá pra ver as decisões de produto de um app real: issues, roadmap e discussões, tudo à vista |
| <https://github.com/topics/claude-skills-hub> | Não é um repositório: é uma etiqueta que agrupa vários. Este junta coleções de skills do Claude, e o mesmo truque vale pra qualquer outro tema |

**Público não quer dizer sem dono.** Ler, estudar e aprender com qualquer repositório público é sempre
livre. Já reaproveitar pedaços num projeto da sua empresa depende da **licença**, aquele arquivo `LICENSE`
na raiz. Na dúvida, pergunte ao Claude o que aquela licença permite antes de copiar.

#### Exercício 2 — Descubra por que o algoritmo decidiu isso

Você vai usar um sistema da ArenaCash, estranhar o resultado e ir atrás da regra que causou aquilo,
**sem saber programar**.

**Entregável:** nenhum arquivo. Você sai daqui conseguindo explicar, em português, por que o simulador
indicou o que indicou.

**Passo 1 — Use o simulador e estranhe o resultado**

A ArenaCash tem um simulador que pergunta idade, salário e perfil de investidor, e indica um produto:
<https://product-arena.github.io/arena-cash/simulador.html>

Teste estes três casos e anote o produto de cada um:

| Caso | Idade | Salário | Perfil |
|---|---|---|---|
| A | 28 | R$ 8.000 | Arrojado |
| B | 25 | R$ 600 | Arrojado |
| C | 55 | R$ 9.000 | Arrojado |

No **caso B**, a tela diz "pontuação de risco calculada: **6 de 6**", a pontuação
máxima, e mesmo assim indica o produto mais conservador de todos. Guarde esse estranhamento.

**Passo 2 — Vá até o código que tomou essa decisão**

**O código está aberto**, no mesmo repositório que você explorou no bloco anterior.

1. Abra o repositório da ArenaCash no GitHub
2. Na aba **Code**, procure o arquivo `simulador.js`
3. Clique nele: o GitHub mostra o conteúdo direto no navegador, sem baixar nada

Atalho, se precisar: <https://github.com/Product-Arena/arena-cash/blob/main/simulador.js>

**Não tente entender tudo.** O arquivo tem cinco partes numeradas, com títulos em português. Vá direto na
parte **3, "A decisão"**, e leia só os comentários, os blocos que começam com `//`.

**Passo 3 — Responda as três perguntas**

1. Por que o **caso B** recebeu o produto mais conservador, mesmo com pontuação máxima? *(dica: procure a
   regra que o próprio código diz que "vem primeiro de propósito")*
2. No **caso C**, uma pessoa de 55 anos e perfil arrojado recebe o mesmo produto que alguém de 35 anos e
   perfil moderado. O que no código faz isso acontecer?
3. Você **concorda** com essas duas regras? Se o produto fosse seu, mudaria alguma?

**Pode usar a LLM que você quiser** aqui — Claude, ChatGPT, Gemini, tanto faz. Cole o trecho do
`simulador.js` e peça pra ela explicar em português. Só confira a explicação no arquivo antes de aceitar:
a resposta que vale é a que você consegue defender.

A pergunta 3 é a mais importante. Ler o código não é o objetivo, o objetivo é conseguir **opinar sobre
uma decisão de produto** que antes estava trancada num arquivo que só o time técnico abria.

> **O que fixar:** você acabou de fazer, na unha, o motivo **3**, entendeu a lógica por trás de um
> produto sem escrever uma linha de código, só lendo o que estava aberto no GitHub.
>
> Foi trabalhoso, e é pra ser mesmo. **No Dia 2**, com o Claude Code conectado à sua conta, você vai poder
> pedir *"explica em português o que esse arquivo faz e quais regras podem gerar resultado estranho"*, e
> receber em segundos o que você garimpou em 12 minutos. A diferença é que aí você **sabe conferir se a
> resposta está certa**.

---

### Bloco 1.3 — Como funciona o Git

#### Git e GitHub são coisas diferentes

Essa é a primeira confusão que vale desfazer:

- **Git** é o sistema que guarda o histórico. Ele roda **onde o projeto está**, na sua máquina ou nos
  servidores do GitHub.
- **GitHub** é o lugar na nuvem onde esse histórico fica visível e compartilhável.

Dá pra usar Git sem GitHub (ninguém veria seu histórico) e o GitHub existe pra dar um endereço, uma tela
e um lugar de conversa pro que o Git já guardava sozinho.

#### O mapa: o mesmo projeto em dois lugares

```
SEU COMPUTADOR                       GITHUB (nuvem)
+-------------------+                +-------------------+
|  pasta do projeto  |    push -->   |  mesmo projeto     |
|  (com Git ligado)  |   <-- pull    |  com histórico     |
+-------------------+                |  completo          |
                                     +-------------------+
                                              ^
                                              | Pull Request
                                              |
                                        +------------+
                                        | alguém     |
                                        | revisa     |
                                        +------------+
```

O projeto existe **nos dois lugares ao mesmo tempo**. E, isso é o que pega todo mundo no começo, os
dois **não se atualizam sozinhos**. Você editou um arquivo no seu computador? O GitHub não sabe de nada
até você mandar (`push`). Alguém mudou algo no GitHub? Sua pasta não muda até você buscar (`pull`).

#### Os 5 conceitos centrais

São só cinco. Não precisa de mais nada pra fazer tudo que a gente vai fazer nos dois dias.

**1. Repositório (repo)**, a pasta do seu projeto, só que com memória.
*Pensa numa pasta do Drive que lembra de toda versão que já existiu dela.*

**2. Commit**, uma foto do projeto num momento, com um bilhete explicando o que mudou.
*Imutável: uma vez tirada, fica pra sempre no histórico.*

**3. Local vs. remoto**, a mesma pasta existe no seu computador (local) e no GitHub.com (remoto).
Elas só ficam iguais quando você manda (`push`) ou busca (`pull`).

**4. Branch**, uma linha do tempo paralela.
*Você não testa a ideia nova direto na versão que está no ar. Cria uma cópia paralela, testa lá, e só
depois decide se ela "entra" na principal.*

**5. Pull Request (PR)**, o pedido de "posso juntar minha branch na principal?", com espaço pra alguém
revisar e comentar antes de aceitar.

#### Uma branch, desenhada

Esse é o conceito mais difícil de imaginar só com palavras. Então olha ele como linha do tempo, cada
bolinha é um commit, cada faixa é uma linha do tempo diferente.

> **Na página este trecho é um diagrama** (SVG inline em `site/dia-1.html`), com três faixas: `main` em
> vermelho, `slide-novo` em amarelo e `cor-do-botao` em verde-limão. As duas branches saem da main; a
> amarela recebe dois commits e volta pra main num merge, a verde recebe dois commits e continua aberta.

As duas branches saíram da **main** e seguiram sozinhas. A amarela terminou e **voltou**, daí em diante
o trabalho dela faz parte da main. A verde ainda está aberta: o trabalho existe, mas não chegou na versão
oficial. **Nada do que acontece numa branch afeta as outras até alguém juntar.**

Você vai fazer exatamente esse desenho acontecer amanhã, no Dia 2, criando as branches, mesclando uma e resolvendo um conflito de verdade no meio do caminho.

#### As 4 fases de uma mudança

Esta sequência vai aparecer o dia todo. Você não precisa decorar: vai ver as quatro acontecendo na tela daqui a pouco, e aí vira intuição.

1. **Você edita um arquivo na pasta local**, a mudança está "solta"
2. **Você seleciona o que quer guardar**, isso se chama *staging*
3. **Você commita**, a foto é tirada (ainda só no seu computador)
4. **Você faz push**, a foto sobe pro GitHub

As fases 1, 2 e 3 acontecem **só na sua máquina**. Só a fase 4 toca a nuvem.
É por isso que dá pra trabalhar sem internet e mandar tudo depois.

#### Dicionário de termos

Deixa essa lista à mão. Sempre que travar num termo nos próximos dois dias, é aqui que você volta.

| Termo | O que significa |
|---|---|
| **Repositório (repo)** | A pasta do projeto, com todo o histórico de mudanças guardado |
| **Commit** | Uma "foto" salva do projeto, com uma mensagem explicando o que mudou |
| **Branch** | Uma linha do tempo paralela pra testar algo sem mexer na versão principal |
| **Main** | O nome padrão da branch principal, a versão "oficial" do projeto |
| **Clone** | Baixar uma cópia completa de um repositório (com histórico) pro seu computador |
| **Push** | Mandar seus commits do computador (local) pro GitHub (remoto) |
| **Pull** | Buscar as mudanças mais recentes do GitHub pro seu computador |
| **Merge** | Juntar as mudanças de uma branch em outra (geralmente em `main`) |
| **Conflito (merge conflict)** | Quando duas branches mudaram a mesma linha de formas diferentes, e alguém precisa decidir qual fica |
| **Pull Request (PR)** | Um pedido formal de "posso juntar minha branch em main?", com espaço pra revisão e comentários antes de aceitar |
| **Fork** | Uma cópia própria de um repositório de outra pessoa, na sua conta |
| **Deploy** | Publicar o projeto numa URL que qualquer pessoa acessa pela internet |
| **GitHub Pages** | O serviço gratuito do GitHub pra publicar sites estáticos direto de um repositório |
| **Claude Code** | O Claude rodando no terminal, capaz de agir nos seus arquivos e no Git |

---


### Bloco 1.4 — Seu repositório e seu primeiro commit

Até agora você só explorou coisa que já existia. Agora você cria a sua.

Tudo acontece no navegador: você cria o repositório, pede o HTML
ao Claude e commita, sem instalar nada, sem terminal.

#### Exercício 3 — Do repositório vazio ao primeiro slide commitado

**O cenário:** você foi chamado pra prototipar uma nova campanha da ArenaCash — *"Indique um amigo e ganhe
R$ 50"*. Sua missão hoje é criar o repositório do protótipo e ter o slide de capa versionado.

**Entregável:** um repositório novo e público no GitHub, com um `index.html` de capa gerado pelo Claude e
commitado, visível na aba **Commits**.

**Passo 1 — Crie o repositório no github.com**

1. Logado no github.com, clique no **+** no canto superior direito → **New repository**
2. Repository name: `meu-prototipo-arenacash`
3. Escolha **Public**, precisa ser público pra publicar de graça no próximo bloco
4. Marque **Add a README file**
5. Clique em **Create repository**

O repositório já nasceu **com um commit**. Vá na aba **Commits** e veja — "Initial commit". A
criação do README já foi uma foto.

**Passo 2 — Peça o primeiro slide ao Claude**

Abra o [claude.ai](https://claude.ai) em outra aba e mande:

> Cria um arquivo HTML de uma apresentação de slides simples, com CSS embutido no mesmo arquivo (sem
> arquivos separados). O primeiro slide deve ser uma capa para a campanha "Indique um amigo e ganhe R$ 50"
> da ArenaCash, fintech com visual moderno, cores azul e branco. Inclua título grande, um subtítulo e um
> botão "Saiba mais". Não precisa de JavaScript ainda, só um slide por enquanto. Me devolve o código
> completo do arquivo.

O Claude mostra o slide **renderizado ali mesmo**, ao lado do código. Olhe se ficou bom antes de seguir, se quiser mudar cor, texto ou tamanho, peça agora, no chat. É muito mais rápido do que corrigir depois de
commitar.

Quando estiver satisfeito, **copie o código completo**.

**Passo 3 — Crie o arquivo e commite, tudo no navegador**

1. Volte pro seu repositório no github.com
2. Clique em **Add file → Create new file**
3. No campo do nome, digite `index.html`
4. Cole o código do Claude na área grande abaixo
5. Role até o fim e escreva a mensagem de commit:
   `primeiro slide da capa da campanha indique um amigo`
6. Clique em **Commit changes**

Pronto: seu `index.html` está no GitHub. Vá na aba **Commits** e confirme que sua mensagem aparece lá.

> **Por que o GitHub não mostra o slide bonito?** Porque ele exibe o *código* do arquivo, não o resultado.
> Pra ver o slide funcionando você precisa publicar na internet (o próximo bloco) ou ter uma cópia local
> (Bloco 1.6). Por enquanto, quem te mostrou o resultado foi o Claude.

**Passo 4 — Faça uma segunda mudança e veja o histórico crescer**

1. Abra o `index.html` no github.com e clique no **lápis** (Edit this file)
2. Mude alguma coisa pequena e visível, o texto do botão, por exemplo
3. Commite com a mensagem: `ajusta o texto do botao`
4. Vá na aba **Commits** e clique no commit que você acabou de fazer

O GitHub mostra o **diff**: a linha antiga em vermelho, a nova em verde. É essa tela que vai aparecer de
novo no Dia 2, quando você revisar um Pull Request.

> **O que fixar:** você versionou um projeto sem instalar nada. Isso já é útil por si só, dá pra manter
> apresentação, protótipo e documento com histórico completo **usando só o navegador**.
>
> Só que, por enquanto, o protótipo só existe como *código*: quem quiser ver o slide depende de você
> mandar o arquivo. No próximo bloco isso vira um link público, com uma chave que você liga uma vez.

---

### Bloco 1.5 — Publicando o seu protótipo

Um protótipo que só abre na sua máquina não circula. Um link circula.

O mesmo repositório que guarda o seu `index.html` consegue servir esse arquivo como site, de graça.
**GitHub Pages** é o serviço do GitHub que publica um site estático direto de um repositório: gratuito,
sem cartão de crédito, sem servidor pra configurar. É por isso que o repositório precisava ser **público**
lá no Bloco 1.4.

O que acontece depois que você liga:

```
Você commita → a main muda → o Pages republica sozinho → a URL atualiza (≈1 min)
```

Você configura **uma vez só**. Daí em diante, todo commit que entrar na `main` atualiza o site publicado
sozinho. E repare no sentido da coisa: **o site é gerado a partir do repositório, nunca o contrário**. Não
existe editar a página publicada, você edita o repositório e ele republica.

#### Exercício 4 — Coloque o seu protótipo no ar

No fim deste exercício você tem um link pra mandar pra qualquer pessoa, que abre no celular dela, sem
instalar nada e sem ela ter conta no GitHub.

**Entregável:** uma URL pública no ar, no formato `https://<seu-usuario>.github.io/meu-prototipo-arenacash/`.

**Passo 1 — Ligue o GitHub Pages**

1. Abra `github.com/<seu-usuario>/meu-prototipo-arenacash`
2. Clique em **Settings**, a aba no topo *do repositório* (não a configuração da sua conta)
3. No menu lateral, clique em **Pages**
4. Em **Source**, deixe **Deploy from a branch**
5. Em **Branch**, selecione **main** e a pasta **/ (root)**
6. Clique em **Save**
7. Espere cerca de um minuto e recarregue a página: aparece no topo *"Your site is live at…"* com a sua URL

Se ainda não apareceu, não mexa em nada: recarregue de novo daqui a pouco. A primeira publicação é a mais
demorada. Na aba **Actions** do repositório dá pra ver a publicação acontecendo.

**Passo 2 — Abra a sua URL e mande pra alguém**

1. Abra a URL numa **aba anônima**, pra garantir que não é cache do seu navegador
2. Abra também no celular
3. Mande o link pra alguém da turma

Este é o mesmo `index.html` que o GitHub te mostrava como código no bloco anterior. A diferença é que agora
tem um endereço que **executa** o arquivo em vez de exibir o texto dele.

**Passo 3 — Mude uma coisa e veja o site se atualizar sozinho**

Deixe as duas abas abertas, o repositório e o site, pra ver o efeito:

1. No repositório, abra o `index.html` e clique no **lápis**
2. Mude o título da capa
3. Commite com a mensagem: `ajusta o titulo da capa`
4. Espere cerca de um minuto e recarregue a aba do site (`Cmd + Shift + R` no Mac, `Ctrl + F5` no Windows)

O texto novo está lá. **Você não enviou arquivo pra lugar nenhum:** commitou no repositório, e a publicação
foi consequência.

> **O que fixar:** publicar deixou de ser um pedido pra outra pessoa. O caminho do seu protótipo até um
> link que qualquer um abre tem **um commit e um minuto** de distância, e você controla os dois.
>
> Falta a última peça do mapa: a cópia na **sua máquina**. É ela que destrava trabalhar offline e,
> principalmente, deixar o **Claude Code** agir no projeto.

---

### Bloco 1.6 — Conectando o Claude Code

Até agora, quem clicava era você, no navegador. A partir daqui quem executa também pode ser o **Claude
Code**, e é ele que vai trazer o projeto pra sua máquina.

Claude Code é o Claude rodando no terminal. Ele entende pedidos em português e executa ações reais nos
seus arquivos e no Git, sem você digitar comando nenhum. Mas só consegue agir na sua conta do GitHub
depois de uma autorização, feita **uma vez só**.

Seu facilitador vai fazer a conexão na tela primeiro. Ele roda `claude`, pede *"conecta essa sessão à
minha conta do GitHub"*, o Claude Code dispara um `gh auth login`, o navegador abre e ele autoriza. É como
logar no Notion ou no Spotify num computador novo.

#### Exercício 5 — Conecte o Claude Code e traga o projeto pra sua máquina

**Entregável:** Claude Code autenticado na sua conta e o repositório clonado numa pasta do seu computador.

**Passo 1 — Abra o Claude Code e conecte**

1. Abra o Terminal (Mac) ou o PowerShell (Windows)
2. Vá pra uma pasta fácil de achar — `cd Documentos`, por exemplo
3. Rode `claude`
4. Peça: *"Conecta essa sessão à minha conta do GitHub."*

Siga o fluxo que abre no navegador: **GitHub.com → HTTPS → Login with a web browser**, e autorize.

**Passo 2 — Peça pra ele clonar o seu repositório**

> Clona o meu repositório `meu-prototipo-arenacash` aqui nesta pasta e me diz o que tem dentro dele.

Ele deve clonar e listar: `index.html` e `README.md`. Se conseguiu, a conexão funcionou.

Agora abra essa pasta no Finder/Explorador e dê **duplo clique no `index.html`**.

> O slide abre no navegador, renderizado, e continua funcionando se você desligar o wi-fi. É um arquivo no
> seu computador, não o site que você publicou no bloco anterior. Mesmo conteúdo, endereço diferente.

**Passo 3 — Os três lugares onde um projeto vive**

Agora que existe uma cópia local, dá pra ver o mapa inteiro. Um projeto publicado vive em até três
instâncias, e elas **não são cópias automáticas uma da outra**:

| # | Instância | O que é | Quem alcança |
|---|---|---|---|
| 1 | **Local**, sua máquina | A pasta que o Claude Code clonou. Funciona sem internet | só você |
| 2 | **Remoto**, github.com | O repositório na nuvem, com histórico, branches e PRs | qualquer pessoa lê o código |
| 3 | **No ar** — GitHub Pages | O site publicado, gerado a partir da `main` | qualquer pessoa acessa, sem ver código |

> **Na página este trecho é um diagrama** (`.instancias-figura`, em `site/dia-1.html`), com as três
> instâncias empilhadas e os conectores entre elas: `push`/`pull` entre local e remoto, `deploy` do remoto
> pro ar, este último **só de ida**.

**Agora você tem as três.** O remoto nasceu no Bloco 1.4, o site no ar no 1.5, e a cópia local acabou de
chegar com o clone. Entre local e remoto o trânsito é nos dois sentidos; do remoto pro ar é só de ida —
**ninguém edita o site publicado, edita-se o repositório**.

Pra fechar, compare os três endereços na ArenaCash, que tem exatamente o mesmo desenho que o seu projeto
agora tem:

| Instância | Endereço | Some se cair a internet? |
|---|---|---|
| Local | a pasta clonada na sua máquina | Não, continua funcionando |
| Remoto | <https://github.com/Product-Arena/arena-cash> | Sim |
| No ar | <https://product-arena.github.io/arena-cash/> | Sim |

> **O que fixar:** essa autorização é feita **uma vez só**. E agora você tem o mapa inteiro: a pasta
> local, o repositório remoto e o site no ar. É com a pasta local e o repositório remoto que o Dia 2
> inteiro acontece.

---

### Bônus — O mesmo protótipo na Vercel

**Opcional.** Nada do Dia 2 depende deste bônus. Ele existe por dois motivos: mostrar que o GitHub Pages não
é a única porta de saída do seu repositório, e te dar o primeiro **deploy pedido em português**, com o
Claude Code fazendo o trabalho.

**Vercel** é uma empresa de hospedagem de sites. O plano gratuito, o *Hobby*, atende projeto pessoal sem
cartão de crédito.

O modelo mental é **exatamente o mesmo** do Bloco 1.5: o site é gerado a partir do repositório. Você não
sobe arquivo, você commita, e a Vercel republica. O que muda é onde a chave é ligada — no Pages, dentro do
`Settings` do repositório; na Vercel, numa conta separada que você conecta ao seu GitHub.

| | GitHub Pages | Vercel |
|---|---|---|
| Onde você liga | Settings do próprio repositório | Conta na Vercel, conectada ao GitHub |
| Publica a partir de | a branch `main` | a `main`, e também qualquer outra branch |
| Link por branch | não tem | **tem**, cada branch ganha uma URL própria |
| Conta nova | não precisa | precisa, mas dá pra entrar com o GitHub |
| Domínio próprio | dá | dá |

A linha que importa é a do meio. "Link por branch" quer dizer que, amanhã, cada variação do protótipo pode
ter o *seu* endereço, e dá pra mandar duas versões pra alguém comparar antes de decidir qual entra.

Ter os dois no ar ao mesmo tempo não quebra nada, e ainda prova o ponto do Bloco 1.5: **o repositório é a
fonte**. Duas hospedagens lendo o mesmo `index.html` mostram o mesmo resultado, porque nenhuma das duas é
onde o conteúdo mora.

#### Exercício Bônus — Suba o seu protótipo na Vercel, sem sair do Claude Code

Você vai fazer um deploy inteiro **conversando**: quem instala, autentica e publica é o Claude Code. Seu
papel é autorizar, conferir o que ele responde e abrir a URL no fim.

**Entregável:** uma segunda URL pública, no formato `https://meu-prototipo-arenacash.vercel.app`, servindo
o mesmo `index.html` que já está no GitHub Pages.

**Passo 1 — Crie a conta na Vercel, no navegador**

Esta parte é só sua: **o Claude Code não cria conta em nenhum serviço por você**, e é bom que seja assim.

1. Abra <https://vercel.com/signup>
2. Escolha **Continue with GitHub** e autorize
3. Quando perguntar o tipo de conta, escolha **Hobby**, o gratuito
4. Se ela pedir pra importar um projeto agora, **pule**: quem importa é o Claude Code, no próximo passo

É a mesma lógica de "entrar com o Google" num app novo: a Vercel passa a enxergar os seus repositórios, mas
eles continuam sendo seus, no GitHub.

**Passo 2 — Peça o deploy ao Claude Code**

No terminal, **dentro da pasta clonada** no Bloco 1.6, rode `claude` e mande:

> Publica esta pasta na Vercel usando o Vercel CLI. Faz o login na minha conta, cria um projeto novo chamado
> `meu-prototipo-arenacash` e sobe em produção. É um site estático de HTML puro, sem build. Me explica cada
> comando antes de rodar e me devolve a URL final.

O que vai acontecer, na ordem:

1. Ele pede **sua autorização** pra rodar cada comando. Leia e aprove: é você quem decide o que roda na sua
   máquina
2. O login (`vercel login`) abre o navegador. Escolha **Continue with GitHub**, a mesma conta do Passo 1, e
   volte pro terminal
3. Na publicação (`vercel --prod`) aparecem algumas perguntas, e os padrões servem: *escopo* = sua conta
   pessoal; *link to existing project* = não; *diretório do código* = `./`; *modificar as configurações de
   build* = não
4. No fim ele imprime a URL. Abra ela no navegador

**Se travar:** erro de permissão ao instalar o CLI? Peça *"usa `npx vercel` em vez de instalar global"*.
Perguntou qual framework? A resposta é **nenhum / Other**, o projeto é HTML puro e não tem etapa de build. E
se ele parecer parado, é porque a aba do navegador está aberta esperando o seu login.

**Passo 3 — Ligue o repositório, pra publicar sozinho**

O deploy anterior mandou os arquivos *uma vez*, da sua pasta. Agora a fonte volta a ser o repositório:

> Conecta esse projeto da Vercel ao meu repositório `meu-prototipo-arenacash` no GitHub, pra que todo push
> na `main` publique sozinho.

Dá pra conferir no navegador: em <https://vercel.com/dashboard>, abra o projeto → **Settings** → **Git**. O
nome do seu repositório precisa aparecer ali como conectado.

**Passo 4 — Um commit, duas URLs atualizadas**

Deixe as duas abas abertas, a do `github.io` e a do `vercel.app`, e peça:

> Muda o subtítulo da capa do `index.html` pra "Campanha de indicação · versão de teste", commita com uma
> mensagem descritiva e faz push pra `main`.

Espere cerca de um minuto e recarregue as duas abas (`Cmd + Shift + R` no Mac, `Ctrl + F5` no Windows). O
texto novo aparece **nas duas**. Você fez um commit; dois serviços diferentes reagiram a ele sozinhos.

Repare no que você *não* fez: não abriu painel de servidor, não mandou arquivo por FTP, não pediu pra
ninguém publicar. O trabalho foi descrever a mudança em português.

> **O que fixar:** trocar de hospedagem não é migrar o projeto. O projeto é o repositório, e hospedagem é só
> quem lê ele — foi por isso que deu pra ter as duas ao mesmo tempo sem escolher nenhuma.
>
> E guarde a linha "link por branch" da tabela. **Amanhã você vai criar branches**, e com a Vercel conectada
> cada uma delas ganha uma URL própria, de graça: a variação vira algo que você *manda pra alguém abrir*, não
> algo que você descreve.

---

### Bloco 1.7 — Fechando o Dia 1

#### O que você fez hoje

- Explorou um repositório de verdade antes mesmo de saber o nome das coisas
- Leu um algoritmo de produto e opinou sobre as regras dele, sem saber programar
- Montou o modelo mental do Git e tem um dicionário pra consultar
- Criou um repositório do zero e commitou três vezes, **usando só o navegador**
- Publicou o protótipo numa URL pública, e viu ela se atualizar sozinha depois de um commit
- Conectou o Claude Code à sua conta e trouxe o projeto pra sua máquina

#### Uma pergunta pra levar

Volte nos cinco motivos do Bloco 1.2. **Já dá pra imaginar usando isso pra alguma dessas cinco coisas no
seu trabalho, essa semana?**

Não precisa responder agora. Mas é a pergunta que faz o Dia 2 valer a pena.

#### O que vem amanhã

Hoje você só usou a branch `main`, uma linha do tempo só, reta. E fez tudo clicando.

Amanhã o Claude Code assume a execução: você vai criar variações paralelas do protótipo, ver elas se
cruzando (inclusive um conflito de verdade, que **você** decide como resolver), revisar mudanças antes de
aprovar e fechar o dia com um segundo site no ar, construído a quatro mãos com outra pessoa.

---

## Dia 2 — Branches, conflitos e Pull Requests

**2h.** Ontem você usou uma linha do tempo só, e fez tudo clicando. Hoje quem executa é o **Claude Code**: você
abre linhas paralelas, vê elas se cruzarem, inclusive dando conflito, que **você** decide como resolver, revisa
antes de aprovar e termina com um segundo site no ar, feito em dupla.

---

### Bloco 2.1 — Recap do Dia 1

Abra o terminal, entre na pasta `meu-prototipo-arenacash` que o Claude Code clonou ontem e rode `claude`.
Depois peça:

> Me mostra o histórico deste repositório: quantos commits tem, o que cada mensagem diz, em qual branch eu
> estou e se tem alguma mudança pendente.

Ele responde com o mesmo que você viu na aba **Commits** do github.com ontem, e é esse histórico que tudo
de hoje vai usar como ponto de partida.

Antes de seguir, releia as duas listas do Dia 1: as **4 fases** (editar → selecionar → commitar → push) e
os **5 conceitos** (repo, commit, local/remoto, branch, PR).

> Você pede em português, mas o que ele faz por trás são os mesmos comandos que existiriam de qualquer
> jeito. O bônus deste dia mostra exatamente quais.

---

### Bloco 2.2 — Branches: criar e trocar

#### Por que não trabalhar direto na main

Tudo que você fez ontem foi direto na `main`. Isso é arriscado: se você testa uma ideia ruim ali, ela já
está "oficial".

Branch resolve isso. É como duplicar um documento do Google Docs pra rascunhar uma versão nova sem tocar
no original, só que, no Git, você pode ter dezenas de rascunhos ao mesmo tempo, cada um isolado.

#### O que é fazer *switch*

É trocar qual rascunho está aberto na sua pasta local.

E aqui vem a parte que costuma surpreender: **quando você troca de branch, os arquivos na sua pasta mudam
de conteúdo na hora**. Ontem isso seria impossível de ver, porque você não tinha pasta local. Hoje tem.

#### Exercício 6 — Criando uma branch e vendo a pasta local mudar

**O cenário:** o time de marketing quer testar uma paleta de cores diferente pro slide de capa, sem
arriscar a versão que já está no ar.

**Entregável:** uma branch `variacao-cores` com uma versão diferente do slide de capa, commitada e
publicada, e a experiência de ver a pasta local mudar de conteúdo ao trocar de branch.

**Passo 1 — Crie a branch**

> Cria uma branch chamada `variacao-cores` a partir da main e muda pra ela. Depois me confirma em qual
> branch eu estou.

**Passo 2 — Peça a mudança de cor, na branch nova**

> Nessa branch, muda a paleta de cores do slide de capa do `index.html` pra tons de verde e roxo, mantendo
> a estrutura e os textos iguais.

Abra o `index.html` da pasta no navegador e confirme que a cor mudou. Se não gostou, peça um ajuste antes
de commitar, está tudo isolado nesta branch.

**Passo 3 — Commite e publique a branch**

> Commita com a mensagem "testando paleta verde e roxo" e faz push desta branch.

Vá no github.com, na aba **Branches** do seu repositório: agora existem duas.

**Passo 4 — Volte pra main e veja o arquivo mudar sozinho**

**Antes de pedir**, deixe o `index.html` aberto no navegador, numa aba visível. Depois:

> Volta pra branch main.

Agora recarregue aquela aba. **A cor voltou pro azul e branco.**

Você não editou nada, e o Claude Code não reescreveu o arquivo. O arquivo na sua pasta mudou de conteúdo
*sozinho*, só porque a branch ativa mudou. Peça *"volta pra variacao-cores"* e recarregue de novo, vai e
volta quantas vezes quiser.

> **O que fixar:** a branch não é uma pasta separada: é a **mesma pasta mudando de estado** conforme a
> linha do tempo ativa.

---

### Bônus — O que o Claude Code roda por trás

**Opcional**

Cada pedido em português vira um comando de Git. Você não precisa digitá-los, mas reconhecer ajuda muito,
porque é a língua que qualquer tutorial e mensagem de erro falam.

| O que você pediu | O que ele rodou |
|---|---|
| "me mostra o histórico" | `git log --oneline` |
| "tem mudança pendente?" | `git status` e `git diff` |
| "cria uma branch e muda pra ela" | `git checkout -b variacao-cores` |
| "volta pra main" | `git checkout main` |
| "commita com a mensagem X" | `git add .` + `git commit -m "X"` |
| "faz push desta branch" | `git push -u origin variacao-cores` |

#### Exercício Bônus — Confira na unha o que ele fez

**Entregável:** nenhum arquivo.

1. Saia do Claude Code (`Ctrl + C` ou `/exit`), você volta pro terminal comum, na mesma pasta
2. Rode `git log --oneline` e compare com o histórico que ele te descreveu
3. Rode `git branch`. As duas branches aparecem, e a que tem `*` na frente é a ativa
4. Rode `git status`. Sem mudanças pendentes, responde `nothing to commit, working tree clean`
5. Rode `claude` de novo pra voltar

> **O que fixar:** o Claude Code não faz nada de mágico nem de invisível. Ele roda os mesmos comandos que
> estariam ali de qualquer jeito, e **deixa rastro**, do mesmo jeito que você deixaria. Você acabou de
> auditar o trabalho dele.

---

### Bloco 2.3 — Formem a dupla

**Em dupla, a partir daqui.**

Escolham quem é a **pessoa A** e quem é a **pessoa B**: os exercícios usam esses nomes pra dizer quem faz
o quê.

Até agora o repositório era seu e ninguém mais mexia nele. Num projeto de verdade não é assim: várias
pessoas trabalham no mesmo código, ao mesmo tempo, sem combinar cada linha. É aí que branch, merge e Pull
Request deixam de ser burocracia.

#### Exercício 7 — Um repositório para os dois

**Entregável:** um repositório novo e público, com os dois como colaboradores, clonado nas duas máquinas e
com o Pages ligado.

**Passo 1 — Pessoa A cria o repositório e o primeiro slide**

> Cria um repositório público novo no GitHub chamado `prototipo-dupla-<nomes de vocês>`, clona ele aqui e
> coloca dentro um `index.html` com um slide de capa da campanha "Indique um amigo e ganhe R$ 50" da
> ArenaCash. O slide precisa ter um botão com o texto "Saiba mais". Commita e faz push.

O botão importa: é nele que o conflito do próximo bloco vai acontecer.

**Passo 2 — Pessoa A dá acesso à pessoa B**

1. **Settings** → **Collaborators** → **Add people**
2. Digite o usuário do GitHub da pessoa B e confirme

**Pessoa B:** aceite o convite (chega por email e em `github.com/notifications`) antes de seguir, senão o
clone do próximo passo falha.

**Passo 3 — Pessoa B clona, e os dois ligam o Pages**

> Clona o repositório `<usuario-da-pessoa-A>/prototipo-dupla-<nomes>` aqui nesta pasta e me mostra o que
> tem dentro.

Pessoa B: abra o `index.html` local e confirme que vê o mesmo slide. Agora existem três cópias do projeto:
a da máquina de A, a da máquina de B e a do GitHub.

Pessoa A liga o GitHub Pages neste repositório novo, do mesmo jeito que vocês fizeram no repositório de
cada um ontem, no Bloco 1.5 do Dia 1: **Settings → Pages → Branch main → / (root) → Save**. Guardem a URL.

> **O que fixar:** adicionar colaborador é o que transforma um repositório pessoal em projeto de time.
> Tudo que um dos dois manda pro GitHub, o outro consegue puxar. É essa possibilidade que cria o conflito
> do próximo bloco.

---

### Bloco 2.4 — O conflito de verdade

**Em dupla.** É o bloco mais denso do dia. Vocês dois vão mudar a mesma linha ao mesmo tempo, sem combinar
o texto, e depois resolver o que o Git não consegue resolver sozinho.

**Quando o merge dá certo:** as mudanças estão em partes diferentes do arquivo. O Git junta sozinho.

**Quando dá conflito:** duas pessoas mudaram **a mesma linha** de formas diferentes. O Git não tem como
adivinhar quem está certo.

> Conflito é o Git sendo honesto: duas pessoas mudaram a mesma coisa, e ele não vai escolher por vocês.
> **Quem escolhe são vocês, não o Claude Code.**

#### Exercício 8 — Causem um conflito e resolvam juntos

**A regra do exercício:** não combinem o texto do botão. Cada um escolhe o seu, sem contar pro outro. O
conflito precisa ser real pra valer a pena.

**Entregável:** um conflito de verdade, causado pelos dois, resolvido com um texto que vocês decidiram
juntos e mesclado na `main`.

**Passo 1 — Os dois, ao mesmo tempo: cada um na sua branch**

Façam este passo **simultaneamente**, cada um no seu computador. Não olhem a tela do outro.

> **Pessoa A:** cria uma branch chamada `botao-a` a partir da main. Nela, troca o texto do botão do
> `index.html` por *[escolha um texto e não conte pra sua dupla]*. Commita com a mensagem "novo texto do
> botao" e faz push.

> **Pessoa B:** cria uma branch chamada `botao-b` a partir da main. Nela, troca o texto do botão do
> `index.html` por *[escolha um texto e não conte pra sua dupla]*. Commita com a mensagem "novo texto do
> botao" e faz push.

Abram a aba **Branches** no github.com. As duas estão lá, lado a lado.

**Passo 2 — Pessoa A mescla primeiro**

> **Pessoa A:** vai pra main, mescla a branch `botao-a` nela e faz push.

Entrou liso. Quando a pessoa A começou, a main ainda era a original.

**Pessoa B:** abra a URL pública da dupla agora. O botão já mostra o texto que a pessoa A escolheu, e você
não fez nada.

**Passo 3 — Pessoa B tenta mesclar e o Git trava**

> **Pessoa B:** puxa a main atualizada do GitHub e tenta mesclar a minha branch `botao-b` nela. Se der
> conflito, **não resolve sozinho**: me mostra o trecho em conflito, com os marcadores, e me explica o que
> cada lado quer.

Agora trava:

```html
<<<<<<< HEAD
<button>[o texto que a pessoa A escolheu]</button>
=======
<button>[o texto que a pessoa B escolheu]</button>
>>>>>>> botao-b
```

Repararam por que ele travou agora e não antes? Porque a main mudou **depois** que a pessoa B começou. É
esse descompasso que produz conflito, e é por isso que ele aparece muito mais em time do que sozinho.

**Passo 4 — Decidam juntos e finalizem**

Vocês têm dois textos na tela e precisam sair com um. Fica o da pessoa A, o da pessoa B, ou um terceiro?

> **Pessoa B:** resolve o conflito deixando o texto do botão como *[o texto que vocês decidiram]*, apaga os
> marcadores, finaliza o merge e faz push.

**Pessoa A:** peça pra puxar a main atualizada e abra o `index.html`. O texto que aparece é o que vocês
combinaram, e chegou na sua máquina sem você ter editado nada.

> **O que fixar:** o Git impediu que o trabalho de um sobrescrevesse o do outro em silêncio. Sem ele, quem
> salvasse por último ganhava, e ninguém ficaria sabendo.

---

### Bloco 2.5 — Pull Request: revisar antes de aprovar

**Em dupla.**

No exercício anterior vocês mesclaram direto. Funciona, mas ninguém olhou o trabalho do outro antes de
virar oficial. O **Pull Request** é onde essa conversa acontece: dá pra ver o diff linha por linha,
comentar em linhas específicas e aprovar ou pedir mudanças.

#### Exercício 9 — Um PR de cada, revisado pelo outro

**Entregável:** dois PRs, cada um com pelo menos um comentário do colega, aprovados e mesclados na `main`.

**Passo 1 — Cada um cria o seu slide e abre o PR**

Dividam: pessoa A faz o slide de benefícios, pessoa B faz o de depoimento. Ao mesmo tempo.

> **Pessoa A:** cria a branch `slide-beneficios` a partir da main. Nela, adiciona ao `index.html` um slide
> listando 3 benefícios da campanha: R$ 50 pro indicado, R$ 50 pra quem indicou, sem limite de indicações.
> Commita, faz push e abre um Pull Request pra main. Me devolve o link.

> **Pessoa B:** cria a branch `slide-depoimento` a partir da main. Nela, adiciona um slide com um depoimento
> fictício de um cliente da ArenaCash, com nome e citação curta. Commita, faz push e abre um Pull Request
> pra main. Me devolve o link.

**Passo 2 — Revisem o PR um do outro**

No github.com mesmo: revisão é conversa entre pessoas.

1. Abra o PR do colega, aba **Files changed**
2. Veja o diff, com o que foi adicionado em verde
3. Passe o mouse numa linha, clique no **+** e deixe um comentário de verdade
4. **Review changes → Approve**

**Passo 3 — Respondam, mesclem e vejam o segundo dar trabalho**

Cada um lê o comentário e ajusta se fizer sentido. Depois mesclem **um de cada vez**: primeiro o da pessoa
A, depois o da B.

O segundo PR pode acusar que precisa atualizar antes de mesclar, porque a main andou. Se acontecer, peça:
*"puxa a main atualizada pra dentro da minha branch e resolve o que precisar"*. É o mesmo mecanismo do
bloco anterior, agora numa situação rotineira.

> **O que fixar:** o PR é o momento onde a conversa acontece **antes** de a mudança virar oficial.

---

### Bloco 2.6 — Claude Code lendo código: documentar o algoritmo

**Em dupla.** Pessoa B conduz o Claude Code; pessoa A lê e questiona.

Até aqui vocês usaram o Claude Code pra criar e mexer. Ele também lê e explica, e é isso que responde a
pergunta que ficou em aberto no Dia 1: quanto tempo você levaria pra entender aquele algoritmo com ele do
lado.

#### Exercício 10 — Documentem o algoritmo da ArenaCash

**Entregável:** um `analise-simulador.md` commitado no repositório da dupla.

**Passo 1 — Peçam a explicação e comparem com a de ontem**

> Lê o arquivo `simulador.js` do repositório público `github.com/Product-Arena/arena-cash` e me explica, em
> português e sem jargão, como ele decide qual investimento indicar pra cada pessoa.

Comparem com o que vocês descobriram ontem lendo o arquivo na mão.

**Passo 2 — Peçam o que é difícil achar sozinho**

> Quais regras desse arquivo podem gerar um resultado que surpreende o cliente? Pra cada uma, me dá um
> exemplo concreto de idade, salário e perfil que cai nela, e explica por que o resultado parece
> contraditório.

Ele deve encontrar pelo menos duas: a do **aporte mínimo** e a do **teto de risco por idade**.

**Pessoa A, este passo é seu:** se ele apontar algo que vocês não conseguem confirmar no código, não
aceitem. Peçam *"me mostra a linha exata do arquivo onde isso acontece"*.

**Passo 3 — Peçam o material detalhado e commitem**

> Cria um arquivo `analise-simulador.md` aqui no nosso repositório documentando esse algoritmo, com estas
> seções:
>
> 1. O que o simulador faz, em um parágrafo
> 2. Tabela dos produtos, com rendimento, prazo e risco
> 3. Como a pontuação é calculada, passo a passo
> 4. As regras que têm precedência sobre a pontuação
> 5. Casos-limite, com exemplos de idade, salário e perfil
> 6. Perguntas que eu levaria pro time de produto sobre essas regras
>
> Escreve pra alguém que não sabe programar. Sem jargão.

Leiam antes de aceitar. Quando estiver bom, commitem e façam push.

> **O que fixar:** vocês só conseguem julgar se a resposta está certa **porque já tinham feito na mão**.

---

### Bloco 2.7 — Desafio final: dois construindo ao mesmo tempo

**Em dupla.**

Escolham duas funcionalidades que ainda não existem no protótipo, uma pra cada. Depois trabalhem **ao mesmo
tempo**, cada um na sua branch, sem combinar como cada um vai fazer.

Esperar o outro terminar seria mais fácil, e é exatamente por isso que não vale.

Se precisarem de inspiração: um slide de FAQ, uma seção de números ("10.000 indicações já feitas"), um
botão de compartilhar no WhatsApp, ou navegação por setas entre slides.

#### Exercício 11 — Duas funcionalidades, dois autores, um site no ar

**Entregável:** o site da dupla no ar, com as duas funcionalidades novas, cada uma tendo passado por um
Pull Request revisado pelo outro.

**Passo 1 — Combinem só o "o quê", nunca o "como"**

1. Escolham as duas funcionalidades e escrevam quem faz qual
2. Combinem **onde** cada uma entra no `index.html`. Se as duas mexerem no mesmo lugar, o conflito é
   garantido
3. Cada um cria a sua branch

Este passo é a única coisa que separa "trabalho em paralelo" de "os dois reescrevendo o mesmo pedaço".

**Passo 2 — Construam ao mesmo tempo**

Cada um pede a sua funcionalidade ao Claude Code, na sua branch, sem esperar o outro. Confira no navegador
antes de commitar, e abra um Pull Request.

**Passo 3 — Revisem, mesclem os dois e resolvam o que aparecer**

1. Revisem o PR um do outro, com pelo menos um comentário
2. Mesclem o primeiro
3. Mesclem o segundo. Se reclamar que a main andou, peça: *"puxa a main atualizada pra dentro da minha
   branch e resolve o que precisar"*

**Passo 4 — Confiram no ar e mostrem pro grupo**

> Confirma que o GitHub Pages já está servindo a versão nova e me devolve a URL pública.

Abram numa aba anônima. As duas funcionalidades estão lá, construídas em paralelo, por duas pessoas.

> **O que fixar:** isso é um time de produto trabalhando. Duas pessoas, um repositório, mudanças em
> paralelo, revisão antes de aprovar e uma URL que se atualiza a cada merge. A diferença entre isso e o
> trabalho de vocês na segunda-feira é o assunto, não o mecanismo.

---

### Bloco 2.8 — Fechando os dois dias

#### Os 5 motivos, revisitados

1. **Vibe coding no código da empresa** — o Dia 2 inteiro: cada mudança saiu de um pedido em português
2. **Repositório de apresentações e HTML** — são dois: o seu e o da dupla
3. **Análise de dados e algoritmos** — Exercício 2 do Dia 1 e Exercício 10 de hoje
4. **Controle de versão** — commits, branches, um conflito entre duas pessoas, histórico completo
5. **Repositórios públicos como base de conhecimento** — lição de casa: agora que você sabe ler um
   repositório, as listas curadas e os produtos abertos do Bloco 1.2 estão disponíveis pra você também

#### O que você sai sabendo fazer

- Criar um repositório e commitar **só pelo navegador**, sem instalar nada
- Ler um algoritmo de produto e opinar sobre as regras dele
- Conectar o Claude Code à sua conta e trazer um projeto pra sua máquina
- Criar branches pra testar variações sem arriscar a versão oficial
- Dar acesso a outra pessoa e trabalhar no mesmo repositório que ela
- Resolver um conflito entre duas pessoas, decidindo junto o que fica
- Abrir um Pull Request, revisar um diff e comentar antes de aprovar
- Colocar um protótipo no ar numa URL pública
- Auditar o que o Claude Code fez, pelos comandos que ele rodou

#### Duas perguntas pra fechar

Branch e merge ainda te assustam?

E a segunda, que é a que importa: em que momento de hoje você **discordou** do Claude Code, ou conferiu
algo que ele disse?

Se isso aconteceu pelo menos uma vez, o curso funcionou. O objetivo nunca foi aprender a pedir; foi
conseguir **saber se a resposta está certa**.
