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

> **Onde isso aparece no curso:** é por essas quatro razões que a gente passa dois dias aqui. No fim do
> Dia 2 você vai ter usado o GitHub pra **pelo menos três das quatro** na prática.

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

> **O que fixar:** ninguém decora essa lista de uma vez, e não é pra decorar. A ideia é você **reconhecer
> o termo quando ele aparecer de novo** — e ele vai aparecer, muitas vezes.

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

*A escrever, seguindo as mesmas regras de voz do topo deste documento, quando `dia-2.html` for construído.*
