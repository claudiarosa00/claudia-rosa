(function () {
  const S = window.SITE;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const icons = {
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"/></svg>',
    cv: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14"/></svg>',
  };

  function botoes() {
    const L = S.links, out = [];
    if (L.linkedin) out.push(`<a class="btn primary" href="${esc(L.linkedin)}" target="_blank" rel="noopener">${icons.linkedin}LinkedIn</a>`);
    if (L.email) out.push(`<a class="btn" href="mailto:${esc(L.email)}">${icons.email}Email</a>`);
    if (L.github) out.push(`<a class="btn" href="${esc(L.github)}" target="_blank" rel="noopener">${icons.github}GitHub</a>`);
    if (L.cv) out.push(`<a class="btn" href="${esc(L.cv)}" download>${icons.cv}Descarregar CV</a>`);
    return out.join("");
  }

  $("logo").textContent = S.iniciais || S.nome;
  $("nome").textContent = S.nome;
  $("cargo").textContent = S.cargo + (S.localizacao ? " · " + S.localizacao : "");
  $("frase").textContent = S.frase;
  if (!S.disponivel) $("badge").remove();
  $("ctas").innerHTML = botoes();
  $("ctas2").innerHTML = botoes();
  $("avatar").innerHTML = S.foto ? `<img src="${esc(S.foto)}" alt="${esc(S.nome)}">` : esc(S.iniciais);

  $("sobre-texto").innerHTML = S.sobre.map((p) => `<p>${esc(p)}</p>`).join("");
  $("numeros").innerHTML = S.numeros.map((n) => `<div class="numero"><b>${esc(n.valor)}</b><span>${esc(n.legenda)}</span></div>`).join("");

  $("timeline").innerHTML = S.experiencia.map((e) => `
    <li class="reveal">
      <div class="top"><h3>${esc(e.cargo)} · <span class="empresa">${esc(e.empresa)}</span></h3><span class="periodo">${esc(e.periodo)}</span></div>
      ${e.descricao ? `<p>${esc(e.descricao)}</p>` : ""}
      ${e.destaques && e.destaques.length ? `<ul>${e.destaques.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>` : ""}
    </li>`).join("");

  $("skills").innerHTML = S.competencias.map((g) => `
    <div class="skill-group reveal"><h3>${esc(g.grupo)}</h3>
      <div class="chips">${g.itens.map((i) => `<span class="chip">${esc(i)}</span>`).join("")}</div>
    </div>`).join("");

  const C = S.certificacoes || [];
  $("certs").innerHTML = C.map((c) => `<div class="cert reveal"><span class="cert-ico">✓</span><div><b>${esc(c.nome)}</b><span>${esc(c.emissor)} · ${esc(c.data)}</span></div></div>`).join("");
  if (!C.length) $("certificacoes").remove();

  const R = S.recomendacao;
  if (R && R.texto) {
    $("quote").innerHTML = `<blockquote>“${esc(R.texto)}”</blockquote><figcaption><b>${esc(R.autor)}</b><span>${esc(R.cargo)}</span></figcaption>`;
  } else $("recomendacao").remove();

  $("cards").innerHTML = S.projetos.map((p) => {
    const tag = p.link ? "a" : "div";
    const attrs = p.link ? ` href="${esc(p.link)}" target="_blank" rel="noopener"` : "";
    return `<${tag} class="card reveal"${attrs}>
      <h3>${esc(p.titulo)}</h3><p>${esc(p.descricao)}</p>
      <div class="chips">${(p.tags || []).map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
      ${p.link ? '<span class="arrow">Ver projeto →</span>' : ""}
    </${tag}>`;
  }).join("");
  if (!S.projetos.length) $("projetos").remove();

  $("formacao-lista").innerHTML = S.formacao.map((f) => `<li class="reveal"><b>${esc(f.curso)}</b><span>${esc(f.instituicao)} · ${esc(f.periodo)}</span></li>`).join("");
  $("idiomas").innerHTML = S.idiomas.map((i) => `<li>${esc(i)}</li>`).join("");

  $("footer").textContent = `© ${new Date().getFullYear()} ${S.nome}`;
  
  // Tema claro/escuro
  const root = document.documentElement;
  try { const t = localStorage.getItem("tema"); if (t) root.dataset.theme = t; } catch (e) {}
  $("theme").addEventListener("click", () => {
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("tema", root.dataset.theme); } catch (e) {}
  });

  // Animação ao fazer scroll
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();
