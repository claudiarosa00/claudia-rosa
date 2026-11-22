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
      "Trabalho muito com inteligência artificial e gosto mesmo disso: uso-a no dia a dia para analisar informação, automatizar tarefas e encontrar novas formas de trabalhar. Interessa-me sobretudo a interseção entre media, dados e AI, e como podem levar a decisões mais inteligentes e estratégias de media mais fortes.",
    ],

    numeros: [
      { valor: "4", legenda: "anos de experiência em media" },
      { valor: "10", legenda: "certificações profissionais" },
      { valor: "AI", legenda: "no dia a dia de trabalho" },
      { valor: "5+", legenda: "indústrias, de energia a luxo" },
    ],

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
          "Criei, com a ajuda de AI, uma ferramenta interna hoje usada por muitas pessoas na empresa, que reduziu uma tarefa repetitiva para cerca de 2 minutos",
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
      { grupo: "Dados, Automação & AI", itens: ["Inteligência Artificial (AI)", "Data-Driven Marketing", "Digital Analytics", "Data Science for Marketing", "Machine Learning", "Automação de processos"] },
      { grupo: "Pessoais", itens: ["Problem-solving", "Pensamento crítico", "Capacidade de organização", "Proatividade", "Comunicação", "Trabalho em equipa"] },
    ],

    certificacoes: [
      { nome: "TikTok Media Buying Professional", emissor: "TikTok for Business", data: "2026", pdf: "" },
      { nome: "Google Ads Display Certification", emissor: "Google Skillshop", data: "2026", pdf: "" },
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
      "I work a lot with artificial intelligence and genuinely enjoy it: I use it every day to analyse information, automate tasks and find new ways of working. I'm especially interested in the intersection of media, data and AI, and how they can lead to smarter decisions and stronger media strategies.",
    ],

    numeros: [
      { valor: "4", legenda: "years of media experience" },
      { valor: "10", legenda: "professional certifications" },
      { valor: "AI", legenda: "in my everyday work" },
      { valor: "5+", legenda: "industries, from energy to luxury" },
    ],

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
          "Built, with the help of AI, an internal tool now used by many people across the company, cutting a repetitive task down to about 2 minutes",
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
      { grupo: "Data, Automation & AI", itens: ["Artificial Intelligence (AI)", "Data-Driven Marketing", "Digital Analytics", "Data Science for Marketing", "Machine Learning", "Process automation"] },
      { grupo: "Personal", itens: ["Problem-solving", "Critical thinking", "Organisation", "Proactivity", "Communication", "Teamwork"] },
    ],

    certificacoes: [
      { nome: "TikTok Media Buying Professional", emissor: "TikTok for Business", data: "2026", pdf: "" },
      { nome: "Google Ads Display Certification", emissor: "Google Skillshop", data: "2026", pdf: "" },
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
