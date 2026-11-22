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
      ferramentas: "Ferramentas",
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
      cursos: "cursos",
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
      "Sou **Media Expert** com 4 anos de experiência em estratégias de media integradas, digitais e offline. Acompanho todo o ciclo das campanhas, da estratégia e planeamento à compra, otimização e análise, com experiência prática em **Meta, TikTok, LinkedIn e Google**, e em TV, rádio, OOH e imprensa.",
      "O que mais me motiva é **detetar o que não está a funcionar e encontrar uma solução prática**, muitas vezes antes de alguém dar por isso. Gosto de questionar a forma como as coisas sempre foram feitas: melhorei fluxos de reporting e planeamento, criei templates e automatizei tarefas repetitivas.",
      "Trabalho todos os dias com **AI (ChatGPT, Claude e Microsoft Copilot)** para analisar informação, automatizar tarefas e criar ferramentas que simplificam o trabalho da equipa, mesmo sem ser programadora. Interessa-me sobretudo a interseção entre media, dados e AI.",
    ],

    numeros: [], // vazio = os cartões de números não aparecem

    abordagem: [], // vazio = a secção "Como trabalho" não aparece

    casos: [], // vazio = a secção "Caso em destaque" não aparece

    experiencia: [
      {
        cargo: "Media Expert",
        empresa: "Arena Media Portugal",
        logo: "logos/arena-media.png", linkedin: "https://www.linkedin.com/company/arena-media-portugal/",
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
        logo: "logos/arena-media.png", linkedin: "https://www.linkedin.com/company/arena-media-portugal/",
        periodo: "jul 2022 — jun 2023",
        descricao:
          "Apoio ao planeamento, implementação e análise de campanhas de media multicanal, em contacto diário com clientes, parceiros de media e equipas internas.",
        destaques: [],
      },
      {
        cargo: "Marketing Trainee",
        empresa: "Flying Tiger Copenhagen",
        logo: "logos/flying-tiger.png", linkedin: "https://www.linkedin.com/company/flyingtigercopenhagen/",
        periodo: "fev 2022 — mai 2022",
        descricao: "Estágio na área de marketing.",
        destaques: [],
      },
    ],

    competencias: [
      { grupo: "Media", itens: ["Estratégia de media", "Planeamento", "Compra de media", "Paid Social", "Programmatic", "TV · Rádio · OOH · Imprensa", "Reporting e otimização"] },
      { grupo: "Dados, Automação & AI", itens: ["Inteligência Artificial (AI)", "Criação de ferramentas com AI", "Automação de processos", "Data-Driven Marketing", "Digital Analytics", "Data Science for Marketing", "Machine Learning"] },
      { grupo: "Pessoais", itens: ["Problem-solving", "Pensamento crítico", "Capacidade de organização", "Proatividade", "Comunicação", "Trabalho em equipa"] },
    ],

    ferramentas: [
      { grupo: "Media & Analytics", itens: ["Meta Ads", "TikTok Ads", "LinkedIn Ads", "Google Ads", "Google Analytics", "Yumi (Marktest)"] },
      { grupo: "AI", itens: ["ChatGPT", "Claude", "Microsoft Copilot", "GitHub"] },
      { grupo: "Produtividade & Colaboração", itens: ["Excel", "Google Sheets", "Word", "PowerPoint", "Google Slides", "Canva", "Asana", "ClickUp", "Microsoft Teams"] },
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

    recomendacao: null, // null = a secção não aparece

    projetos: [], // vazio = a secção não aparece

    formacao: [
      { curso: "Mestrado em Data-Driven Marketing", instituicao: "NOVA IMS · 16 valores", periodo: "2023 — 2025", logo: "logos/nova-ims.png", linkedin: "https://www.linkedin.com/school/nova-ims-information-management-school/" },
      { curso: "Licenciatura em Marketing", instituicao: "IPAM · 16 valores", periodo: "2019 — 2022", logo: "logos/ipam.png", linkedin: "" /* falta o link do IPAM */ },
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
      ferramentas: "Tools",
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
      cursos: "courses",
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
      "I'm a **Media Expert** with 4 years of experience in integrated media strategies across digital and offline channels. I cover the full campaign lifecycle, from strategy and planning to buying, optimisation and analysis, with hands-on experience in **Meta, TikTok, LinkedIn and Google**, as well as TV, radio, OOH and print.",
      "What drives me most is **spotting what isn't working and finding a practical solution**, often before anyone else notices. I like to challenge the way things have always been done: I've improved reporting and planning workflows, built templates and automated repetitive tasks.",
      "I work with **AI (ChatGPT, Claude and Microsoft Copilot)** every day to analyse information, automate tasks and build tools that make the team's work easier, even though I'm not a developer. I'm especially interested in the intersection of media, data and AI.",
    ],

    numeros: [], // vazio = os cartões de números não aparecem

    abordagem: [], // vazio = a secção "Como trabalho" não aparece

    casos: [], // vazio = a secção "Caso em destaque" não aparece

    experiencia: [
      {
        cargo: "Media Expert",
        empresa: "Arena Media Portugal",
        logo: "logos/arena-media.png", linkedin: "https://www.linkedin.com/company/arena-media-portugal/",
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
        logo: "logos/arena-media.png", linkedin: "https://www.linkedin.com/company/arena-media-portugal/",
        periodo: "Jul 2022 — Jun 2023",
        descricao:
          "Supported the planning, implementation and analysis of multi-channel media campaigns, in daily contact with clients, media partners and internal teams.",
        destaques: [],
      },
      {
        cargo: "Marketing Trainee",
        empresa: "Flying Tiger Copenhagen",
        logo: "logos/flying-tiger.png", linkedin: "https://www.linkedin.com/company/flyingtigercopenhagen/",
        periodo: "Feb 2022 — May 2022",
        descricao: "Marketing internship.",
        destaques: [],
      },
    ],

    competencias: [
      { grupo: "Media", itens: ["Media strategy", "Planning", "Media buying", "Paid Social", "Programmatic", "TV · Radio · OOH · Print", "Reporting & optimisation"] },
      { grupo: "Data, Automation & AI", itens: ["Artificial Intelligence (AI)", "AI-assisted tool building", "Process automation", "Data-Driven Marketing", "Digital Analytics", "Data Science for Marketing", "Machine Learning"] },
      { grupo: "Personal", itens: ["Problem-solving", "Critical thinking", "Organisation", "Proactivity", "Communication", "Teamwork"] },
    ],

    ferramentas: [
      { grupo: "Media & Analytics", itens: ["Meta Ads", "TikTok Ads", "LinkedIn Ads", "Google Ads", "Google Analytics", "Yumi (Marktest)"] },
      { grupo: "AI", itens: ["ChatGPT", "Claude", "Microsoft Copilot", "GitHub"] },
      { grupo: "Productivity & Collaboration", itens: ["Excel", "Google Sheets", "Word", "PowerPoint", "Google Slides", "Canva", "Asana", "ClickUp", "Microsoft Teams"] },
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

    recomendacao: null, // null = a secção não aparece

    projetos: [],

    formacao: [
      { curso: "Master's in Data-Driven Marketing", instituicao: "NOVA IMS · Grade 16/20", periodo: "2023 — 2025", logo: "logos/nova-ims.png", linkedin: "https://www.linkedin.com/school/nova-ims-information-management-school/" },
      { curso: "Bachelor's in Marketing", instituicao: "IPAM · Grade 16/20", periodo: "2019 — 2022", logo: "logos/ipam.png", linkedin: "" /* falta o link do IPAM */ },
    ],

    idiomas: ["Portuguese (native)", "English (advanced)"],
  },
};
