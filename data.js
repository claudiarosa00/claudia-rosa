// =====================================================================
//  EDITA ESTE FICHEIRO para personalizar o site (e o CV).
//  "comum" = igual nos dois idiomas. "pt" e "en" = textos de cada idioma.
// =====================================================================

window.SITE = {
  comum: {
    nome: "Cláudia Rosa",
    iniciais: "CR",
    foto: "foto.jpg",
    disponivel: false, // true = mostra o selo "Disponível para novas oportunidades"
    links: {
      email: "cfonsecarosa14@gmail.com",
      telefone: "+351 924 153 543",
      linkedin: "https://www.linkedin.com/in/cl%C3%A1udia-rosa-95681817a/",
      github: "",
    },
  },

  // ===================================================================
  //  PORTUGUÊS
  // ===================================================================
  pt: {
    ui: {
      nav: { sobre: "Sobre", caso: "Caso", experiencia: "Experiência", competencias: "Competências", contacto: "Contacto" },
      disponivel: "Disponível para novas oportunidades",
      sobre: "Sobre mim",
      abordagem: "Como trabalho",
      caso: "Caso em destaque",
      problema: "O problema",
      solucao: "A solução",
      resultado: "O resultado",
      experiencia: "Experiência",
      competencias: "Competências",
      certificacoes: "Certificações",
      projetos: "Projetos",
      formacao: "Formação & Idiomas",
      contactoTitulo: "Vamos conversar?",
      contactoTexto: "Estou sempre aberta a novos desafios, colaborações e uma boa conversa.",
      email: "Email",
      telefone: "Telefone",
      cv: "Descarregar CV",
      verProjeto: "Ver projeto →",
      verCert: "Ver certificado",
      traduzido: "",
      tema: "Mudar tema",
    },

    cargo: "Media Expert na Arena Media Portugal",
    localizacao: "Lisboa, Portugal",
    cv: "cv-claudia-rosa.pdf",

    frase:
      "Estratégias de media integradas, com olho para detetar problemas e vontade de os resolver, usando dados, automação e AI.",

    resumoCV:
      "Media Expert com 4 anos de experiência em estratégias de media integradas, do planeamento à compra, otimização e análise, em canais digitais e offline. Tenho facilidade em detetar problemas e transformá-los em soluções práticas, com dados, automação e AI. Criei uma ferramenta interna, hoje usada por muitas pessoas na empresa, que reduziu uma tarefa repetitiva para cerca de 2 minutos.",

    sobre: [
      "Sou Media Expert com 4 anos de experiência no desenvolvimento de estratégias de media integradas, em canais digitais e offline. Acompanho todo o ciclo de vida das campanhas: estratégia, planeamento, compra, otimização, reporting e análise.",
      "No digital, tenho experiência prática em Paid Social (Meta, TikTok e LinkedIn), compra direta de media e Google, em estreita colaboração com as equipas de Programmatic e AdOps. No offline, trabalho com OOH, rádio, imprensa e TV.",
      "Procuro constantemente formas de tornar os processos mais simples e eficientes: melhorei fluxos de reporting e planeamento, criei templates, automatizei tarefas repetitivas e estruturei melhor a informação das campanhas.",
      "O que mais me motiva é identificar o que não está a funcionar, muitas vezes antes de alguém dar por isso, e encontrar uma solução prática e escalável. Gosto de questionar a forma como as coisas sempre foram feitas.",
      "Trabalho muito com inteligência artificial e gosto mesmo disso: uso ChatGPT, Claude e GitHub Copilot no dia a dia para analisar informação, automatizar tarefas e criar ferramentas que simplificam o trabalho da equipa, mesmo sem ser programadora. Interessa-me sobretudo a interseção entre media, dados e AI, e como podem levar a decisões mais inteligentes e estratégias de media mais fortes.",
    ],

    numeros: [], // vazio = os cartões de números não aparecem

    abordagem: [], // vazio = a secção "Como trabalho" não aparece

    casos: [], // vazio = a secção "Caso em destaque" não aparece

    experiencia: [
      {
        cargo: "Media Expert",
        empresa: "Arena Media Portugal",
        periodo: "jul 2023 — Presente",
        descricao:
          "Planeamento, compra e gestão de campanhas multicanal em TV, rádio, digital, outdoor e imprensa, desenvolvendo estratégias integradas em conjunto com as equipas de AdOps, Programmatic, Conteúdo e Research.",
        destaques: [
          "Criei, com a ajuda de AI (ChatGPT, Claude e Copilot), uma ferramenta interna hoje usada por muitas pessoas na empresa, que reduziu uma tarefa repetitiva para cerca de 2 minutos",
          "Compra direta de media em Paid Social (Meta, TikTok, LinkedIn) e Google",
          "Melhoria dos fluxos de reporting e planeamento, com templates e automação de tarefas repetitivas",
          "Clientes de mobilidade, energia, saúde, automóvel, luxo e bebidas espirituosas",
          "Colaboração internacional com equipas em Espanha e França",
        ],
      },
      {
        cargo: "Associate Media Expert",
        empresa: "Arena Media Portugal",
        periodo: "jul 2022 — jun 2023",
        descricao:
          "Apoio ao planeamento, implementação e análise de campanhas de media multicanal, em contacto diário com clientes, parceiros de media e equipas internas.",
        destaques: [],
      },
      {
        cargo: "Marketing Trainee",
        empresa: "Flying Tiger Copenhagen",
        periodo: "fev 2022 — mai 2022",
        descricao: "Estágio na área de marketing.",
        destaques: [],
      },
    ],

    competencias: [
      { grupo: "Media", itens: ["Estratégia de media", "Planeamento", "Compra de media", "Paid Social", "Google Ads", "Programmatic", "TV · Rádio · OOH · Imprensa", "Reporting e otimização"] },
      { grupo: "Dados, Automação & AI", itens: ["Inteligência Artificial (AI)", "ChatGPT", "Claude", "GitHub Copilot", "Criação de ferramentas com AI", "GitHub", "Data-Driven Marketing", "Digital Analytics", "Data Science for Marketing", "Machine Learning", "Automação de processos"] },
      { grupo: "Pessoais", itens: ["Problem-solving", "Pensamento crítico", "Capacidade de organização", "Proatividade", "Comunicação", "Trabalho em equipa"] },
    ],

    certificacoes: [
      { nome: "TikTok Media Buying Certification", emissor: "TikTok for Business", data: "2026", pdf: "", link: "https://www.credential.net/b71ee64f-2c02-4d34-99e2-31d61d002673?key=b41809fcd03b176f8cf08c61c64fab2ba6f2c18856a71967d04f153131a1f374" },
      { nome: "Google Ads Display Certification", emissor: "Google Skillshop", data: "2026", pdf: "", link: "https://www.credential.net/a2708979-e1ea-44fd-bc99-fee88590fa17" },
      { nome: "Introduction to SQL", emissor: "DataCamp", data: "2025", pdf: "certificados/datacamp-introduction-to-sql.pdf" },
      { nome: "Machine Learning for Business", emissor: "DataCamp", data: "2024", pdf: "certificados/datacamp-machine-learning-for-business.pdf" },
      { nome: "Introduction to Power BI", emissor: "DataCamp", data: "2024", pdf: "certificados/datacamp-introduction-to-power-bi.pdf" },
      { nome: "Data Manipulation with pandas", emissor: "DataCamp", data: "2024", pdf: "certificados/datacamp-data-manipulation-pandas.pdf" },
      { nome: "Intermediate Python", emissor: "DataCamp", data: "2024", pdf: "certificados/datacamp-intermediate-python.pdf" },
      { nome: "Understanding Machine Learning", emissor: "DataCamp", data: "2024", pdf: "certificados/datacamp-understanding-machine-learning.pdf" },
      { nome: "Understanding Data Science", emissor: "DataCamp", data: "2024", pdf: "certificados/datacamp-understanding-data-science.pdf" },
      { nome: "Introduction to Python", emissor: "DataCamp", data: "2023", pdf: "certificados/datacamp-introduction-to-python.pdf" },
    ],

    recomendacao: {
      texto:
        "A Cláudia é daquelas colegas que qualquer equipa gostaria de ter. É inteligente, perspicaz e muito empenhada, e tem a rara capacidade de perceber o que pode ser melhorado e de ir atrás disso sem esperar que lho peçam. É uma verdadeira team player e a pessoa a quem recorremos quando surge um imprevisto, porque encontra sempre uma solução.",
      autor: "David Fernandes",
      cargo: "Account Manager, Arena Media Portugal",
    },

    projetos: [], // vazio = a secção não aparece

    formacao: [
      { curso: "Mestrado em Data-Driven Marketing", instituicao: "NOVA IMS · 16 valores", periodo: "2023 — 2025" },
      { curso: "Licenciatura em Marketing", instituicao: "IPAM · 16 valores", periodo: "2019 — 2022" },
    ],

    idiomas: ["Português (nativo)", "Inglês (avançado)"],
  },

  // ===================================================================
  //  ENGLISH
  // ===================================================================
  en: {
    ui: {
      nav: { sobre: "About", caso: "Case", experiencia: "Experience", competencias: "Skills", contacto: "Contact" },
      disponivel: "Open to new opportunities",
      sobre: "About me",
      abordagem: "How I work",
      caso: "Featured case",
      problema: "The problem",
      solucao: "The solution",
      resultado: "The result",
      experiencia: "Experience",
      competencias: "Skills",
      certificacoes: "Certifications",
      projetos: "Projects",
      formacao: "Education & Languages",
      contactoTitulo: "Let's talk",
      contactoTexto: "I'm always open to new challenges, collaborations and a good conversation.",
      email: "Email",
      telefone: "Phone",
      cv: "Download CV",
      verProjeto: "View project →",
      verCert: "View certificate",
      traduzido: "Translated from Portuguese",
      tema: "Toggle theme",
    },

    cargo: "Media Expert at Arena Media Portugal",
    localizacao: "Lisbon, Portugal",
    cv: "cv-claudia-rosa-en.pdf",

    frase:
      "Integrated media strategies, with an eye for spotting problems and the drive to solve them, using data, automation and AI.",

    resumoCV:
      "Media Expert with 4 years of experience in integrated media strategies, from planning and buying to optimisation and analysis, across digital and offline channels. I have a knack for spotting problems and turning them into practical solutions with data, automation and AI. I built an internal tool, now used by many people across the company, that cut a repetitive task down to about 2 minutes.",

    sobre: [
      "I'm a Media Expert with 4 years of experience developing integrated media strategies across digital and offline channels. My work covers the full campaign lifecycle: strategy, planning, buying, optimisation, reporting and analysis.",
      "In digital, I have hands-on experience in Paid Social (Meta, TikTok and LinkedIn), direct media buying and Google, working closely with Programmatic and AdOps teams. Offline, I work with OOH, radio, print and TV.",
      "I'm always looking for ways to make processes simpler and more efficient: I've improved reporting and planning workflows, built templates, automated repetitive tasks and introduced better ways of structuring campaign data.",
      "What drives me most is spotting what isn't working, often before anyone else notices, and finding a practical, scalable solution. I like to challenge the way things have always been done.",
      "I work a lot with artificial intelligence and genuinely enjoy it: I use ChatGPT, Claude and GitHub Copilot every day to analyse information, automate tasks and build tools that make the team's work easier, even though I'm not a developer. I'm especially interested in the intersection of media, data and AI, and how they can lead to smarter decisions and stronger media strategies.",
    ],

    numeros: [], // vazio = os cartões de números não aparecem

    abordagem: [], // vazio = a secção "Como trabalho" não aparece

    casos: [], // vazio = a secção "Caso em destaque" não aparece

    experiencia: [
      {
        cargo: "Media Expert",
        empresa: "Arena Media Portugal",
        periodo: "Jul 2023 — Present",
        descricao:
          "I plan, buy and manage multi-channel media campaigns across TV, radio, digital, outdoor and print, developing integrated strategies together with the AdOps, Programmatic, Content and Research teams.",
        destaques: [
          "Built, with the help of AI (ChatGPT, Claude and Copilot), an internal tool now used by many people across the company, cutting a repetitive task down to about 2 minutes",
          "Direct media buying in Paid Social (Meta, TikTok, LinkedIn) and Google",
          "Improved reporting and planning workflows with templates and automation of repetitive tasks",
          "Clients in mobility, energy, healthcare, automotive, luxury and spirits",
          "International collaboration with teams in Spain and France",
        ],
      },
      {
        cargo: "Associate Media Expert",
        empresa: "Arena Media Portugal",
        periodo: "Jul 2022 — Jun 2023",
        descricao:
          "Supported the planning, implementation and analysis of multi-channel media campaigns, in daily contact with clients, media partners and internal teams.",
        destaques: [],
      },
      {
        cargo: "Marketing Trainee",
        empresa: "Flying Tiger Copenhagen",
        periodo: "Feb 2022 — May 2022",
        descricao: "Marketing internship.",
        destaques: [],
      },
    ],

    competencias: [
      { grupo: "Media", itens: ["Media strategy", "Planning", "Media buying", "Paid Social", "Google Ads", "Programmatic", "TV · Radio · OOH · Print", "Reporting & optimisation"] },
      { grupo: "Data, Automation & AI", itens: ["Artificial Intelligence (AI)", "ChatGPT", "Claude", "GitHub Copilot", "AI-assisted tool building", "GitHub", "Data-Driven Marketing", "Digital Analytics", "Data Science for Marketing", "Machine Learning", "Process automation"] },
      { grupo: "Personal", itens: ["Problem-solving", "Critical thinking", "Organisation", "Proactivity", "Communication", "Teamwork"] },
    ],

    certificacoes: [
      { nome: "TikTok Media Buying Certification", emissor: "TikTok for Business", data: "2026", pdf: "", link: "https://www.credential.net/b71ee64f-2c02-4d34-99e2-31d61d002673?key=b41809fcd03b176f8cf08c61c64fab2ba6f2c18856a71967d04f153131a1f374" },
      { nome: "Google Ads Display Certification", emissor: "Google Skillshop", data: "2026", pdf: "", link: "https://www.credential.net/a2708979-e1ea-44fd-bc99-fee88590fa17" },
      { nome: "Introduction to SQL", emissor: "DataCamp", data: "2025", pdf: "certificados/datacamp-introduction-to-sql.pdf" },
      { nome: "Machine Learning for Business", emissor: "DataCamp", data: "2024", pdf: "certificados/datacamp-machine-learning-for-business.pdf" },
      { nome: "Introduction to Power BI", emissor: "DataCamp", data: "2024", pdf: "certificados/datacamp-introduction-to-power-bi.pdf" },
      { nome: "Data Manipulation with pandas", emissor: "DataCamp", data: "2024", pdf: "certificados/datacamp-data-manipulation-pandas.pdf" },
      { nome: "Intermediate Python", emissor: "DataCamp", data: "2024", pdf: "certificados/datacamp-intermediate-python.pdf" },
      { nome: "Understanding Machine Learning", emissor: "DataCamp", data: "2024", pdf: "certificados/datacamp-understanding-machine-learning.pdf" },
      { nome: "Understanding Data Science", emissor: "DataCamp", data: "2024", pdf: "certificados/datacamp-understanding-data-science.pdf" },
      { nome: "Introduction to Python", emissor: "DataCamp", data: "2023", pdf: "certificados/datacamp-introduction-to-python.pdf" },
    ],

    recomendacao: {
      texto:
        "Cláudia is the kind of colleague every team would love to have. She is smart, sharp and highly committed, and has the rare ability to see what can be improved and go after it without waiting to be asked. She is a true team player and the person we turn to when something unexpected comes up, because she always finds a solution.",
      autor: "David Fernandes",
      cargo: "Account Manager, Arena Media Portugal",
    },

    projetos: [],

    formacao: [
      { curso: "Master's in Data-Driven Marketing", instituicao: "NOVA IMS · Grade 16/20", periodo: "2023 — 2025" },
      { curso: "Bachelor's in Marketing", instituicao: "IPAM · Grade 16/20", periodo: "2019 — 2022" },
    ],

    idiomas: ["Portuguese (native)", "English (advanced)"],
  },
};
