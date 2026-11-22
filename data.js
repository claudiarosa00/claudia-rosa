// =====================================================================
//  EDITA APENAS ESTE FICHEIRO para personalizar o teu site.
//  Tudo o que aparece na página vem daqui.
// =====================================================================

window.SITE = {
  nome: "O Teu Nome",
  iniciais: "TN",
  cargo: "Cargo / Título Profissional",
  localizacao: "Lisboa, Portugal",
  disponivel: true, // mostra o selo "Disponível para novas oportunidades"
  foto: "", // ex: "foto.jpg" (coloca o ficheiro na mesma pasta). Vazio = mostra as iniciais

  frase:
    "Uma frase curta e marcante que resume o que fazes e o valor que trazes.",

  sobre: [
    "Escreve aqui um parágrafo sobre ti: a tua área, os anos de experiência e o que te motiva profissionalmente.",
    "Um segundo parágrafo pode falar sobre os teus objetivos, o tipo de projetos ou equipas com que gostas de trabalhar, e o que te distingue.",
  ],

  numeros: [
    { valor: "5+", legenda: "anos de experiência" },
    { valor: "20+", legenda: "projetos concluídos" },
    { valor: "3", legenda: "idiomas" },
  ],

  links: {
    email: "o.teu.email@exemplo.com",
    linkedin: "https://www.linkedin.com/in/o-teu-perfil",
    github: "", // vazio = não aparece
    cv: "", // ex: "cv.pdf" (coloca o PDF na mesma pasta)
  },

  experiencia: [
    {
      cargo: "Cargo Atual",
      empresa: "Empresa A",
      periodo: "2023 — Presente",
      descricao:
        "Breve descrição das tuas responsabilidades e principais resultados.",
      destaques: [
        "Resultado concreto e mensurável (ex.: aumentei X em 30%)",
        "Outro feito relevante",
      ],
    },
    {
      cargo: "Cargo Anterior",
      empresa: "Empresa B",
      periodo: "2020 — 2023",
      descricao: "O que fazias e o impacto que tiveste.",
      destaques: ["Feito relevante", "Outro feito relevante"],
    },
  ],

  competencias: [
    { grupo: "Técnicas", itens: ["Competência 1", "Competência 2", "Competência 3", "Competência 4"] },
    { grupo: "Ferramentas", itens: ["Ferramenta 1", "Ferramenta 2", "Ferramenta 3"] },
    { grupo: "Pessoais", itens: ["Comunicação", "Liderança", "Resolução de problemas"] },
  ],

  projetos: [
    {
      titulo: "Projeto em destaque",
      descricao: "O problema, o que fizeste e o resultado.",
      tags: ["Tag 1", "Tag 2"],
      link: "",
    },
    {
      titulo: "Outro projeto",
      descricao: "Descrição curta do projeto e do teu papel.",
      tags: ["Tag 1"],
      link: "",
    },
  ],

  formacao: [
    { curso: "Mestrado em ...", instituicao: "Universidade ...", periodo: "2018 — 2020" },
    { curso: "Licenciatura em ...", instituicao: "Universidade ...", periodo: "2015 — 2018" },
  ],

  idiomas: ["Português (nativo)", "Inglês (fluente)", "Espanhol (intermédio)"],
};
