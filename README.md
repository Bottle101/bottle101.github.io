# Botao He — personal research site

Dependency-free static portfolio for [botao.me](https://botao.me).

The deployed site is plain HTML, CSS, and a small vanilla JavaScript helper:

- `index.html` contains the page structure and research record.
- `assets/site/styles.css` reproduces the original Skeleton-based visual style.
- `assets/site/script.js` reproduces the original docking navbar without jQuery.
- `assets/CV/Botao_He_CV.tex` is the editable source for the downloadable CV.

To preview locally:

```sh
python3 -m http.server 8123
```

To rebuild the CV (with a local TeX installation):

```sh
xelatex -output-directory=assets/CV assets/CV/Botao_He_CV.tex
xelatex -output-directory=assets/CV assets/CV/Botao_He_CV.tex
```

GitHub Pages serves the repository directly. The `.nojekyll` marker ensures no
Jekyll build step is applied.

Before publishing, include all new and deleted files—not only previously tracked
files:

```sh
git add -A
git status --short
git commit -m "Rebuild research portfolio"
git push
```

The uploaded manuscript source and local CV source folder are intentionally ignored;
the public site contains only a concept-level description of the ongoing work.
After the custom domain deploys, enable **Enforce HTTPS** in the repository’s Pages
settings.
