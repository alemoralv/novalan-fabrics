# Defects found by visual QA on the built pages

Found by rendering the pages in headless Chrome at 1440×900 and 390×844 (full-page capture, after a
paced scroll so lazy images and the reveal observer both settle) and reading the resulting
screenshots. These are in addition to whatever the review agents report.

## 1. Font preload throws a CORS error on `file://` — fix on all pages

```html
<link rel="preload" as="font" type="font/woff2" crossorigin
      href="assets/fonts/bodoni-moda-400-normal-…woff2">
```

`crossorigin` puts the request in CORS mode. Over `file://` the origin is `null`, so Chrome blocks
it and logs:

> Access to font at 'file:///…woff2' from origin 'null' has been blocked by CORS policy

The fonts still render (they arrive through the `@import` chain), so this is pure console noise —
but the site is meant to be opened straight off disk, and a red console error on every page is not
acceptable in a delivered build.

**Fix:** delete the two preload lines from every page. In their place, link the font stylesheet
directly, immediately before the token stylesheet:

```html
<link rel="stylesheet" href="assets/fonts/fonts.css">
<link rel="stylesheet" href="assets/css/novalan-tokens.css">
<link rel="stylesheet" href="assets/css/site.css">
```

That shortens the discovery chain from `novalan-tokens.css → tokens/fonts.css → ../fonts/fonts.css`
to a single hop, which is what the preload was trying to buy in the first place, and it works
identically from disk and from a server.

## 2. Letterboxed photograph in the "Integración vertical" figure

`photo/inicio_foto_2` (folded fabrics) is 800 × 254 — a 3.15 : 1 sliver. It is placed in a figure
whose ratio is much squarer, and it renders with a black bar filling the bottom third of the frame.

The image is not filling its box. Either the figure is using `object-fit: contain`, or the `<img>`
is `height: auto` inside a fixed-ratio box.

**Fix:** `.nv-figure__img` must always be `width:100%; height:100%; object-fit:cover;`. Then pick a
figure ratio that suits the source: the very wide photos (`inicio_foto_2` 800×254,
`inicio_foto_1` / `procesos_foto_1` / `quienessomos_foto_6` all 800×320) belong in a `--21x9` or
`--16x10` frame, never in `--4x5` or `--1x1`, because cover-cropping a 3:1 original into a portrait
frame throws away most of the picture.

Check every figure on every page against the real pixel dimensions listed in `CONTENT.md` §6 and in
the file itself, and pair each ratio to its source. Same rule for the 416 × 300 photos (4:3) — a
`--4x5` portrait frame crops them hard.

## 3. Over-tall ink CTA band

The closing contact band on the home page carries roughly 200 px of empty ink below the "Ver mapa"
button before it ends, then a thin paper gap, then the footer. It reads as a mistake rather than as
composure.

**Fix:** the band's vertical padding should be symmetric — the space below the last element should
match the space above the first. And the band should sit flush against the footer; the paper strip
between the two ink blocks is an accident of section margin, not a decision. Collapse it.

## 4. Unbalanced two-column block

In "Integración vertical" the left prose column ends well above the right image column, leaving a
large empty quadrant at the bottom left. With `align-items: start` on a two-column grid this is
inevitable whenever the columns differ in height.

**Fix:** either let the images run as a single tall stack beside prose that is allowed to fill
(shift the ratio so the columns finish closer together), or move one of the two images below the
prose so the block closes evenly. Do not solve it by stretching the prose.

## 5. Key-figures tile wraps badly

`100,000+ m²` breaks across two lines in the desktop strip, putting the unit alone on line two,
while `1847`, `1977`, `1983` and `170+` all sit on one line. The tile with the longest value should
not be the one that looks broken.

**Fix:** let that tile span wider, reduce the display size a step for values over 6 characters, or
set the number and unit as a non-wrapping pair. The unit stays mono and stays attached to its number.

## Verified NOT broken

Two things looked like defects in early captures and are not — do not "fix" them:

- **The reveal-on-scroll observer works.** 11 of 11 `.nv-reveal` elements reach `.is-visible` under
  a paced scroll. An early capture showed them blank only because the harness scrolled with
  `requestAnimationFrame` faster than the observer could report.
- **No broken images and no horizontal overflow** at either 1440 px or 390 px. An early capture
  reported eight broken images; that was the screenshot firing before lazy images finished
  decoding, not a path problem.
