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
próprio repositório e commita o primeiro slide, sem instalar nada. No último bloco o Claude Code entra,
conecta na sua conta e traz o projeto pra sua máquina.

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

**O repositório:** <https://github.com/CaueCM/ArenaCash>
**O site que sai dele, no ar:** <https://cauecm.github.io/ArenaCash/>

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

**Passo 2 — Compare impressões com a turma**

Agora em grupo. Traga o que você anotou: o que pareceu familiar, o que pareceu esquisito.

É esperado que muita coisa não faça sentido ainda, você está vendo isso pela primeira vez, e ninguém
te explicou nada de propósito. As dúvidas que aparecerem aqui são exatamente o que os dois próximos
blocos vão responder.

> **O que fixar:** o repositório que você acabou de espiar é o mesmo tipo de estrutura que **você** vai
> criar do zero daqui a pouco, no Bloco 1.4.

---

### Bloco 1.2 — Por que usar GitHub sendo não-técnico

Ninguém aqui vai virar engenheiro. Então a pergunta é **o que isso destrava pra você, hoje, no seu trabalho**.

São quatro respostas.

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

#### Exercício 2 — Descubra por que o algoritmo decidiu isso

O motivo **3** é o mais abstrato dos quatro. Este exercício existe pra ele virar concreto: você vai usar
um sistema da ArenaCash, estranhar o resultado, e ir atrás da regra que causou aquilo, **sem saber programar**.

**Entregável:** nenhum arquivo. Você sai daqui conseguindo explicar, em português, por que o simulador
indicou o que indicou.

**Passo 1 — Use o simulador e estranhe o resultado**

A ArenaCash tem um simulador que pergunta idade, salário e perfil de investidor, e indica um produto:
<https://cauecm.github.io/ArenaCash/simulador.html>

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

Atalho, se precisar: <https://github.com/CaueCM/ArenaCash/blob/main/simulador.js>

**Não tente entender tudo.** O arquivo tem cinco partes numeradas, com títulos em português. Vá direto na
parte **3, "A decisão"**, e leia só os comentários, os blocos que começam com `//`.

**Passo 3 — Responda as três perguntas**

1. Por que o **caso B** recebeu o produto mais conservador, mesmo com pontuação máxima? *(dica: procure a
   regra que o próprio código diz que "vem primeiro de propósito")*
2. No **caso C**, uma pessoa de 55 anos e perfil arrojado recebe o mesmo produto que alguém de 35 anos e
   perfil moderado. O que no código faz isso acontecer?
3. Você **concorda** com essas duas regras? Se o produto fosse seu, mudaria alguma?

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
3. Escolha **Public**, precisa ser público pra publicar de graça no Dia 2
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
> Pra ver o slide funcionando você precisa de uma cópia local (Bloco 1.5) ou de publicar na internet
> (Dia 2). Por enquanto, quem te mostrou o resultado foi o Claude.

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
> O que falta é o outro lado do mapa: a cópia na sua máquina. É ela que destrava trabalhar offline, ver o
> resultado renderizado e, principalmente, deixar o **Claude Code** agir no projeto.

---

### Bloco 1.5 — Conectando o Claude Code

Até agora, quem clicava era você, no navegador. A partir daqui quem executa também pode ser o **Claude
Code**, e é ele que vai trazer o projeto pra sua máquina.

Claude Code é o Claude rodando no terminal. Ele entende pedidos em português e executa ações reais nos
seus arquivos e no Git, sem você digitar comando nenhum. Mas só consegue agir na sua conta do GitHub
depois de uma autorização, feita **uma vez só**.

Seu facilitador vai fazer a conexão na tela primeiro. Ele roda `claude`, pede *"conecta essa sessão à
minha conta do GitHub"*, o Claude Code dispara um `gh auth login`, o navegador abre e ele autoriza. É como
logar no Notion ou no Spotify num computador novo.

#### Exercício 4 — Conecte o Claude Code e traga o projeto pra sua máquina

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

> O slide abre no navegador, renderizado, e continua funcionando se você
> desligar o wi-fi. É um arquivo no seu computador, não um site. O mesmo arquivo que também está no
> GitHub.

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

**Hoje você tem as duas primeiras.** A terceira nasce amanhã, no Dia 2. Entre local e remoto o trânsito é nos dois sentidos; do remoto pro ar é só de ida — **ninguém edita o site
publicado, edita-se o repositório**.

Pra fechar, compare os três na ArenaCash, que já tem os três prontos:

| Instância | Endereço | Some se cair a internet? |
|---|---|---|
| Local | a pasta clonada na sua máquina | Não, continua funcionando |
| Remoto | <https://github.com/CaueCM/ArenaCash> | Sim |
| No ar | <https://cauecm.github.io/ArenaCash/> | Sim |

> **O que fixar:** essa autorização é feita **uma vez só**. E agora você tem as duas pontas do mapa do
> Bloco 1.3 — a pasta local e o repositório remoto. É com essas duas que o Dia 2 inteiro acontece.

---

### Bloco 1.6 — Fechando o Dia 1

#### O que você fez hoje

- Explorou um repositório de verdade antes mesmo de saber o nome das coisas
- Leu um algoritmo de produto e opinou sobre as regras dele, sem saber programar
- Montou o modelo mental do Git e tem um dicionário pra consultar
- Criou um repositório do zero e commitou duas vezes, **usando só o navegador**
- Conectou o Claude Code à sua conta e trouxe o projeto pra sua máquina

#### Uma pergunta pra levar

Volte nos quatro motivos do Bloco 1.2. **Já dá pra imaginar usando isso pra alguma dessas quatro coisas no
seu trabalho, essa semana?**

Não precisa responder agora. Mas é a pergunta que faz o Dia 2 valer a pena.

#### O que vem amanhã

Hoje você só usou a branch `main`, uma linha do tempo só, reta. E fez tudo clicando.

Amanhã o Claude Code assume a execução: você vai criar variações paralelas do protótipo, ver elas se
cruzando (inclusive um conflito de verdade, que **você** decide como resolver), revisar mudanças antes de
aprovar e publicar a versão final numa URL pública.

---

## Dia 2 — Branches, conflitos e Pull Requests

**2h.** Ontem você usou uma linha do tempo só, e fez tudo clicando. Hoje quem executa é o **Claude Code**: você
abre linhas paralelas, vê elas se cruzarem, inclusive dando conflito, que **você** decide como resolver, revisa antes de aprovar e termina com uma URL pública no ar.

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

#### Exercício 5 — Criando uma branch e vendo a pasta local mudar

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

**Passo 4 — O momento "aha"**

**Antes de pedir**, deixe o `index.html` aberto no navegador, numa aba visível. Depois:

> Volta pra branch main.

Agora recarregue aquela aba. **A cor voltou pro azul e branco.**

Você não editou nada, e o Claude Code não reescreveu o arquivo. O arquivo na sua pasta mudou de conteúdo
*sozinho*, só porque a branch ativa mudou. Peça *"volta pra variacao-cores"* e recarregue de novo, vai e
volta quantas vezes quiser.

> **O que fixar:** a branch não é uma pasta separada: é a **mesma pasta mudando de estado** conforme a
> linha do tempo ativa.

---

### Bônus —  O que o Claude Code roda por trás

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

### Bloco 2.3 — Branches se cruzando: merge e conflito

Se algo tiver que sair do roteiro por falta de tempo, **não é este**.

#### Merge é o cruzamento

Uma branch só tem valor se, em algum momento, ela volta pra se juntar com a principal. Isso se chama
**merge**.

**Quando dá certo:** as mudanças estão em partes diferentes do arquivo. O Git junta sozinho.

**Quando dá conflito:** duas branches mudaram **a mesma linha** de formas diferentes. O Git não tem como
adivinhar, então para e pergunta.

> Conflito é o Git sendo honesto: "duas
> pessoas mudaram a mesma coisa, escolhe você". E note: **quem escolhe é você, não o Claude Code.**

#### Exercício 6 — Merge tranquilo e depois um conflito de verdade

**O cenário:** enquanto o marketing testava as cores, o time de copy também testava um texto novo pro
mesmo botão.

**Entregável:** a branch `variacao-cores` mesclada em `main` sem problema, e uma segunda branch
`variacao-copy` que gera um conflito real, resolvido por decisão sua.

**Passo 1 — Merge tranquilo**

> Vai pra main e mescla a branch `variacao-cores` nela. Depois faz push e me diz se teve algum conflito.

Ele deve responder que correu tudo bem. Recarregue o `index.html`: a `main` está verde e roxa. Esse foi o
caminho feliz.

**Passo 2 — Crie a branch que vai gerar o conflito**

> Cria a branch `variacao-copy` a partir da main. Nela, troca o texto do botão de "Saiba mais" para "Quero
> indicar agora" e deixa o subtítulo mais urgente, falando do prazo da promoção. Commita com a mensagem
> "testando copy mais urgente no botão" e faz push.

**Passo 3 — Volte na main e mude a MESMA linha de outro jeito**

> Agora volta pra main e, direto nela, troca o texto do **mesmo botão** pra "Ganhar R$ 50 agora" e ajusta o
> subtítulo pra reforçar o valor do bônus. Commita com a mensagem "ajuste de copy focado no valor do bônus"
> e faz push.

Agora `main` e `variacao-copy` mudaram a mesma linha de formas diferentes. É de propósito.

**Passo 4 — Provoque o merge e decida você**

> Tenta mesclar a `variacao-copy` na main. Se der conflito, **não resolve sozinho**: me mostra exatamente o
> trecho em conflito, com os marcadores, e me explica o que cada lado quer.

Ele vai mostrar algo assim:

```html
<<<<<<< HEAD
<button>Ganhar R$ 50 agora</button>
=======
<button>Quero indicar agora</button>
>>>>>>> variacao-copy
```

Entre `<<<<<<< HEAD` e `=======` está a versão da `main`; entre `=======` e `>>>>>>> variacao-copy` está a
da outra branch.

**A decisão é sua.** Escolha uma das duas, ou invente uma terceira. Se quiser ajuda pra pensar, não pra
decidir:

> Sem aplicar nada ainda: qual das duas versões funciona melhor pro botão de uma campanha de indicação, e
> por quê? Me sugere também uma terceira opção que junte as duas.

Com a decisão tomada:

> Resolve o conflito deixando o texto do botão como *[o texto que você escolheu]*, apaga os marcadores,
> finaliza o merge e faz push.

> **O que fixar:** resolver conflito não tem mistério: é olhar as duas versões, decidir qual fica e
> seguir. **O Git só precisa que uma pessoa decida.** E repare no desenho: o Claude Code *executou*, você
> segurou a *decisão*.

---

### Bloco 2.4 — Pull Request: comentar antes de ir pro ar

No exercício anterior você mesclou direto, sem revisão. Isso funciona quando você trabalha sozinho. Quando
tem mais gente, ou quando você quer uma segunda opinião, existe o **Pull Request**.

Um PR é um pedido formal de "quero juntar minha branch na main, alguém pode olhar antes?". Ele vive no
github.com e permite ver o **diff**, deixar **comentários** em linhas específicas e **aprovar** ou pedir
mudanças.

#### Exercício 7 — Abrindo e revisando um Pull Request

**Entregável:** um PR aberto, com pelo menos 1 comentário e uma aprovação, mesclado em `main`.

**Passo 1 — Crie a branch, o slide novo e o PR**

> Cria a branch `slide-beneficios` a partir da main. Nela, adiciona ao `index.html` mais um slide listando
> 3 benefícios da campanha de indicação: R$ 50 pro indicado, R$ 50 pra quem indicou, sem limite de
> indicações. A apresentação deve funcionar como slides navegáveis, com um botão "próximo". Mantém o visual
> consistente com os outros slides.

Confira no navegador. Quando estiver bom:

> Commita com "adiciona slide de beneficios", faz push e abre um Pull Request pra main com um título claro
> e uma descrição curta. Me devolve o link do PR.

**Passo 2 — Revisem em dupla, no navegador**

Formem duplas e troquem os links. **Esta parte é no github.com mesmo**, revisão é conversa entre pessoas,
não tarefa pra automatizar.

1. Abra o PR do colega e clique na aba **Files changed**
2. Veja o diff, com o que foi adicionado em verde
3. Passe o mouse numa linha e clique no **+**. Deixe um comentário
4. **Revisor:** Review changes → Approve

**Passo 3 — Responda e mescle**

Leia o comentário que você recebeu. Se fizer sentido, ajuste:

> Na branch `slide-beneficios`, [descreva o ajuste pedido]. Commita e faz push, o PR deve atualizar
> sozinho.

Volte no PR: o commit novo aparece lá. Depois clique em **Merge pull request → Confirm merge**.

> **O que fixar:** o PR é o momento onde a conversa acontece **antes** de a mudança virar
> oficial.

---

### Bloco 2.5 — Deploy: a terceira instância

Ontem, no Bloco 1.5, você viu o mapa das três instâncias e ficou com duas. **A terceira nasce agora.**

**GitHub Pages** é a forma mais simples: gratuito, sem cartão de crédito, publica direto a partir do
próprio repositório.

O fluxo completo:

```
Pedir ao Claude Code → Commit → Branch + Pull Request → Merge em main
     → GitHub Pages publica → URL pública atualizada
```

A parte boa: você configura **uma vez**. A partir daí, toda vez que algo for mesclado em `main`, o site
publicado se atualiza sozinho.

#### Exercício 8 — Publicando o protótipo

**Entregável:** URL pública ativa, no formato `https://<seu-usuario>.github.io/meu-prototipo-arenacash/`.

**Passo 1 — Ative o GitHub Pages**

Esta parte é no navegador: é configuração de conta, não mudança no código.

1. Acesse `github.com/<seu-usuario>/meu-prototipo-arenacash`
2. **Settings** → no menu lateral, **Pages**
3. Em **Source**, selecione a branch **main** e a pasta **/ (root)**
4. **Save**
5. Espere cerca de 1 minuto e atualize, a URL pública aparece no topo

**Passo 2 — Valide as três instâncias, agora completas**

1. Abra a URL numa **aba anônima/privada**
2. Confirme que a apresentação abre e os slides navegam
3. Copie o link, mande pra alguém do grupo e peça pra abrir no celular

> **Agora você tem as três.** A pasta na sua máquina, o repositório no github.com e o site no ar —
> exatamente o desenho do Bloco 1.5, agora com o seu nome nos três endereços.

---

### Bloco 2.6 — Claude Code lendo código: documentar o algoritmo

Até aqui você usou o Claude Code pra **criar** e **mexer**. Ele também **lê e explica**, e é isso que
fecha o gancho que ficou aberto no Dia 1.

#### Exercício 9 — Documente o algoritmo da ArenaCash pelo Claude Code

Lembra do **Exercício 2 do Dia 1**? Você garimpou o `simulador.js` na mão. Agora refaz aquilo em três
pedidos, e sai com um documento pronto pra mandar pra alguém.

**Entregável:** um `analise-simulador.md` commitado no **seu** repositório.

**Passo 1 — Peça a explicação e compare com a de ontem**

> Lê o arquivo `simulador.js` do repositório público `github.com/CaueCM/ArenaCash` e me explica, em
> português e sem jargão, como ele decide qual investimento indicar pra cada pessoa.

Compare com o que **você** descobriu ontem. Bateu? Ele achou algo que passou despercebido? Ou disse algo
que você sabe que está errado?

**Passo 2 — Peça o que é difícil achar sozinho**

> Quais regras desse arquivo podem gerar um resultado que surpreende o cliente? Pra cada uma, me dá um
> exemplo concreto de idade, salário e perfil que cai nela, e explica por que o resultado parece
> contraditório.

Ele deve encontrar pelo menos duas: a do **aporte mínimo**, que passa por cima do perfil e da idade, e a do
**teto de risco por idade**.

Se ele apontar algo que você não consegue confirmar no código, **não aceite**. Peça: *"me mostra a linha
exata do arquivo onde isso acontece"*.

**Passo 3 — Peça o material detalhado e commite**

> Cria um arquivo `analise-simulador.md` aqui no meu repositório documentando esse algoritmo, com estas
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

Leia antes de aceitar. É *seu* documento. Quando estiver bom:

> Commita o `analise-simulador.md` com a mensagem "documenta o algoritmo do simulador da ArenaCash" e faz
> push na main.

> **O que fixar:** ontem você levou 12 minutos garimpando pra entender duas regras. Hoje levou três pedidos
>, e saiu com um **documento**. Mas você só consegue julgar se a resposta está certa **porque já tinha
> feito na mão**.

---

### Bloco 2.7 — Desafio final: crie algo seu

Chegou a vez de você escolher. Nada de repetir o que já foi feito, pense em algo que **ainda não existe**
no seu protótipo.

Se precisar de inspiração: um slide de FAQ, uma seção de números ("10.000 indicações já feitas"), um botão
de compartilhar no WhatsApp, ou uma animação entre os slides.

#### Exercício 10 — Uma ideia sua, publicada de ponta a ponta

**Entregável:** uma funcionalidade nova, escolhida por você, criada, commitada, revisada via PR e no ar.

1. Peça pra criar uma branch com um nome que descreva sua ideia
2. Descreva a funcionalidade que você quer adicionar ao `index.html`
3. Abra o arquivo local no navegador e confira **antes** de continuar
4. Peça commit, push e abertura de um Pull Request
5. Revise o diff no github.com e peça pro Claude Code mesclar
6. Peça: *"confirma que o GitHub Pages já está servindo a versão nova e me devolve a URL pública"*

Quem terminar primeiro compartilha o link e conta pro grupo o que escolheu criar.

> **O que fixar:** o valor de entender o mecanismo não é nunca mais usar o Claude Code sozinho: é
> **confiar no resultado**, porque você sabe o que está acontecendo por trás de cada pedido.

---

### Bloco 2.8 — Fechando os dois dias

#### Os 4 motivos, revisitados

1. **Vibe coding no código da empresa**, o Dia 2 inteiro: cada mudança saiu de um pedido em português
2. **Repositório de apresentações e HTML**: é o próprio pitch deck que você construiu e publicou
3. **Análise de dados e algoritmos** — Exercício 2 do Dia 1 e Exercício 9 de hoje
4. **Controle de versão**, commits, branches, um conflito resolvido, histórico completo

#### O que você sai sabendo fazer

- Criar um repositório e commitar **só pelo navegador**, sem instalar nada
- Ler um algoritmo de produto e opinar sobre as regras dele
- Conectar o Claude Code à sua conta e trazer um projeto pra sua máquina
- Criar branches pra testar variações sem arriscar a versão oficial
- Resolver um conflito de merge decidindo você, com o Claude Code executando
- Abrir um Pull Request, revisar um diff e comentar antes de aprovar
- Colocar um protótipo no ar numa URL pública
- Auditar o que o Claude Code fez, pelos comandos que ele rodou

#### Duas perguntas pra fechar

Branch e merge ainda te assustam?

E a segunda, que é a que importa: em que momento de hoje você **discordou** do Claude Code, ou conferiu
algo que ele disse?

Se isso aconteceu pelo menos uma vez, o curso funcionou. O objetivo nunca foi aprender a pedir; foi
conseguir **saber se a resposta está certa**.
