(function () {
  const C = window.SITE.comum;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const rich = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  const tel = (t) => "tel:" + t.replace(/\s/g, "");

  const icons = {
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"/></svg>',
    cv: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14"/></svg>',
  };

  const show = (id, ok) => { $(id).hidden = !ok; };

  function render(lang) {
    const S = window.SITE[lang];
    const T = S.ui, L = C.links;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-t]").forEach((el) => { el.textContent = T[el.dataset.t] || ""; });
    document.querySelectorAll("[data-nav]").forEach((el) => { el.textContent = T.nav[el.dataset.nav]; });
    document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));
    $("theme").setAttribute("aria-label", T.tema);

    // Botões
    const btn = [];
    if (L.linkedin) btn.push(`<a class="btn primary" href="${esc(L.linkedin)}" target="_blank" rel="noopener">${icons.linkedin}LinkedIn</a>`);
    if (S.cv) btn.push(`<a class="btn" href="${esc(S.cv)}" target="_blank" rel="noopener">${icons.cv}${esc(T.cv)}</a>`);
    if (L.email) btn.push(`<a class="btn" href="mailto:${esc(L.email)}">${icons.email}${esc(T.email)}</a>`);
    if (L.telefone) btn.push(`<a class="btn" href="${esc(tel(L.telefone))}">${icons.phone}${esc(T.telefone)}</a>`);
    if (L.github) btn.push(`<a class="btn" href="${esc(L.github)}" target="_blank" rel="noopener">${icons.github}GitHub</a>`);
    $("ctas").innerHTML = btn.slice(0, 2).join(""); // topo: só LinkedIn + CV
    $("ctas2").innerHTML = btn.join("");

    const info = [];
    if (L.email) info.push(`<a href="mailto:${esc(L.email)}">${icons.email}${esc(L.email)}</a>`);
    if (L.telefone) info.push(`<a href="${esc(tel(L.telefone))}">${icons.phone}${esc(L.telefone)}</a>`);
    $("contact-info").innerHTML = info.join("");

    // Topo
    $("logo").textContent = C.iniciais || C.nome;
    $("nome").textContent = C.nome;
    $("cargo").textContent = S.cargo + (S.localizacao ? " · " + S.localizacao : "");
    $("frase").textContent = S.frase;
    $("badge").hidden = !C.disponivel;
    $("avatar").innerHTML = C.foto ? `<img src="${esc(C.foto)}" alt="${esc(C.nome)}">` : esc(C.iniciais);

    // Sobre
    $("sobre-texto").innerHTML = S.sobre.map((p) => `<p>${rich(p)}</p>`).join("");
    $("numeros").hidden = !S.numeros.length;
    document.querySelector(".sobre-grid").classList.toggle("so-texto", !S.numeros.length);
    $("numeros").innerHTML = S.numeros.map((n) => `<div class="numero"><b>${esc(n.valor)}</b><span>${esc(n.legenda)}</span></div>`).join("");

    // Como trabalho
    const A = S.abordagem || [];
    $("abordagem-lista").innerHTML = A.map((a) => `<div class="abord reveal"><span class="abord-ico">${esc(a.icone)}</span><h3>${esc(a.titulo)}</h3><p>${esc(a.texto)}</p></div>`).join("");
    show("abordagem", A.length);

    // Casos
    const K = S.casos || [];
    $("casos").innerHTML = K.map((k) => `
      <article class="caso reveal">
        <header class="caso-top">
          <h3>${esc(k.titulo)}</h3>
          <p>${esc(k.resumo)}</p>
        </header>
        <div class="caso-metricas">${(k.metricas || []).map((m) => `<div><b>${esc(m.valor)}</b><span>${esc(m.legenda)}</span></div>`).join("")}</div>
        <div class="caso-passos">
          <div><span class="passo">01</span><h4>${esc(T.problema)}</h4><p>${esc(k.problema)}</p></div>
          <div><span class="passo">02</span><h4>${esc(T.solucao)}</h4><p>${esc(k.solucao)}</p></div>
          <div><span class="passo">03</span><h4>${esc(T.resultado)}</h4><p>${esc(k.resultado)}</p></div>
        </div>
        <div class="chips">${(k.tags || []).map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
      </article>`).join("");
    show("caso", K.length);
    document.querySelector('[data-nav="caso"]').hidden = !K.length;

    // Experiência
    $("timeline").innerHTML = S.experiencia.map((e) => `
      <li class="reveal">
        <div class="top"><h3>${esc(e.cargo)} · <span class="empresa">${esc(e.empresa)}</span></h3><span class="periodo">${esc(e.periodo)}</span></div>
        ${e.descricao ? `<p>${esc(e.descricao)}</p>` : ""}
        ${e.destaques && e.destaques.length ? `<ul>${e.destaques.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>` : ""}
      </li>`).join("");

    // Competências
    $("skills").innerHTML = S.competencias.map((g) => `
      <div class="skill-group reveal"><h3>${esc(g.grupo)}</h3>
        <div class="chips">${g.itens.map((i) => `<span class="chip">${esc(i)}</span>`).join("")}</div>
      </div>`).join("");

    // Ferramentas
    const F = S.ferramentas || [];
    $("ferramentas-lista").innerHTML = F.map((g) => `
      <div class="skill-group reveal"><h3>${esc(g.grupo)}</h3>
        <div class="chips">${g.itens.map((i) => `<span class="chip tool">${esc(i)}</span>`).join("")}</div>
      </div>`).join("");
    show("ferramentas", F.length);

    // Certificações
    const CE = S.certificacoes || [];
    const certLink = (c) => c.pdf || c.link;
    const porEmissor = {};
    CE.forEach((c) => (porEmissor[c.emissor] = porEmissor[c.emissor] || []).push(c));
    $("certs").innerHTML = Object.entries(porEmissor).map(([emissor, cs]) => {
      if (cs.length === 1) {
        const c = cs[0], href = certLink(c), tag = href ? "a" : "div";
        const attrs = href ? ` href="${esc(href)}" target="_blank" rel="noopener"` : "";
        return `<${tag} class="cert reveal"${attrs}><span class="cert-ico">✓</span><div><b>${esc(c.nome)}</b><span>${esc(c.emissor)} · ${esc(c.data)}</span>${href ? `<em>${esc(T.verCert)} →</em>` : ""}</div></${tag}>`;
      }
      const anos = [...new Set(cs.map((c) => c.data))].sort();
      return `<div class="cert cert-grupo reveal"><span class="cert-ico">✓</span><div>
        <b>${esc(emissor)}</b><span>${cs.length} ${esc(T.cursos)} · ${anos[0]}${anos.length > 1 ? "–" + anos[anos.length - 1] : ""}</span>
        <ul>${cs.map((c) => { const href = certLink(c); return `<li>${href ? `<a href="${esc(href)}" target="_blank" rel="noopener">${esc(c.nome)}</a>` : esc(c.nome)} <small>${esc(c.data)}</small></li>`; }).join("")}</ul>
      </div></div>`;
    }).join("");
    show("certificacoes", CE.length);

    // Recomendação
    const R = S.recomendacao;
    if (R && R.texto) {
      $("quote").innerHTML = `<blockquote>“${esc(R.texto)}”</blockquote><figcaption><b>${esc(R.autor)}</b><span>${esc(R.cargo)}${T.traduzido ? " · " + esc(T.traduzido) : ""}</span></figcaption>`;
    }
    show("recomendacao", R && R.texto);

    // Projetos
    const P = S.projetos || [];
    $("cards").innerHTML = P.map((p) => {
      const tag = p.link ? "a" : "div";
      const attrs = p.link ? ` href="${esc(p.link)}" target="_blank" rel="noopener"` : "";
      return `<${tag} class="card reveal"${attrs}><h3>${esc(p.titulo)}</h3><p>${esc(p.descricao)}</p>
        <div class="chips">${(p.tags || []).map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
        ${p.link ? `<span class="arrow">${esc(T.verProjeto)}</span>` : ""}</${tag}>`;
    }).join("");
    show("projetos", P.length);

    // Formação
    $("formacao-lista").innerHTML = S.formacao.map((f) => `<li class="reveal"><b>${esc(f.curso)}</b><span>${esc(f.instituicao)} · ${esc(f.periodo)}</span></li>`).join("");
    $("idiomas").innerHTML = S.idiomas.map((i) => `<li>${esc(i)}</li>`).join("");

    $("footer").textContent = `© ${new Date().getFullYear()} ${C.nome}`;
    document.title = `${C.nome} — Media Expert`;

    observar();
  }

  // Animação ao fazer scroll
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      }), { threshold: 0.12 })
    : null;
  function observar() {
    document.querySelectorAll(".reveal:not(.visible)").forEach((el) => (io ? io.observe(el) : el.classList.add("visible")));
  }

  // Idioma: ?lang=en no link > escolha guardada > idioma do browser > PT
  function idiomaInicial() {
    const q = new URLSearchParams(location.search).get("lang");
    if (q === "pt" || q === "en") return q;
    try { const s = localStorage.getItem("idioma"); if (s === "pt" || s === "en") return s; } catch (e) {}
    return "pt";
  }
  document.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => {
    const lang = b.dataset.lang;
    try { localStorage.setItem("idioma", lang); } catch (e) {}
    const url = new URL(location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);
    render(lang);
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
  }));
  render(idiomaInicial());

  // Tema claro/escuro
  const root = document.documentElement;
  try { const t = localStorage.getItem("tema"); if (t) root.dataset.theme = t; } catch (e) {}
  $("theme").addEventListener("click", () => {
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("tema", root.dataset.theme); } catch (e) {}
  });
})();
