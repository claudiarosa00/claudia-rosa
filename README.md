# Site pessoal

Site estático (HTML + CSS + JS), sem dependências nem build.

## Personalizar
- Edita **`data.js`**: nome, cargo, experiência, competências, projetos, etc.
- Em **`index.html`**, atualiza `<title>` e as tags `og:` (pré-visualização no LinkedIn).
- Opcional: `foto.jpg`, `cv.pdf` e `og.png` (1200×630, imagem da pré-visualização) na mesma pasta.

## Publicar na Vercel
1. Cria um repositório no GitHub e envia esta pasta.
2. Em vercel.com → **Add New → Project** → importa o repositório → **Deploy** (sem configuração).
3. Recebes um link tipo `o-teu-nome.vercel.app`. Partilha-o no LinkedIn.

Alternativa sem GitHub: `npx vercel` dentro desta pasta.

## Idiomas e CV
- Os textos em português e inglês estão em `data.js` (`pt` e `en`). O link `?lang=en` abre o site em inglês.
- Para regenerar os CVs em PDF depois de mudar `data.js`: `node tools/gerar-cv.js`

## Depois de mudar data.js ou template.html
1. `node tools/build.js`: gera `index.html` com o conteúdo já escrito (não editar `index.html` à mão)
2. `node tools/gerar-cv.js`: gera os CVs em PDF
