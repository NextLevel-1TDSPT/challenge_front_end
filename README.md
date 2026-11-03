<p align="center">
  <img src="imagens/logo_nextlevel.png" alt="Logo NextLevel" width="120" />
</p>

<h1 align="center">NextLevel – Challenge Turma do Bem</h1>

<p align="center">
  Proposta de novo site para a <strong>Turma do Bem</strong>, desenvolvida no Challenge FIAP (1TDS · 2026).<br />
  <em>Projeto acadêmico: não é o site oficial da Turma do Bem.</em>
</p>

<p align="center">
  🌐 <a href="https://nextlevel-1tdspt.github.io/challenge_front_end/"><strong>Acessar o site</strong></a>
  &nbsp;·&nbsp;
  📁 <a href="https://github.com/NextLevel-1TDSPT/challenge_front_end"><strong>Repositório no GitHub</strong></a>
</p>

---

## 📌 Sobre o projeto

A **Turma do Bem** é uma ONG fundada em 2002 que gerencia a maior rede de voluntariado odontológico especializado do mundo, levando tratamento gratuito a jovens e mulheres em situação de vulnerabilidade.


Hoje, 90% das doações vêm de empresas e só **10% de pessoas físicas**. Um site que emocione e convide a doar é o caminho para aumentar a participação de quem visita o site.

O **NextLevel** propõe:

- **Um site novo**, acolhedor e com um caminho claro para doar;
- **Um assistente virtual (chatbot)**, que explica a doação pela Nota Fiscal Paulista e faz o cadastro de doadores da Turma do Bem.

> **Sprint 2:** o site da Sprint 1 ficou responsivo (celular, tablet e desktop) e ganhou interações com JavaScript.

---

## ✅ Status da Sprint 2

**Concluída.** Funcionalidades implementadas:

- **Layout responsivo:** celular (até 480px), tablet (a partir de 768px) e desktop (≥ 992px e ≥ 1300px), sem rolagem horizontal;
- **Menu hambúrguer:** em telas menores, o menu abre e fecha com um clique (`js/menu.js`);
- **Validação do formulário de contato:** campos obrigatórios conferidos com JavaScript, mensagens de erro e destaque em vermelho no campo com problema (`js/contato.js`);
- **Assistente interativo:** a pessoa escolhe as opções com botões e o assistente responde sobre doação comum e Nota Fiscal Paulista (`js/assistente.js`);
- **CSS com variáveis e medidas em rem**, organizado por seções.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Uso no projeto |
|---|---|
| HTML5 | Estrutura semântica das páginas |
| CSS3 | Estilo, variáveis, layout com Flexbox e media queries para celular, tablet e desktop |
| JavaScript | Menu hambúrguer, validação do formulário e assistente interativo |
| Git e GitHub | Versionamento e trabalho em equipe |
| GitHub Pages | Publicação do site |
| Figma | Protótipo e identidade visual |
| VS Code | Editor de código |

Sem frameworks ou bibliotecas externas. Fonte utilizada: **Gotham** (arquivos locais).

---

## 📂 Estrutura de pastas

```
challenge_front_end/
├── index.html              # Página inicial
├── README.md               # Este guia
├── css/
│   ├── style.css           # Estilos do site (organizado por seções)
│   └── fonts.css           # Importação da fonte Gotham
├── fonts/                  # Arquivos da fonte Gotham (.otf)
├── js/
│   ├── menu.js             # Menu hambúrguer (todas as páginas)
│   ├── contato.js          # Validação do formulário de contato
│   └── assistente.js       # Conversa do assistente
├── imagens/                # Logo, fotos dos integrantes e prints do README
│   └── prints/
└── pages/
    ├── sobre.html          # Contexto, problema, solução, tecnologias e roadmap
    ├── integrantes.html    # Equipe
    ├── faq.html            # Perguntas frequentes
    ├── contato.html        # Formulário de contato
    ├── problema-solucao.html  # Solução: o problema e a jornada do doador
    ├── como-doar.html      # Solução: protótipo do caminho para doar
    └── assistente.html     # Solução: assistente interativo
```

---

## 🖥️ Páginas do site

| Página | Conteúdo |
|---|---|
| **Início** | Apresentação do projeto, programas da Turma do Bem e chamada para doar |
| **Sobre o projeto** | Contexto, problema encontrado, solução proposta, tecnologias e roadmap |
| **Equipe** | Nome, foto, RM, turma, LinkedIn e GitHub de cada integrante |
| **FAQ** | Perguntas frequentes sobre a ONG, as doações e o projeto |
| **Contato** | Formulário com nome, telefone, e-mail, assunto e mensagem, validado com JavaScript |

### Páginas da solução

Ficam no submenu **Sobre o projeto ▾** e na coluna **Nossa solução** do rodapé.

| Página | Conteúdo |
|---|---|
| **Problema e solução** | O problema do site atual e a jornada do doador: hoje × com o NextLevel |
| **Como doar** | Protótipo do novo site: doação comum e doação pela Nota Fiscal Paulista |
| **Assistente** | Conversa interativa com botões: doação comum e doação pela Nota Fiscal Paulista (cadastro de doador na Sprint 3) |

### Prints

**Página inicial**
![Página inicial](imagens/prints/home.png)

**Sobre o projeto**
![Página Sobre o projeto](imagens/prints/sobre.png)

**Equipe**
![Página Equipe](imagens/prints/equipe.png)

**FAQ**
![Página FAQ](imagens/prints/faq.png)

**Contato**
![Página Contato](imagens/prints/contato.png)

**Problema e solução**
![Página Problema e solução](imagens/prints/problema-solucao.png)

**Como doar**
![Página Como doar](imagens/prints/como-doar.png)

**Assistente**
![Página Assistente](imagens/prints/assistente.png)

---

## 👥 Autores

| Foto | Nome | RM | Turma | LinkedIn | GitHub |
|:---:|---|---|---|---|---|
| <img src="imagens/cadu_integrante.jpeg" alt="Carlos Eduardo" width="70" /> | Carlos Eduardo Alves Oliveira | 575518 | 1TDSPT | [LinkedIn](https://www.linkedin.com/in/caduoliveirarj/) | [cadubrrj-beep](https://github.com/cadubrrj-beep) |
| <img src="imagens/rafael_integrante.jpeg" alt="Rafael Silva" width="70" /> | Rafael Silva de Jesus | 574559 | 1TDSPT | [LinkedIn](https://linkedin.com/in/rafaeljesus01) | [RafaJesus3](https://github.com/RafaJesus3) |
| <img src="imagens/nicolas_integrante.jpeg" alt="Nicolas David" width="70" /> | Nicolas David Magalhães | 576054 | 1TDSPT | [LinkedIn](https://www.linkedin.com/in/nicolas-david-magalhaes-0b398742a/) | [Nicolasdmagalhaes](https://github.com/Nicolasdmagalhaes) |
| <img src="imagens/carlos_integrante.jpeg" alt="Carlos Henrique" width="70" /> | Carlos Henrique Carvalho de Lima | 575083 | 1TDSPT | [LinkedIn](https://www.linkedin.com/in/carlos-henrique-carvalho-de-lima-606b033bb/) | [CarlRickCliman](https://github.com/CarlRickCliman) |
| <img src="imagens/leo_integrante.jpeg" alt="Leonardo Souza" width="70" /> | Leonardo Souza da Conceição | 575060 | 1TDSPT | [LinkedIn](https://www.linkedin.com/in/leonardo-souza-da-concei%C3%A7%C3%A3o/) | [LeonardoSC-eng](https://github.com/LeonardoSC-eng) |

---

## 📬 Contato

Dúvidas ou sugestões sobre o projeto? Fale com a equipe:

- Pelos **LinkedIns** dos integrantes, na tabela acima;
- Abrindo uma [issue no repositório](https://github.com/NextLevel-1TDSPT/challenge_front_end/issues).
