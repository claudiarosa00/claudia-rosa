// Gera index.html a partir de template.html + data.js, com o conteúdo (em PT)
// já escrito no HTML. Assim a página mostra tudo mesmo sem JavaScript
// e os motores de busca leem o conteúdo diretamente.
// Uso (na pasta do site):  node tools/build.js
const path = require("path");
const fs = require("fs");
const { chromium } = require("playwright");

const raiz = path.join(__dirname, "..");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const erros = [];
  page.on("pageerror", (e) => erros.push(e.message));
  await page.goto("file://" + path.join(raiz, "template.html") + "?lang=pt", { waitUntil: "load" });
  if (erros.length) throw new Error("Erros na página: " + erros.join("; "));

  const html = await page.evaluate(() => {
    const root = document.documentElement;
    root.classList.remove("js");
    if (!root.classList.length) root.removeAttribute("class");
    root.removeAttribute("data-theme");
    document.querySelectorAll(".visible").forEach((el) => el.classList.remove("visible"));
    document.querySelectorAll("[aria-pressed]").forEach((el) => el.removeAttribute("aria-pressed"));
    return "<!doctype html>\n" + root.outerHTML;
  });
  await browser.close();

  fs.writeFileSync(path.join(raiz, "index.html"), html);
  console.log("index.html gerado (" + Math.round(html.length / 1024) + " KB)");
})();
