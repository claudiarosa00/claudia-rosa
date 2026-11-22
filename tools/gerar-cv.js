// Gera os CVs em PDF (PT e EN) a partir de data.js.
// Uso (na pasta do site):  node tools/gerar-cv.js
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { chromium } = require("playwright");

const raiz = path.join(__dirname, "..");
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(raiz, "data.js"), "utf8"), ctx);
const SITE = ctx.window.SITE;
const C = SITE.comum;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const img = (p) => "data:image/png;base64," + fs.readFileSync(path.join(raiz, p)).toString("base64");
const foto = "data:image/jpeg;base64," + fs.readFileSync(path.join(raiz, C.foto)).toString("base64");

const rotulos = {
  pt: { perfil: "Perfil", experiencia: "Experiência profissional", formacao: "Formação", contacto: "Contacto", competencias: "Competências", ferramentas: "Ferramentas", idiomas: "Idiomas", certificacoes: "Certificações", caso: "Caso em destaque", site: "Portfólio" },
  en: { perfil: "Profile", experiencia: "Professional experience", formacao: "Education", contacto: "Contact", competencias: "Skills", ferramentas: "Tools", idiomas: "Languages", certificacoes: "Certifications", caso: "Featured case", site: "Portfolio" },
};

// Certificações do mesmo emissor (ex.: DataCamp) ficam agrupadas numa linha no CV
function certsCV(lista, cursos, lang) {
  const link = (c, txt) => (c.pdf || c.link) ? `<a href="${esc(c.pdf ? "https://claudia-rosa.vercel.app/" + c.pdf : c.link)}" style="color:inherit">${txt}</a>` : txt;
  const porEmissor = {};
  lista.forEach((c) => (porEmissor[c.emissor] = porEmissor[c.emissor] || []).push(c));
  return Object.entries(porEmissor).map(([emissor, cs]) => {
    if (cs.length === 1) { const c = cs[0]; return `<li>${link(c, esc(c.nome) + ((c.pdf || c.link) ? " ↗" : ""))}<span>${esc(emissor)} · ${esc(c.data)}</span></li>`; }
    const anos = [...new Set(cs.map((c) => c.data))].sort();
    const site = "https://claudia-rosa.vercel.app/" + (lang === "en" ? "?lang=en" : "") + "#certificacoes";
    return `<li><a href="${site}" style="color:inherit">${esc(emissor)}: ${cs.length} ${esc(cursos || "")} ↗</a><span>${anos[0]}${anos.length > 1 ? "–" + anos[anos.length - 1] : ""}</span></li>`;
  }).join("");
}

function html(lang) {
  const S0 = SITE[lang], X = S0.cvExtra || {};
  const S = { ...S0, competencias: X.competencias || S0.competencias, ferramentas: X.ferramentas || S0.ferramentas,
    experiencia: S0.experiencia.map((e, i) => ({ ...e, ...((X.experiencia || [])[i] || {}) })) }, R = rotulos[lang], L = C.links;
  const caso = (S.casos || [])[0];
  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,600&display=swap" rel="stylesheet">
<style>
@page { size: A4; margin: 0; }
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: Inter, sans-serif; color: #16181d; font-size: 9.4pt; line-height: 1.5; width: 210mm; min-height: 297mm; display: grid; grid-template-columns: 66mm 1fr; }
aside { background: #eef1fb; padding: 12mm 8mm 10mm 10mm; display: flex; flex-direction: column; gap: 8mm; }
main { padding: 12mm 12mm 10mm 10mm; display: flex; flex-direction: column; gap: 8mm; }
.foto { width: 32mm; height: 32mm; border-radius: 50%; object-fit: cover; display: block; margin: 0 auto 1mm; }
h1 { font-family: Fraunces, serif; font-weight: 600; font-size: 25pt; line-height: 1.05; letter-spacing: -.3px; }
.cargo { color: #2f5bea; font-weight: 600; font-size: 11pt; margin-top: 1.5mm; }
h2 { font-size: 8pt; text-transform: uppercase; letter-spacing: .14em; color: #2f5bea; font-weight: 700; margin-bottom: 3.2mm; padding-bottom: 1.6mm; border-bottom: 1px solid #d7ddf2; }
aside h2 { border-color: #cfd7f3; }
.contactos div { margin-bottom: 1.6mm; word-break: break-word; }
.contactos b { display: block; font-size: 7.5pt; color: #5d6370; font-weight: 500; }
.contactos a { color: inherit; text-decoration: none; }
.chips { display: flex; flex-wrap: wrap; gap: 1.3mm; }
.chip { background: #fff; border: 1px solid #d7ddf2; border-radius: 99px; padding: .5mm 2.2mm; font-size: 7.8pt; }
.grupo { margin-bottom: 3.2mm; } .grupo h3 { font-size: 8pt; font-weight: 600; margin-bottom: .6mm; color: #2f5bea; } .grupo p { color: #353a45; font-size: 8.3pt; }
ul.simples { list-style: none; } ul.simples li { margin-bottom: 1.2mm; }
ul.simples span { display: block; color: #5d6370; font-size: 8pt; }
.perfil { color: #353a45; }
.job { margin-bottom: 4mm; } .job:last-child { margin-bottom: 0; }
.job .top { display: flex; justify-content: space-between; gap: 4mm; align-items: baseline; }
.job h3 { font-size: 10.3pt; font-weight: 600; }
.job .emp { color: #2f5bea; font-weight: 600; text-decoration: none; }
.job .emp { white-space: nowrap; }
.job h3 { padding-left: 7.2mm; text-indent: -7.2mm; }
.job .per { color: #5d6370; font-size: 8.3pt; white-space: nowrap; }
.job p { color: #353a45; margin-top: .8mm; }
.job ul { margin: 1.2mm 0 0 4mm; color: #353a45; } .job li { margin-bottom: .6mm; }
.caso { background: #f6f7fb; border-left: 3px solid #2f5bea; border-radius: 0 3mm 3mm 0; padding: 3mm 4mm; }
.caso h3 { font-size: 10pt; font-weight: 600; margin-bottom: 1mm; }
.caso p { color: #353a45; margin-bottom: .8mm; } .caso b { color: #16181d; }
.edu { display: flex; justify-content: space-between; gap: 4mm; margin-bottom: 1.8mm; }
.edu span { color: #5d6370; }
.lg { width: 5.2mm; height: 5.2mm; object-fit: contain; border-radius: 1.2mm; border: 1px solid #e4e4ec; vertical-align: -1.4mm; margin-right: 2mm; background: #fff; }
.edu-l { display: flex; align-items: center; } .edu-l .lg { width: 7mm; height: 7mm; margin-right: 2.5mm; }
.certs li { margin-bottom: 1.6mm; } .certs a { text-decoration: none; border-bottom: 1px solid #c9d3f5; } .edu .per { font-size: 8.3pt; white-space: nowrap; }
</style></head><body>
<aside>
  <img class="foto" src="${foto}" alt="">
  <section class="contactos"><h2>${R.contacto}</h2>
    ${L.email ? `<div><b>Email</b><a href="mailto:${esc(L.email)}">${esc(L.email)}</a></div>` : ""}
    ${L.telefone ? `<div><b>${lang === "pt" ? "Telefone" : "Phone"}</b>${esc(L.telefone)}</div>` : ""}
    <div><b>${lang === "pt" ? "Localização" : "Location"}</b>${esc(S.localizacao)}</div>
    <div><b>LinkedIn</b><a href="${esc(L.linkedin)}">linkedin.com/in/cláudia-rosa</a></div>
    <div><b>${R.site}</b><a href="https://claudia-rosa.vercel.app${lang === "en" ? "/?lang=en" : ""}">claudia-rosa.vercel.app</a></div>
  </section>
  <section><h2>${R.competencias}</h2>
    ${S.competencias.map((g) => `<div class="grupo"><h3>${esc(g.grupo)}</h3><p>${g.itens.map(esc).join(" · ")}</p></div>`).join("")}
  </section>
  ${(S.ferramentas || []).length ? `<section><h2>${R.ferramentas}</h2>
    ${S.ferramentas.map((g) => `<div class="grupo"><h3>${esc(g.grupo)}</h3><p>${g.itens.map(esc).join(" · ")}</p></div>`).join("")}
  </section>` : ""}
</aside>
<main>
  <header><h1>${esc(C.nome)}</h1><p class="cargo">${esc(S.cargo)}</p></header>
  <section><h2>${R.perfil}</h2><p class="perfil">${esc(S.resumoCV)}</p></section>
  <section><h2>${R.experiencia}</h2>
    ${S.experiencia.map((e) => `<div class="job"><div class="top"><h3>${e.logo ? `<img class="lg" src="${img(e.logo)}">` : ""}${esc(e.cargo)} · ${e.linkedin ? `<a class="emp" href="${esc(e.linkedin)}">${esc(e.empresa)}</a>` : `<span class="emp">${esc(e.empresa)}</span>`}</h3><span class="per">${esc(e.periodo)}</span></div>
      <p>${esc(e.descricao)}</p>${e.destaques.length ? `<ul>${e.destaques.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>` : ""}</div>`).join("")}
  </section>
  ${caso ? `<section><h2>${R.caso}</h2><div class="caso"><h3>${esc(caso.titulo)}</h3>
    <p><b>${esc(S.ui.problema)}:</b> ${esc(caso.problema)}</p>
    <p><b>${esc(S.ui.solucao)}:</b> ${esc(caso.solucao)}</p>
    <p><b>${esc(S.ui.resultado)}:</b> ${esc(caso.resultado)}</p></div></section>` : ""}
  <section><h2>${R.formacao}</h2>
    ${S.formacao.map((f) => `<div class="edu"><div class="edu-l">${f.logo ? `<img class="lg" src="${img(f.logo)}">` : ""}<div><b>${esc(f.curso)}</b><br><span>${f.linkedin ? `<a href="${esc(f.linkedin)}" style="color:inherit;text-decoration:none">${esc(f.instituicao)}</a>` : esc(f.instituicao)}</span></div></div><span class="per">${esc(f.periodo)}</span></div>`).join("")}
  </section>
  <section><h2>${R.certificacoes}</h2><ul class="simples certs">
    ${certsCV(S.certificacoes || [], X.cursos, lang)}
  </ul></section>
  <section><h2>${R.idiomas}</h2><p>${S.idiomas.map(esc).join(" · ")}</p></section>
</main></body></html>`;
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const lang of ["pt", "en"]) {
    await page.setContent(html(lang), { waitUntil: "networkidle" });
    const altura = await page.evaluate(() => document.body.scrollHeight);
    const ficheiro = path.join(raiz, SITE[lang].cv);
    await page.pdf({ path: ficheiro, format: "A4", printBackground: true });
    console.log(lang, "->", path.basename(ficheiro), altura > 1123 ? "(AVISO: passa de 1 página)" : "(1 página)");
  }
  await browser.close();
})();
