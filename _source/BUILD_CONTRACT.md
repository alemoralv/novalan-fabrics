# Novalan site — build contract

Root of the deliverable: `C:\Users\alexm\novalan_webpage\site\`
Content source of truth: `C:\Users\alexm\novalan_webpage\_source\CONTENT.md` — **read it fully before writing.**
Design system: `C:\Users\alexm\novalan_webpage\Novalan Design System (1)\` — read `readme.md` and every
file in `tokens/`. Read `ui_kits/website/Home.jsx` + `Chrome.jsx` for the house's compositional voice.

---

## 1. Stack rules (non-negotiable)

- **Static HTML + CSS + one vanilla JS file.** No build step, no framework, no bundler, no npm.
- **Zero network dependencies.** No CDN, no Google Fonts `@import`, no remote images, no analytics.
  Fonts are already self-hosted at `assets/fonts/`. The only outbound links are `mailto:`, `tel:`,
  the Google Maps place URL, and the YouTube embed *after the user clicks the play facade*.
- Every page must render correctly when opened straight off disk (`file://`), so **all paths are
  relative**, never absolute, never leading `/`.
- Icons: inline `<svg>` in the markup, `stroke-width: 1.25`, `stroke="currentColor"`, `fill="none"`,
  24×24 viewBox, sized 14/16/18/20 px. Lucide geometry is the reference. **No icon fonts, no emoji.**
- HTML must validate: one `<h1>` per page, no skipped heading levels, `lang` + `dir` on `<html>`.

## 2. File layout

```
site/
  index.html          nosotros.html   productos.html   procesos.html   contacto.html      (es-MX)
  en/index.html       en/about.html   en/products.html en/processes.html en/contact.html  (en)
  assets/
    css/novalan-tokens.css     design-system entry, @imports tokens/*  — DO NOT EDIT
    css/tokens/*.css           design-system tokens — DO NOT EDIT (fonts.css already repointed)
    css/site.css               ← the ONLY stylesheet you author
    js/site.js                 ← the ONLY script you author
    fonts/…                    self-hosted woff2 + fonts.css — DO NOT EDIT
    brand/novalan-wordmark.png            black wordmark, transparent, 600×197
    brand/novalan-wordmark-light.png      paper wordmark, transparent
    brand/novalan-lockup-wordmark.png     wordmark alone, cropped
    brand/novalan-lockup-tagline.png      "Weaving beauty since 1983" script line
    img/fabric/<slug>-1600.webp|jpg       1600×842   13 fabric families + hero-1900, hero-alt-1900
    img/fabric/<slug>-800.webp|jpg        800×421
    img/photo/<name>.webp|jpg             ≤1200 px wide mill photography
```

**Path prefix — get this right or the site breaks:**
| From | assets | sibling page | other language |
| --- | --- | --- | --- |
| root ES page | `assets/…` | `nosotros.html` | `en/about.html` |
| `en/` page | `../assets/…` | `about.html` | `../nosotros.html` |

## 3. Head boilerplate (every page)

```html
<!DOCTYPE html>
<html lang="es-MX">   <!-- en/ pages: lang="en" -->
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>… · Novalan, S.A. de C.V.</title>
<meta name="description" content="…">           <!-- ≤155 chars, drawn from CONTENT.md only -->
<link rel="alternate" hreflang="es-MX" href="…">
<link rel="alternate" hreflang="en"    href="…">
<link rel="icon" href="assets/img/favicon.svg" type="image/svg+xml">
<link rel="preload" as="font" type="font/woff2" crossorigin
      href="assets/fonts/bodoni-moda-400-normal-aFTQ7PxzY382XsXX63LUYJSKSKg.woff2">
<link rel="stylesheet" href="assets/css/novalan-tokens.css">
<link rel="stylesheet" href="assets/css/site.css">
<meta property="og:title" content="…"><meta property="og:type" content="website">
<meta property="og:image" content="assets/img/fabric/hero-1900.jpg">
</head>
<body>
<a class="nv-skip" href="#main">Saltar al contenido</a>   <!-- EN: "Skip to content" -->
…header… <main id="main">…</main> …footer…
<script src="assets/js/site.js" defer></script>
</body></html>
```
The **home pages only** additionally carry a JSON-LD `Organization` block: name `Novalan, S.A. de C.V.`,
the Tulancingo `PostalAddress`, both phone numbers, `info@novalanfabrics.com.mx`, `foundingDate` 1983.
No invented fields (no logo URL to a domain, no sameAs, no ratings).

## 4. Design direction — "Bitácora del telar"

The house look is a couture atelier's printed matter: **black ink on warm paper, hairlines doing all
the structural work, khaki once per view, cloth photography as the only colour.** Read the design
system `readme.md` VISUAL FOUNDATIONS section and obey it literally. The rules that matter most here:

- **Square. `--radius-none` everywhere.** The only curve permitted is a 5 px status dot.
- **No colour gradients as decoration.** Ink-to-transparent protection gradients over photography
  are the sole exception (`--protect-bottom`).
- **No shadows** except `--shadow-hover` under an interactive card and `--shadow-overlay` under the
  lightbox / mobile drawer.
- **Bodoni Moda never bold** — weight 400, 500 at most. Body is Archivo Light 300 at 1.7 line-height.
- **Micro-labels**: 10–11 px, UPPERCASE, `letter-spacing: var(--ls-label)`, no terminal punctuation.
- **Every number is mono** (`--font-mono`), always with its unit: `130 g/m²`, `1847`, `C.P. 43626`.
- **Khaki appears once per view**, at scale. Not sprinkled.
- **Motion**: colour 160 ms, layout/opacity 240 ms, image scale 1.04 over 420 ms on hover,
  easing `cubic-bezier(.22,.61,.36,1)`. No bounce, no spring. Everything → 0 ms under
  `prefers-reduced-motion: reduce`.
- **Emoji: never. Exclamation marks: never.**

### Site chrome

**Header** — sticky, `z-index: 30`, paper ground, 1 px hairline bottom, 82 px tall (64 px < 900 px).
Left: `brand/novalan-lockup-wordmark.png` at 132 px wide, wrapped in a link home, `alt="Novalan"`.
Centre: nav — uppercase micro-labels, `--ls-label-tight`, `--text-secondary`; the current page is
`--text-primary` with a 1 px solid ink underline and `aria-current="page"`.
Right: the `ES / EN` switch (current language is plain ink text, not a link; the other is a link to
its counterpart page — **not to the home page**), then a secondary-variant button to Contacto.
Below 900 px: nav collapses to a hamburger `<button aria-expanded>` opening a full-height paper
drawer; drawer links are Bodoni 28 px; Esc closes; focus returns to the toggle.

**Footer** — `data-nv-theme="ink"`, ink ground, four columns:
1. `brand/novalan-wordmark-light.png` 150 px + the one-line company descriptor from CONTENT.md §5.
2. Navegación — the four site links.
3. Contacto — address, both phones (`tel:`), the email (`mailto:`), map link.
4. Grupo — the two company names from CONTENT.md §0.
Then a hairline and a bottom row: copyright left, `Tulancingo, Hidalgo · México` right, both in
10 px uppercase `rgba(246,243,236,.5)`.

### Section grammar

Every content section opens with a **labelled rule**: a micro-label, a 1 px hairline that flexes to
fill the row, and (where the section is a numbered sequence) a mono index on the right.

```html
<div class="nv-rule" role="presentation"><span class="nv-rule__label">Historia</span><i></i><span class="nv-rule__index">01 / 05</span></div>
```

Sections are separated by `--section-y` (96 px; 64 px below 900 px). Prose is capped at
`--container-text` (64ch). The page container is `--container-max` (1440) with `--page-margin`
(72 px; 24 px below 900 px).

### Hero (every page)

Full-bleed. 21:9 on desktop, 3:2 below 900 px, 4:5 below 560 px. A `<picture>` with the WebP source
and JPEG fallback, `object-fit: cover`, plus two overlays: a left-to-right ink gradient
(`rgba(11,11,11,.72)` → `rgba(11,11,11,.10)`) and `--protect-bottom`. Content sits in the page
container, vertically centred, left aligned:
eyebrow micro-label in `--nv-khaki-300` → `<h1>` in Bodoni `clamp(40px, 6vw, 76px)`, paper colour,
max 18ch → standfirst in Archivo `--fs-body-lg`, `rgba(246,243,236,.82)`, max 52ch.
**Hero images always come from `img/fabric/` (1600–1900 px wide).** The `img/photo/` files are ≤1200 px
and must never be stretched across a full-bleed hero.
Hero `<img>` gets `fetchpriority="high"` and no lazy loading; every other image gets
`loading="lazy" decoding="async"` and explicit `width`/`height`.

### Components you author in `site.css`

| class | notes |
| --- | --- |
| `.nv-btn` + `--ink` `--accent` `--secondary` `--ghost` `--link` | square, 44 px (`--control-h`), 11 px uppercase `--ls-label-tight`. Ink fill → walnut on hover. Secondary = 1 px hairline, 4 % ink wash on hover. Press: `opacity:.86`, nothing moves. |
| `.nv-card` / `.nv-card--interactive` | white, 1 px hairline, no radius, no shadow. Interactive: hairline → `--border-hairline-strong` + `--shadow-hover`, image inside scales 1.04. |
| `.nv-rule` | the labelled hairline above. |
| `.nv-figure` | aspect-ratio box, ink ground, `object-fit:cover`, overflow hidden. `--4x5 --1x1 --16x10 --19x10 --21x9`. |
| `.nv-spec` | label/value rows split by hairlines; label = micro-label muted, value = mono or body. |
| `.nv-tag` | 1 px hairline chip, uppercase micro-label, 32 px tall. |
| `.nv-figures` | 10 px uppercase label above a mono `--fs-display-3` number — the key-figures strip. |
| `.nv-quote` | Bodoni **italic** pull quote, `--fs-display-3`, max 24ch, hanging khaki hairline on the left. One per page maximum. |
| `.nv-band` | full-bleed section, `data-nv-theme="ink"` variant for the ink CTA bands. |
| `.nv-reveal` | opacity 0 → 1 + `translateY(12px)` → 0 on intersect. Neutralised under reduced motion. |

Use CSS custom properties from the design system for **every** colour, space, font and duration.
A raw hex value or a raw `px` colour anywhere in `site.css` is a defect — the only literal lengths
permitted are aspect ratios, hairline `1px`, and `clamp()` bounds.

## 5. `assets/js/site.js` — required behaviour

Vanilla, no deps, `defer`, guards for elements that are absent on a given page.

1. **Mobile drawer** — toggle `aria-expanded`, lock body scroll, Esc closes, click on scrim closes,
   focus moves into the drawer and back to the toggle on close.
2. **Fabric lightbox** (products page) — opens the `-1600` image with its caption and a mono index.
   `role="dialog" aria-modal="true"`, Esc closes, ← → step through the 13, click scrim closes,
   focus restored to the originating card.
3. **YouTube facade** — a button showing a fabric still + a play mark; on click it swaps in
   `<iframe src="https://www.youtube-nocookie.com/embed/f6LBXP9IJSg?autoplay=1&rel=0&modestbranding=1">`
   with `title`, `allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"`
   and `allowfullscreen`. **Nothing loads from YouTube before the click.**
4. **Reveal on scroll** — `IntersectionObserver` adding `.is-visible` to `.nv-reveal`, `once`.
   Short-circuit entirely if `matchMedia('(prefers-reduced-motion: reduce)').matches`.
5. **Header state** — add `.is-scrolled` past 8 px so the hairline can darken. Passive listener.
6. No `alert`, no `document.write`, no inline `onclick` in the HTML.

## 6. Accessibility floor

- Skip link, `<header>`/`<nav>`/`<main>`/`<footer>` landmarks, `aria-label` on both navs.
- Every `<img>` has a real `alt` written from the CONTENT.md §6 inventory. Decorative-only images
  (there should be almost none) get `alt=""`.
- Contrast: paper text on ink photography always sits over the protection gradient. Micro-labels in
  `--nv-khaki-300` on ink pass AA; khaki-500 on paper does **not** — never use it for text on paper.
- `:focus-visible` uses the token ring; never `outline: none` without a replacement.
- Lightbox and drawer are proper modals (`aria-modal`, focus contained, Esc).
- Tap targets ≥ 44 px.

## 7. Content fidelity

Everything on the page must trace to `_source/CONTENT.md`. You may re-order, group, pull a headline
out of a source sentence, and copy-edit grammar. You may **not** add a claim, a statistic, a
certification, a client name, a date, a product, a service, an opening hour, a form, or a
newsletter sign-up that is not in that file. There is no contact form — the original had none and
there is no backend; contact is `mailto:` / `tel:` / the map link.

Spanish is **Mexican Spanish**, and it is the default (root) language. English is the mirror at `en/`.
