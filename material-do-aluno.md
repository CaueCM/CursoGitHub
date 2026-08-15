# Material do aluno — GitHub para Prototipação

> **O que é este documento.** A `ementa.md` é o plano de aula: escrita pro facilitador, com tempos de fala,
> ordem de corte se o tempo apertar e instruções do tipo "mostre em slide". Este documento é a outra ponta:
> o mesmo conteúdo escrito **pro aluno**, em segunda pessoa, sem bastidor de condução.
>
> É daqui que sai o texto de `site/dia-1.html` e `site/dia-2.html`. Quando o conteúdo mudar, muda aqui primeiro.

**As regras de voz deste material:**

1. Fala com o aluno, sempre: "você faz", nunca "o aluno faz" ou "mostre pra turma".
2. Bloco expositivo **ensina** — é texto pra ler e entender, não um roteiro do que o facilitador diz.
3. Nada de bastidor: sem "parte expositiva (7 min)", sem "abra a roda", sem "se faltar tempo corte X".
4. O facilitador só aparece quando o aluno precisa esperar por ele ("seu facilitador vai compartilhar o link").
5. Tempo aparece só onde ajuda o aluno a se organizar: duração do bloco e de cada passo do exercício.
6. Toda seção "o que fixar" fala do que **você** acabou de fazer, não do que a turma deveria ter aprendido.

---

## Dia 1 — Do zero ao primeiro commit

Hoje você sai com um repositório seu, publicado, com o primeiro slide de um protótipo dentro dele.
O caminho até lá passa por entender o que é o GitHub, por que ele importa pra quem não é técnico, e
qual é o mecanismo por trás de tudo — antes de qualquer clique.

---

### Bloco 1.1 — O que é o GitHub

**~15 min**

#### O que é

GitHub é um lugar na internet que guarda projetos inteiros — com todo o histórico de mudanças, sempre.

Pensa num Google Drive em que cada versão salva fica pra sempre, e dá pra ver exatamente o que cada
pessoa mudou, quando e por quê. É isso.

Um projeto guardado desse jeito tem um nome: **repositório**. É a palavra que você mais vai ouvir nos
próximos dois dias, então vale se acostumar com ela desde já — repositório é a pasta do projeto, só que
com memória.

#### As quatro abas que todo repositório tem

Quando você abre um repositório no github.com, sempre encontra as mesmas abas no topo:

| Aba | O que tem lá dentro |
|---|---|
| **Code** | Os arquivos do projeto, como numa pasta comum |
| **Commits** | O histórico: o que mudou, quando e por quem |
| **Branches** | As linhas do tempo paralelas que existem hoje no projeto |
| **Pull requests** | Os pedidos de "posso juntar minha mudança na versão principal?" |

Você não precisa entender cada uma delas agora. Precisa só saber que existem — a gente volta em todas
as quatro ao longo dos dois dias, uma de cada vez.

#### Exercício 1 — Explore o repositório da ArenaCash, sem roteiro (8 min)

Este é o repositório da ArenaCash — a fintech fictícia que serve de cenário pros exercícios. É um
repositório com história de verdade: vários commits, duas branches abertas e Pull Requests.

**O repositório:** <https://github.com/CaueCM/ArenaCash>
**O site que sai dele, no ar:** <https://cauecm.github.io/ArenaCash/>

Abra os dois em abas separadas. Um é o código; o outro é o mesmo código publicado, funcionando na
internet. No fim do Dia 1 você vai ter esse mesmo par — repositório e página no ar — com o seu nome.

**Não tem entregável neste exercício.** O objetivo é você criar familiaridade antes da gente nomear as
peças. Não tem resposta certa e não tem como errar.

**Passo 1 — Navegue sozinho (5 min)**

Passe cinco minutos só explorando o repositório, sem explicação nenhuma. Clique em tudo que parecer
clicável. Entre nas abas, abra um arquivo, clique num commit.

Enquanto navega, vá anotando — mentalmente ou num papel — duas coisas:

- o que você **reconheceu** (algo que lembra o Drive, o Notion, qualquer outra ferramenta)
- o que ficou **estranho** (palavra que você nunca viu, tela que não fez sentido)

**Passo 2 — Compare impressões com a turma (3 min)**

Agora em grupo. Traga o que você anotou: o que pareceu familiar, o que pareceu esquisito.

É esperado que muita coisa não faça sentido ainda — você está vendo isso pela primeira vez, e ninguém
te explicou nada de propósito. As dúvidas que aparecerem aqui são exatamente o que os dois próximos
blocos vão responder.

> **O que fixar:** o repositório que você acabou de espiar é o mesmo tipo de estrutura que **você** vai
> criar do zero daqui a pouco, no Bloco 1.5.

---

### Bloco 1.2 — Por que usar GitHub sendo não-técnico

**~15 min**

Ninguém aqui vai virar engenheiro. Então a pergunta não é "como eu uso o GitHub do jeito que um dev
usaria" — é **"o que isso destrava pra mim, hoje, no meu trabalho"**.

São quatro respostas.

#### 1. Vibe coding direto no código da empresa

Hoje, quando você quer um ajuste numa tela, o caminho é descrever pro time técnico e entrar na fila.

Com o código num repositório que você consegue acessar, dá pra pedir o ajuste direto ao Claude e ver o
resultado em minutos — não em sprints. Não pra substituir o time de engenharia, mas pra você conseguir
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

Errou, testou algo que não funcionou, quer voltar pro que tinha ontem? É questão de segundos — não de
reconstruir do zero.

---

### Bloco 1.3 — Como funciona o Git

**~30 min**

#### Git e GitHub são coisas diferentes

Essa é a primeira confusão que vale desfazer:

- **Git** é o sistema que guarda o histórico. Ele mora **no seu computador**.
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

O projeto existe **nos dois lugares ao mesmo tempo**. E — isso é o que pega todo mundo no começo — os
dois **não se atualizam sozinhos**. Você editou um arquivo no seu computador? O GitHub não sabe de nada
até você mandar (`push`). Alguém mudou algo no GitHub? Sua pasta não muda até você buscar (`pull`).

#### Os 5 conceitos centrais

São só cinco. Não precisa de mais nada pra fazer tudo que a gente vai fazer nos dois dias.

**1. Repositório (repo)** — a pasta do seu projeto, só que com memória.
*Pensa numa pasta do Drive que lembra de toda versão que já existiu dela.*

**2. Commit** — uma foto do projeto num momento, com um bilhete explicando o que mudou.
*Imutável: uma vez tirada, fica pra sempre no histórico.*

**3. Local vs. remoto** — a mesma pasta existe no seu computador (local) e no GitHub.com (remoto).
Elas só ficam iguais quando você manda (`push`) ou busca (`pull`).

**4. Branch** — uma linha do tempo paralela.
*Você não testa a ideia nova direto na versão que está no ar. Cria uma cópia paralela, testa lá, e só
depois decide se ela "entra" na principal.*

**5. Pull Request (PR)** — o pedido de "posso juntar minha branch na principal?", com espaço pra alguém
revisar e comentar antes de aceitar.

#### Uma branch, desenhada

Esse é o conceito mais difícil de imaginar só com palavras. Então olha ele como linha do tempo — cada
bolinha é um commit, cada faixa é uma linha do tempo diferente.

> **Na página este trecho é um diagrama** (SVG inline em `site/dia-1.html`), com três faixas: `main` em
> vermelho, `slide-novo` em amarelo e `cor-do-botao` em verde-limão. As duas branches saem da main; a
> amarela recebe dois commits e volta pra main num merge, a verde recebe dois commits e continua aberta.

As duas branches saíram da **main** e seguiram sozinhas. A amarela terminou e **voltou** — daí em diante
o trabalho dela faz parte da main. A verde ainda está aberta: o trabalho existe, mas não chegou na versão
oficial. **Nada do que acontece numa branch afeta as outras até alguém juntar.**

Você vai fazer exatamente esse desenho acontecer amanhã, no Dia 2 — criando as branches, mesclando uma e
resolvendo um conflito de verdade no meio do caminho.

#### As 4 fases de uma mudança

Esta sequência vai aparecer o dia todo. Você não precisa decorar — vai ver as quatro acontecendo na tela
daqui a pouco, e aí vira intuição.

1. **Você edita um arquivo na pasta local** — a mudança está "solta"
2. **Você seleciona o que quer guardar** — isso se chama *staging*
3. **Você commita** — a foto é tirada (ainda só no seu computador)
4. **Você faz push** — a foto sobe pro GitHub

Repare onde está a fronteira: as fases 1, 2 e 3 acontecem **só na sua máquina**. Só a fase 4 toca a nuvem.
É por isso que dá pra trabalhar sem internet e mandar tudo depois.

#### Dicionário de termos

Deixa essa lista à mão. Sempre que travar num termo nos próximos dois dias, é aqui que você volta.

| Termo | O que significa |
|---|---|
| **Repositório (repo)** | A pasta do projeto, com todo o histórico de mudanças guardado |
| **Commit** | Uma "foto" salva do projeto, com uma mensagem explicando o que mudou |
| **Branch** | Uma linha do tempo paralela pra testar algo sem mexer na versão principal |
| **Main** | O nome padrão da branch principal — a versão "oficial" do projeto |
| **Clone** | Baixar uma cópia completa de um repositório (com histórico) pro seu computador |
| **Push** | Mandar seus commits do computador (local) pro GitHub (remoto) |
| **Pull** | Buscar as mudanças mais recentes do GitHub pro seu computador |
| **Merge** | Juntar as mudanças de uma branch em outra (geralmente em `main`) |
| **Conflito (merge conflict)** | Quando duas branches mudaram a mesma linha de formas diferentes, e alguém precisa decidir qual fica |
| **Pull Request (PR)** | Um pedido formal de "posso juntar minha branch em main?", com espaço pra revisão e comentários antes de aceitar |
| **Fork** | Uma cópia própria de um repositório de outra pessoa, na sua conta |
| **Deploy** | Publicar o projeto numa URL que qualquer pessoa acessa pela internet |
| **GitHub Pages** | O serviço gratuito do GitHub pra publicar sites estáticos direto de um repositório |
| **GitHub Desktop** | O aplicativo visual (sem terminal) que a gente usa pra fazer tudo isso no curso |

---

### Bloco 1.4 — Setup e uso da ferramenta

**~30 min**

A partir daqui você para de olhar o GitHub pelo navegador e passa a usar o **GitHub Desktop** — o app
visual, sem terminal, que vai ser sua ferramenta principal nos dois dias.

A primeira operação que você vai fazer nele é **clonar**: baixar uma cópia completa de um repositório,
com histórico e tudo, pro seu computador. É assim que um projeto que estava só na nuvem passa a existir
também como uma pasta de verdade na sua máquina.

#### Antes: a demo

Seu facilitador vai clonar o repositório da ArenaCash (<https://github.com/CaueCM/ArenaCash>) na tela,
uma vez, antes de você fazer.

Enquanto assiste, o que interessa observar é **uma coisa só**: o mesmo projeto aparecendo em dois lugares.
A pasta abrindo no Finder/Explorador com os arquivos dentro, o `index.html` abrindo no navegador **sem
internet**, e a mesma coisa no github.com. Esse "existe nos dois lugares" é o coração de tudo que vem
depois.

#### Exercício 2 — Clone o exemplo e compare local vs. remoto (20 min)

**Entregável:** GitHub Desktop logado, o repositório de exemplo clonado na sua máquina, e a apresentação
aberta no seu navegador — rodando do seu computador, não da internet.

**Passo 1 — Confirme seu setup (5 min)**

1. Abra o **GitHub Desktop** e confirme que você está logado: seu nome de usuário aparece no canto da tela
2. Se ainda não instalou, resolva isso agora — sem o GitHub Desktop funcionando não dá pra seguir o resto
   do curso

**Passo 2 — Clone o repositório (10 min)**

1. No GitHub Desktop, vá em **File → Clone Repository → URL**
2. Cole o endereço do repositório da ArenaCash:

   ```
   https://github.com/CaueCM/ArenaCash
   ```

3. Escolha uma pasta fácil de achar depois (`Documentos/GitHub`, por exemplo) e confirme
4. Clique em **Show in Finder** (Mac) ou **Show in Explorer** (Windows) — a pasta local abre
5. Dê duplo clique em `index.html` — ele abre no navegador e mostra o site da ArenaCash

**Passo 3 — Compare os três endereços (5 min)**

O mesmo projeto existe agora em três lugares. Abra os três e compare:

| Onde | Endereço | O que é |
|---|---|---|
| Sua máquina | a pasta que você acabou de clonar | funciona sem internet |
| O código na nuvem | <https://github.com/CaueCM/ArenaCash> | qualquer pessoa lê e vê o histórico |
| O site publicado | <https://cauecm.github.io/ArenaCash/> | qualquer pessoa acessa, sem ver código |

O conteúdo é o mesmo nos três. O que muda é quem alcança e como.

Um detalhe pra reparar: desligue o wi-fi e recarregue o arquivo local. Ele continua funcionando — mas os
outros dois endereços caem. Isso é a diferença entre um arquivo no seu computador e um site na internet.

> **O que fixar:** clonar é "baixar uma cópia completa, com histórico". Daqui pra frente, toda pasta com
> Git que você olhar tem uma **versão gêmea no GitHub** — e as duas só se atualizam quando você manda.

---

### Bloco 1.5 — Seu repositório e seu primeiro commit

**~40 min**

Até agora você só explorou coisa que já existia. Agora você cria a sua.

Neste bloco você monta um repositório do zero, usa o Claude pra gerar o conteúdo, e faz as quatro fases
inteiras — editar, selecionar, commitar, publicar. No fim, existe uma URL no GitHub com o seu trabalho.

**É o exercício mais importante do dia.** Se alguma coisa travar, peça ajuda: ninguém deve sair do Dia 1
sem ter terminado este.

#### Exercício 3 — Do repositório vazio ao primeiro slide publicado (35 min)

**O cenário:** você foi chamado pra prototipar uma nova campanha da ArenaCash — *"Indique um amigo e
ganhe R$ 50"*. Sua missão hoje é criar o repositório do protótipo e ter o slide de capa funcionando
e versionado.

**Entregável:** um repositório novo e público no GitHub, com um `index.html` de capa gerado pelo Claude,
commitado e enviado — visível tanto na sua pasta local quanto em github.com.

**Passo 1 — Crie o repositório do zero (5 min)**

1. Abra o GitHub Desktop
2. Vá em **File → New Repository**
3. Nome: `meu-prototipo-arenacash`
4. Local path: escolha uma pasta fácil de achar
5. Marque **Initialize this repository with a README**
6. Clique em **Create Repository**

Repare no que acabou de acontecer: o repositório existe **só no seu computador**. Ele ainda não subiu
pra nuvem, e isso é de propósito — você vai ver essa diferença virar concreta no Passo 3.

**Passo 2 — Peça o primeiro slide ao Claude (10 min)**

Abra o [claude.ai](https://claude.ai) em outra aba e mande este prompt:

> Cria um arquivo HTML de uma apresentação de slides simples, com CSS embutido no mesmo arquivo (sem
> arquivos separados). O primeiro slide deve ser uma capa para a campanha "Indique um amigo e ganhe R$ 50"
> da ArenaCash — fintech com visual moderno, cores azul e branco. Inclua título grande, um subtítulo e um
> botão "Saiba mais". Não precisa de JavaScript ainda, só um slide por enquanto. Me devolve o código
> completo do arquivo.

Copie o código que o Claude devolveu. Depois, no Finder/Explorador, vá até a pasta
`meu-prototipo-arenacash` que você criou no Passo 1 e:

- crie um arquivo chamado `index.html`
- cole o código do Claude e salve
- dê duplo clique no arquivo — ele abre no navegador e mostra o slide

Esta foi a **fase 1** das quatro: você editou um arquivo na pasta local. O GitHub ainda não sabe de nada.

**Passo 3 — Commite e publique (15 min)**

1. Volte ao **GitHub Desktop**. Ele já detectou o arquivo novo sozinho e mostra na aba **Changes**, com o
   conteúdo em verde — verde quer dizer "isso é novo"
2. No campo de mensagem de commit (canto inferior esquerdo), escreva:
   `primeiro slide da capa da campanha indique um amigo`
3. Clique em **Commit to main** — é a foto sendo tirada. Ainda só no seu computador
4. Clique em **Publish repository**, no canto superior. Escolha **público**, pra você conseguir acessar
   depois pelo link
5. Confirme. O botão vira **Fetch origin** — esse é o sinal de que seu repositório está sincronizado com
   a nuvem
6. Abra `github.com/<seu-usuario>/meu-prototipo-arenacash` no navegador. O `index.html` está lá, e a aba
   **Commits** mostra sua mensagem

**O que você tem agora:** o repositório `meu-prototipo-arenacash`, público, com `index.html` e `README.md`.

> **O que fixar:** você acabou de fazer **as quatro fases inteiras** — editou (pediu ao Claude e salvou),
> selecionou (a aba Changes fez isso por você), commitou (a foto) e publicou (o push, que na primeira vez
> fica escondido dentro do botão "Publish repository").
>
> Da próxima vez vai ser mais curto: toda mudança nova usa **Commit** + **Push origin**. Publicar é só uma
> vez, no começo da vida do repositório.

---

### Bloco 1.6 — Fechando o Dia 1

**~10 min**

#### O que você fez hoje

- Explorou um repositório de verdade antes mesmo de saber o nome das coisas
- Entendeu por que o GitHub importa pra quem não é técnico
- Montou o modelo mental do Git — repo, commit, local/remoto, branch, PR — e tem um dicionário pra consultar
- Configurou o GitHub Desktop, clonou um repositório e viu local e nuvem lado a lado
- Criou um repositório do zero, gerou conteúdo com o Claude, commitou e publicou

#### Uma pergunta pra levar

Volte nos quatro motivos do Bloco 1.2 — vibe coding, repositório de apresentações, análise de dados,
controle de versão.

**Já dá pra imaginar usando isso pra alguma dessas quatro coisas no seu trabalho, essa semana?**
Não precisa responder agora. Mas é a pergunta que faz o Dia 2 valer a pena.

#### O que vem amanhã

Hoje você só usou a branch `main` — uma linha do tempo só, reta.

Amanhã você vai criar variações paralelas do protótipo, ver elas se cruzando (inclusive um conflito de
verdade, que você vai resolver na mão), revisar mudanças antes de aprovar, e publicar a versão final numa
URL pública que qualquer pessoa acessa.

---

## Dia 2 — Branches, Claude Code, revisão e deploy

Ontem você usou uma linha do tempo só: a `main`. Hoje você abre linhas paralelas, vê elas se cruzarem
— inclusive dando conflito — revisa mudanças antes de aprovar e termina com uma URL pública no ar.

E tem uma virada no meio do dia. A partir do Bloco 2.3, o **Claude Code** entra conectado à sua conta do
GitHub. Daí em diante, cada conceito que você aprendeu na mão ganha um segundo exemplo feito por ele —
sempre com uma tarefa **nova**, nunca repetindo o que você já fez clicando.

---

### Bloco 2.1 — Recap do Dia 1

**~5 min**

Abra o GitHub Desktop no repositório `meu-prototipo-arenacash` e vá na aba **History**.

Olhe o que está lá: quantos commits você tem? O que cada mensagem diz? Esse é o histórico que você
construiu ontem — e é nele que tudo de hoje vai se apoiar.

Antes de seguir, releia as duas listas do Dia 1: as **4 fases** (editar → selecionar → commitar → push)
e os **5 conceitos** (repo, commit, local/remoto, branch, PR). Hoje as duas voltam o tempo todo.

---

### Bloco 2.2 — Branches: criar e fazer switch

**~22 min**

#### Por que não trabalhar direto na main

Tudo que você fez ontem foi direto na `main` — a linha principal. Isso é arriscado: se você testa uma
ideia ruim ali, ela já está "oficial".

Branch resolve isso. É como duplicar um documento do Google Docs pra rascunhar uma versão nova sem tocar
no original — só que, no Git, você pode ter dezenas de rascunhos ao mesmo tempo, cada um isolado, e
decidir depois quais voltam pro documento principal.

#### O que é fazer *switch*

É trocar qual rascunho está aberto na sua pasta local.

E aqui vem a parte que costuma surpreender: **quando você troca de branch, os arquivos na sua pasta mudam
de conteúdo na hora** — como se alguém trocasse os papéis da sua mesa enquanto você não olhava. Você vai
ver isso acontecer daqui a pouco.

#### Exercício 4 — Criando uma branch e vendo a pasta local mudar (15 min)

**O cenário:** o time de marketing quer testar uma paleta de cores diferente pro slide de capa, sem
arriscar a versão que já está no ar.

**Entregável:** uma branch `variacao-cores` com uma versão diferente do slide de capa, commitada — e a
experiência de ver a pasta local mudar de conteúdo ao trocar de branch.

**Passo 1 — Crie a branch (3 min)**

1. No GitHub Desktop, com o `meu-prototipo-arenacash` aberto, clique no seletor **Current Branch** (no
   topo, mostra "main")
2. Clique em **New Branch**
3. Nome: `variacao-cores`
4. Confirme — o GitHub Desktop já troca pra branch nova sozinho

**Passo 2 — Edite com o Claude, na branch nova (6 min)**

Volte ao claude.ai e mande:

> Aqui está meu código HTML atual [cole o conteúdo do seu index.html]. Muda a paleta de cores do slide de
> capa pra tons de verde e roxo, mantendo a estrutura e os textos iguais. Me devolve o código completo
> atualizado.

Copie o código, abra o `index.html` na pasta local — **a mesma pasta de sempre, ela não muda de lugar** —
e substitua o conteúdo. Salve e dê duplo clique pra ver a nova versão no navegador.

**Passo 3 — Commite na branch (3 min)**

1. No GitHub Desktop, veja a mudança na aba **Changes**. Confirme no topo que a branch atual é
   `variacao-cores` — commitar na branch errada é o erro mais comum aqui
2. Mensagem: `testando paleta verde e roxo`
3. **Commit to variacao-cores**
4. Clique em **Push origin** pra enviar a branch pro GitHub

**Passo 4 — O momento "aha" (3 min)**

1. No seletor de branch, volte pra **main**
2. Abra a mesma pasta no Finder/Explorador e dê duplo clique no `index.html` de novo
3. Olhe: **a cor voltou pro azul e branco**

Você não editou nada. O arquivo na sua pasta mudou de conteúdo sozinho, só porque você trocou de branch.

> **O que fixar:** a branch não é uma pasta separada — é a mesma pasta mudando de estado conforme a linha
> do tempo ativa. É isso que permite ter dezenas de variações sem duplicar pasta nenhuma.

---

### 🎁 Bônus — Navegando o Git pelo terminal

**~12 min · opcional**

Nada depois disso depende deste bônus. Se o grupo estiver adiantado, vale; se não, fica como exploração
pra fazer em casa. O objetivo é **reconhecimento**, não decoreba.

Tudo que você fez clicando no GitHub Desktop tem um comando equivalente no terminal. Você não precisa
usar — mas reconhecer ajuda muito, porque é a língua que qualquer tutorial, post de blog e o próprio
Claude Code falam.

| No GitHub Desktop | No terminal |
|---|---|
| Aba **History** | `git log --oneline` |
| Aba **Changes** | `git status` e `git diff` |
| Seletor de **Current Branch** | `git branch` |
| Botão **Commit to main** | `git add .` + `git commit -m "mensagem"` |
| Botão **Push origin** | `git push` |

#### Exercício Bônus — Reconhecendo os comandos (8 min)

**Entregável:** nenhum arquivo novo. A ideia é ver, em texto, o mesmo estado que o GitHub Desktop já
mostrava em botões.

1. Abra o Terminal (Mac) ou o PowerShell (Windows)
2. Navegue até a pasta do repositório com `cd` + o caminho
   (ex: `cd Documentos/meu-prototipo-arenacash`).
   **Dica de Mac:** digite `cd ` e arraste a pasta do Finder pro terminal — o caminho aparece sozinho
3. Rode `git log --oneline` e compare com a aba **History**
4. Rode `git branch` e compare com o seletor de branch. A que tem `*` na frente é a ativa
5. Rode `git status`. Sem mudanças pendentes, ele responde
   `nothing to commit, working tree clean`

> **O que fixar:** o terminal não faz nada diferente do GitHub Desktop — é a mesma informação, em texto
> em vez de botão. E é exatamente isso que o Claude Code vai rodar por trás dos panos no próximo bloco.

---

### Bloco 2.3 — Conectando o Claude Code ao GitHub

**~12 min**

Até agora, quem clicava nos botões era você. A partir de agora, quem roda os comandos também pode ser o
**Claude Code** — mas ele só consegue agir na sua conta depois de uma autorização.

Claude Code é o Claude rodando no terminal. Ele entende pedidos em português e executa ações reais nos
seus arquivos e no Git, sem você digitar comando nenhum.

Seu facilitador vai fazer a conexão na tela primeiro. O que acontece: dentro da pasta do repositório ele
roda `claude`, pede *"conecta essa sessão à minha conta do GitHub"*, o Claude Code dispara um
`gh auth login`, o navegador abre e ele autoriza — uma vez só.

É como logar no Notion ou no Spotify num computador novo: você autoriza uma vez, e ele lembra.

#### Exercício 5 — Conectando seu Claude Code (6 min)

**Entregável:** Claude Code autenticado na sua conta GitHub, confirmado por uma pergunta simples.

1. Abra o Terminal e vá até a pasta `meu-prototipo-arenacash` (`cd` + caminho)
2. Rode `claude` pra abrir o Claude Code
3. Peça: *"Conecta essa sessão à minha conta do GitHub."*
4. Siga o fluxo que abre no navegador: **GitHub.com → HTTPS → Login with a web browser**, e autorize
5. De volta ao Claude Code, confirme que funcionou perguntando:
   *"Qual é o status do meu repositório agora? Tem alguma mudança pendente?"*
6. Ele deve responder descrevendo o estado — branch atual, mudanças pendentes, últimos commits.
   Se respondeu isso, está conectado

> **O que fixar:** essa autorização é feita **uma vez só**. Nas próximas conversas com o Claude Code
> neste computador, ele já lembra que está conectado à sua conta.

---

### Bloco 2.4 — Claude Code na prática: um slide novo

**~10 min**

Agora que o Claude Code está conectado, você vai usar ele pra uma tarefa que **ainda não existe** no
protótipo — não pra repetir a variação de cor que você já fez na mão.

#### Exercício 6 — Um slide novo, do início ao fim, pelo Claude Code (9 min)

**Entregável:** um slide de depoimento — que não existia antes — criado, commitado e mesclado
inteiramente pelo Claude Code.

Cole estas mensagens no Claude Code, **uma de cada vez**, esperando ele terminar antes da próxima:

> Cria uma branch chamada `slide-depoimento` a partir da main.

> Nessa branch, adiciona um novo slide ao index.html com um depoimento fictício de um cliente da
> ArenaCash sobre a campanha "Indique um amigo e ganhe R$ 50". Inclui um nome e uma citação curta,
> mantendo o visual consistente com o slide de capa.

> Me mostra como ficou.

Confira no navegador, abrindo o `index.html` local. Se estiver bom:

> Commita com a mensagem "adiciona slide de depoimento", faz push da branch e mescla direto na main —
> essa não precisa de Pull Request, é só uma prova de conceito.

Agora abra o GitHub Desktop — sem fazer nada, só olhar. A branch e o commit que o Claude Code criou estão
lá, na mesma conta, no mesmo repositório.

> **O que fixar:** o Claude Code usou o mesmo repositório e os mesmos mecanismos que você aprendeu na
> mão. Só mudou quem executou o clique. E o resultado é conteúdo novo, não repetição.

---

### Bloco 2.5 — Branches se cruzando: merge e conflito

**~30 min**

#### Merge é o cruzamento

Uma branch só tem valor se, em algum momento, ela volta pra se juntar com a principal. Isso se chama
**merge** — o momento em que duas linhas do tempo se cruzam.

**Quando dá certo:** as mudanças estão em partes diferentes do arquivo. O Git junta tudo sozinho, sem
perguntar nada.

**Quando dá conflito:** duas branches mudaram **a mesma linha** de formas diferentes. O Git não tem como
adivinhar qual você quer — então ele para e pergunta.

> Conflito não é erro, não é bug, não é sinal de que você fez algo errado. É o Git sendo honesto: "duas
> pessoas mudaram a mesma coisa, escolhe você".

#### Exercício 7 — Merge tranquilo e depois um conflito de verdade (23 min)

**O cenário:** enquanto o marketing testava as cores, o time de copy também testava um texto novo pro
mesmo botão. Você vai mesclar as duas coisas e ver o que acontece.

**Entregável:** a branch `variacao-cores` mesclada em `main` sem problema, e uma segunda branch
`variacao-copy` que gera um conflito real, resolvido por você.

**Passo 1 — Merge tranquilo: `variacao-cores` → `main` (6 min)**

1. No GitHub Desktop, troque pra branch **main**
2. Menu **Branch → Merge into current branch**
3. Selecione `variacao-cores` e confirme
4. Repare: sem erro, sem aviso. O Git juntou sozinho porque não havia conflito com o que estava em `main`
5. **Push origin** pra atualizar o GitHub.com

Esse foi o caminho feliz. Agora você vai forçar o caminho difícil de propósito.

**Passo 2 — Crie a branch que vai gerar o conflito (5 min)**

1. Com `main` já atualizada (agora com verde e roxo), crie a branch `variacao-copy`
2. No claude.ai:

> Aqui está meu código HTML atual [cole o conteúdo atualizado]. Troca o texto do botão de "Saiba mais"
> para "Quero indicar agora" e o subtítulo pra algo mais urgente sobre o prazo da promoção. Mantém o
> resto igual. Me devolve o código completo.

3. Cole no `index.html`, salve, commite na `variacao-copy` com a mensagem
   `testando copy mais urgente no botão` e faça push

**Passo 3 — Volte na main e mude a MESMA linha de outro jeito (5 min)**

1. Troque de volta pra `main`
2. No claude.ai, peça outra variação — diferente da anterior — pro mesmo botão:

> No mesmo código [cole o index.html da main], troca o texto do botão pra "Ganhar R$ 50 agora" e ajusta
> o subtítulo pra reforçar o valor do bônus. Me devolve o código completo.

3. Cole, salve, commite direto na `main` com a mensagem `ajuste de copy focado no valor do bônus` e
   faça push

Agora `main` e `variacao-copy` mudaram a mesma linha de formas diferentes. É hora do conflito.

**Passo 4 — Tente o merge e resolva o conflito (9 min)**

1. Com `main` ativa, vá em **Branch → Merge into current branch** e selecione `variacao-copy`
2. O GitHub Desktop avisa: **"There are conflicts on this branch"**
3. Clique em **Open in [seu editor]**, ou abra o `index.html` na mão. Você vai ver isto:

```html
<<<<<<< HEAD
<button>Ganhar R$ 50 agora</button>
=======
<button>Quero indicar agora</button>
>>>>>>> variacao-copy
```

Traduzindo: entre `<<<<<<< HEAD` e `=======` está a versão da `main`; entre `=======` e
`>>>>>>> variacao-copy` está a versão da outra branch. Escolha uma, ou combine as duas.

Se quiser ajuda pra decidir, cole o trecho no claude.ai:

> Este é um conflito de merge do Git. Aqui está o trecho com os marcadores: [cole]. Me explica as duas
> versões e sugere qual ficaria melhor pro botão de uma campanha de indicação, ou uma terceira opção que
> combine as duas.

4. Edite o arquivo apagando os marcadores (`<<<<<<<`, `=======`, `>>>>>>>`) e deixando só o texto final
5. Salve
6. Volte ao GitHub Desktop — ele detecta que acabou e libera o botão **Commit merge**
7. **Commit merge**, depois **Push origin**

> **O que fixar:** resolver conflito não tem mistério — é abrir o arquivo, decidir qual trecho fica,
> apagar as marcações e commitar. O Git só precisa que **uma pessoa decida**.

---

### Bloco 2.6 — Claude Code na prática: outro conflito

**~12 min**

Você já resolveu um conflito na mão, no slide de capa. Agora vai provocar outro — num lugar diferente do
protótipo, o slide de depoimento que o Claude Code criou — e dessa vez é ele quem resolve.

#### Exercício 8 — Um conflito novo, resolvido pelo Claude Code (11 min)

**Entregável:** um segundo conflito de merge, num trecho diferente do primeiro, identificado e resolvido
pelo Claude Code.

Cole estas mensagens no Claude Code, uma de cada vez:

> Cria uma branch chamada `depoimento-v2` a partir da main. Nela, muda a citação do slide de depoimento
> pra destacar a rapidez do processo de indicação. Commita e faz push.

> Agora, direto na branch main, muda essa mesma citação do depoimento pra destacar a economia de R$ 50 em
> vez da rapidez. Commita e faz push direto na main.

> Tenta mesclar a branch `depoimento-v2` na main. Se der conflito, me explica o que está em conflito e
> sugere uma versão da citação que combine as duas ideias — rapidez e economia.

Ele deve identificar o conflito, mostrar as duas versões e propor uma combinação. **Leia a sugestão antes
de aceitar** — se topar:

> Aplica essa sugestão, resolve o conflito e finaliza o merge.

Confirme no GitHub Desktop que o merge aparece no histórico, com as duas branches convergindo — sem que
você tenha clicado em nada.

> **O que fixar:** o mecanismo do conflito é sempre o mesmo, em qualquer slide — duas versões da mesma
> linha disputando espaço. Na mão, você escolheu qual ficava. Aqui, o Claude Code sugere uma combinação
> nova — mas **a decisão final continua sendo sua**.

---

### Bloco 2.7 — Pull Request: comentar antes de ir pro ar

**~18 min**

No exercício anterior você mesclou direto, sem revisão. Isso funciona quando você trabalha sozinho.
Quando tem mais gente envolvida — ou quando você quer uma segunda opinião antes de algo ir pro ar —
existe o **Pull Request**.

Um PR é um pedido formal de "quero juntar minha branch na main, alguém pode olhar antes?". Ele vive no
GitHub.com (não no GitHub Desktop) e permite três coisas:

- ver o **diff** — o que exatamente mudou, linha por linha
- deixar **comentários** em linhas específicas
- **aprovar** ou pedir mudanças antes de aceitar

É como mandar um Loom de aprovação, só que pra código — ou, no nosso caso, pra HTML.

#### Exercício 9 — Abrindo e revisando um Pull Request (12 min)

**O cenário:** você quer testar mais uma variação, mas dessa vez quer que alguém revise antes de aprovar
— igual aconteceria numa empresa de verdade.

**Entregável:** um Pull Request aberto, com pelo menos 1 comentário e uma aprovação, mesclado em `main`.

**Passo 1 — Crie a branch e o slide novo (4 min)**

1. Crie a branch `slide-beneficios` a partir da `main`
2. No claude.ai:

> Aqui está meu código HTML atual [cole]. Adiciona mais um slide (a apresentação deve funcionar como
> slides navegáveis com um botão "próximo") listando 3 benefícios da campanha de indicação: R$ 50 pro
> indicado, R$ 50 pra quem indicou, sem limite de indicações. Mantém o visual consistente com os outros
> slides. Me devolve o código completo.

3. Cole no `index.html`, salve, confira no navegador, commite com `adiciona slide de beneficios` e
   faça push

**Passo 2 — Abra o Pull Request (4 min)**

1. No GitHub Desktop, com a `slide-beneficios` ativa, clique em **Create Pull Request** — ele abre o
   navegador direto na página certa
2. Confirme o título (ex: "Adiciona slide de benefícios") e escreva uma descrição curta
3. **Create Pull Request**

**Passo 3 — Revisem em dupla (4 min)**

Formem duplas. Cada um abre o PR do colega — o link está na aba **Pull requests** do repositório dele.

1. Clique na aba **Files changed** e veja o diff, com o que foi adicionado em verde
2. Passe o mouse numa linha e clique no **+** que aparece. Deixe um comentário
   (ex: "esse texto podia ser mais direto")
3. Autor: leia o comentário, responda ou ajuste o código e faça um commit novo na mesma branch — o PR
   atualiza sozinho
4. Revisor: **Review changes → Approve**
5. Autor: **Merge pull request → Confirm merge**

> **O que fixar:** o PR não é etapa técnica chata — é o momento onde a conversa acontece **antes** de a
> mudança virar oficial. Em produto real, quem revisa costuma ser o tech lead ou o par de design. O
> mecanismo é exatamente esse.

---

### Bloco 2.8 — Deploy: colocando no ar

**~18 min**

Você tem um protótipo funcionando na pasta local e no GitHub. Falta a última peça: uma URL pública que
qualquer pessoa acessa, sem precisar clonar nada.

**GitHub Pages** é a forma mais simples: gratuito, sem cartão de crédito, publica direto a partir do
próprio repositório.

O fluxo completo, de ponta a ponta:

```
Editar (na mão ou via Claude Code)
     ↓
Commit
     ↓
Branch + Pull Request (revisão)
     ↓
Merge em main
     ↓
GitHub Pages publica automaticamente a partir de main
     ↓
URL pública atualizada
```

A parte boa: você configura **uma vez**. A partir daí, toda vez que algo for mesclado em `main`, o site
publicado se atualiza sozinho.

#### Exercício 10 — Publicando o protótipo (12 min)

**Entregável:** URL pública ativa, no formato `https://<seu-usuario>.github.io/meu-prototipo-arenacash/`,
mostrando a apresentação com os slides de capa, depoimento e benefícios.

**Passo 1 — Ative o GitHub Pages (8 min)**

1. Acesse `github.com/<seu-usuario>/meu-prototipo-arenacash`
2. **Settings**
3. No menu lateral, **Pages**
4. Em **Source**, selecione a branch **main** e a pasta **/ (root)**
5. **Save**
6. Espere cerca de 1 minuto e atualize a página — a URL pública aparece no topo

**Passo 2 — Valide a URL (4 min)**

1. Abra a URL numa aba anônima/privada, pra garantir que não é cache local
2. Confirme que a apresentação abre e os slides navegam
3. Copie o link, mande pra alguém do grupo e peça pra abrir no celular

> **O que fixar:** você acabou de operacionalizar o fluxo completo, testado de duas formas ao longo do
> dia — na mão e via Claude Code. É o mesmo fluxo usado em produtos reais, só que sem depender de
> ninguém do time técnico.

---

### Bloco 2.9 — Desafio final: crie algo seu

**~15 min**

Chegou a vez de você escolher. Nada de repetir o que já foi feito na mão ou nos exemplos do Claude Code —
pense em algo que ainda **não existe** no seu protótipo.

Se precisar de inspiração, escolha uma destas (ou traga a sua):

- um slide de FAQ com 2 ou 3 perguntas frequentes sobre a campanha
- uma seção de números (ex: "10.000 indicações já feitas")
- um botão de compartilhar no WhatsApp
- uma animação ou transição entre os slides

#### Exercício 11 — Uma ideia sua, publicada de ponta a ponta (15 min)

**Entregável:** uma funcionalidade nova, escolhida por você, criada, commitada, revisada via PR e
publicada — tudo pedindo ao Claude Code, **sem abrir o GitHub Desktop**.

O roteiro, em português, pro Claude Code:

1. Peça pra criar uma branch com um nome que descreva sua ideia
2. Descreva a funcionalidade que você quer adicionar ao `index.html`
3. Peça pra ele te mostrar o resultado **antes** de continuar
4. Peça commit, push e abertura de um Pull Request
5. Revise o diff no GitHub.com e peça pro Claude Code mesclar
6. Peça pra confirmar que o GitHub Pages já está servindo a versão nova, e pra te devolver a URL pública

Quem terminar primeiro compartilha o link e conta pro grupo o que escolheu criar.

> **O que fixar:** o valor de entender o mecanismo não é nunca mais usar o Claude Code sozinho — é
> **confiar no resultado**, porque você sabe exatamente o que está acontecendo por trás de cada pedido.

---

### Bloco 2.10 — Fechando os dois dias

**~8 min**

#### Os 4 motivos, revisitados

No Bloco 1.2 você viu quatro razões pra usar GitHub sendo não-técnico. Onde cada uma apareceu:

1. **Vibe coding direto no código da empresa** — Blocos 2.4, 2.6 e 2.9, pedindo direto ao Claude Code
2. **Repositório de apresentações e HTML** — é o próprio pitch deck que você construiu e publicou
3. **Análise de dados e algoritmos** — não foi praticado aqui, mas agora você reconhece a estrutura pra
   ir atrás disso sozinho
4. **Controle de versão** — vivido o curso inteiro: commits, branches, um conflito de verdade resolvido,
   histórico completo

#### O que você sai sabendo fazer

- Criar um repositório do zero e publicar na nuvem
- Criar branches pra testar variações sem arriscar a versão oficial
- Mesclar branches e **resolver um conflito** sem entrar em pânico
- Abrir um Pull Request, revisar um diff e comentar antes de aprovar
- Colocar um protótipo no ar numa URL pública
- Pedir tudo isso ao Claude Code — e saber conferir se ele fez certo

#### Duas perguntas pra fechar

Branch e merge ainda te assustam?

E, na hora de fazer: você preferiu clicar no GitHub Desktop ou pedir pro Claude Code? Não existe resposta
certa — mas repare que agora você tem as duas na mão, e sabe o que está acontecendo nos dois casos.
