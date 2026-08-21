# Novalan site — locale page contract

The scaffolding is shipped. `assets/css/site.css` §29 and `assets/js/site.js` module 6 already carry
the CJK type layer and the seven-language switcher, so a translator writes **markup and sentences
only** — never CSS, never JS.

Read first, in this order, and in full:

1. `_source/CONTENT.md` — every fact and every line of copy that may appear anywhere on this site.
2. `_source/I18N.md` — locales, path map, UI strings (§4), textile glossary (§5), per-language voice (§7).
3. `_source/BUILD_CONTRACT.md` — stack rules, design direction, accessibility floor.
4. `PAGE_TEMPLATE.md` — the page bodies: hero, sections, cards, lightbox, video facade.
5. **this file** — everything that differs because the page is not Spanish.

### The three rules that get people fired

- **Translation, not authorship.** Every sentence must already exist in `CONTENT.md` in Spanish or
  English. Adding a claim, a statistic, a certification, a client, a service, an opening hour or a
  form is the worst possible failure. If a sentence resists translation, translate it faithfully
  anyway and **flag it** — never paraphrase around it, never drop it.
- **Zero network dependencies.** No CDN, no webfont fetch, no analytics, no map embed. Every path is
  relative and never starts with `/`; the pages must open off `file://`.
- **UTF-8, no mojibake.** `<meta charset="utf-8">` is the first thing in `<head>`. Save every file as
  UTF-8 without a BOM.

---

## 1. Locales, folders, filenames

| # | Locale | Endonym (menu label) | Folder | `lang` | `hreflang` | Script |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Mexican Spanish | Español | *(site root)* | `es-MX` | `es-MX` + `x-default` | Latin |
| 2 | English | English | `en/` | `en` | `en` | Latin |
| 3 | Italian | Italiano | `it/` | `it` | `it` | Latin |
| 4 | French | Français | `fr/` | `fr` | `fr` | Latin |
| 5 | Japanese | 日本語 | `ja/` | `ja` | `ja` | CJK |
| 6 | Simplified Chinese | 中文 | `zh/` | `zh-Hans` | `zh-Hans` | CJK |
| 7 | Korean | 한국어 | `ko/` | `ko` | `ko` | CJK |

Menu order is the order above. Spanish first because the house is Mexican.

**The one irregularity — memorise it.** Spanish sits at the root with Spanish filenames. Every other
locale uses the same five *English* slugs inside its own folder.

| page | es *(root)* | every other locale `<L>` |
| --- | --- | --- |
| home | `index.html` | `<L>/index.html` |
| who we are | `nosotros.html` | `<L>/about.html` |
| products | `productos.html` | `<L>/products.html` |
| processes | `procesos.html` | `<L>/processes.html` |
| contact | `contacto.html` | `<L>/contact.html` |

`dir="ltr"` on all seven. None of these scripts is right-to-left.

---

## 2. Relative paths from inside a locale folder

You are always one directory deep. There is no other case.

| target | href from `<L>/anything.html` | example |
| --- | --- | --- |
| stylesheet — fonts | `../assets/fonts/fonts.css` | |
| stylesheet — tokens | `../assets/css/novalan-tokens.css` | |
| stylesheet — site | `../assets/css/site.css` | |
| script | `../assets/js/site.js` | |
| favicon | `../assets/img/favicon.svg` | |
| brand artwork | `../assets/brand/…` | `../assets/brand/novalan-lockup-wordmark.png` |
| fabric photography | `../assets/img/fabric/…` | `../assets/img/fabric/worsted-wool-1600.jpg` |
| mill photography | `../assets/img/photo/…` | `../assets/img/photo/procesos_tejido.jpg` |
| sibling page, same locale | bare filename | `about.html`, `products.html`, `contact.html` |
| in-page anchor | `#id` | `#families` |
| **this page in Spanish** | `../` + the **Spanish** filename | `../productos.html` |
| this page in another locale | `../<locale>/` + the **English** slug | `../fr/products.html` |
| phone / e-mail / map | absolute `tel:` `mailto:` `https://` | unchanged in every locale |

From a Spanish (root) page: assets are `assets/…`, siblings are bare filenames, other locales are
`en/products.html`, `ja/products.html`, and so on.

---

## 3. The `<head>` block

Exact shape for a **non-Spanish locale page**. Replace `{{…}}`, `<L>`, `PAGE_ES` and `PAGE_EN`.

```html
<!DOCTYPE html>
<html lang="<L>" dir="ltr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{{page.title}} · Novalan, S.A. de C.V.</title>
<meta name="description" content="{{page.description}}">
<link rel="alternate" hreflang="es-MX"   href="../PAGE_ES">
<link rel="alternate" hreflang="en"      href="../en/PAGE_EN">
<link rel="alternate" hreflang="it"      href="../it/PAGE_EN">
<link rel="alternate" hreflang="fr"      href="../fr/PAGE_EN">
<link rel="alternate" hreflang="ja"      href="../ja/PAGE_EN">
<link rel="alternate" hreflang="zh-Hans" href="../zh/PAGE_EN">
<link rel="alternate" hreflang="ko"      href="../ko/PAGE_EN">
<link rel="alternate" hreflang="x-default" href="../PAGE_ES">
<link rel="icon" href="../assets/img/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="../assets/fonts/fonts.css">
<link rel="stylesheet" href="../assets/css/novalan-tokens.css">
<link rel="stylesheet" href="../assets/css/site.css">
<meta property="og:title" content="{{page.title}} · Novalan, S.A. de C.V."><meta property="og:type" content="website">
<meta property="og:image" content="../assets/img/fabric/hero-1900.jpg">
</head>
```

Then, in the line for **your own locale**, drop the `../<L>/` and leave the bare slug. That is the
only line that differs between the seven versions of a page — the block is otherwise identical on
all seven.

- `{{page.title}}` and `{{page.description}}` are translated from the ES/EN `<title>` and
  `<meta name="description">` of the same page. The description stays ≤ 155 characters and may
  contain nothing that is not in `CONTENT.md`.
- The three stylesheets are linked in that order. `fonts.css` first: nothing can paint text until
  the `@font-face` rules have arrived, and `novalan-tokens.css` deliberately does not import them.
- **Never** add `<link rel="preconnect">`, a Google Fonts URL, or a Noto CJK webfont. The CJK faces
  come from the reader's system through `site.css` §29.
- The JSON-LD `Organization` block is **home pages only**. Copy it byte-for-byte out of `index.html`
  onto `<L>/index.html`; it contains no translatable text (legal name, address, phones, e-mail,
  `foundingDate` 1983). Do not repeat it on interior pages, do not translate it, do not add fields.

### Worked example — `ja/products.html`

```html
<!DOCTYPE html>
<html lang="ja" dir="ltr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>製品 · Novalan, S.A. de C.V.</title>
<meta name="description" content="{{translated from the EN products description}}">
<link rel="alternate" hreflang="es-MX"   href="../productos.html">
<link rel="alternate" hreflang="en"      href="../en/products.html">
<link rel="alternate" hreflang="it"      href="../it/products.html">
<link rel="alternate" hreflang="fr"      href="../fr/products.html">
<link rel="alternate" hreflang="ja"      href="products.html">
<link rel="alternate" hreflang="zh-Hans" href="../zh/products.html">
<link rel="alternate" hreflang="ko"      href="../ko/products.html">
<link rel="alternate" hreflang="x-default" href="../productos.html">
<link rel="icon" href="../assets/img/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="../assets/fonts/fonts.css">
<link rel="stylesheet" href="../assets/css/novalan-tokens.css">
<link rel="stylesheet" href="../assets/css/site.css">
<meta property="og:title" content="製品 · Novalan, S.A. de C.V."><meta property="og:type" content="website">
<meta property="og:image" content="../assets/img/fabric/hero-1900.jpg">
</head>
```

### The `PAGE_ES` / `PAGE_EN` pair, per page

| page | `PAGE_ES` (es-MX + x-default) | `PAGE_EN` (the other six) |
| --- | --- | --- |
| home | `index.html` | `index.html` |
| who we are | `nosotros.html` | `about.html` |
| products | `productos.html` | `products.html` |
| processes | `procesos.html` | `processes.html` |
| contact | `contacto.html` | `contact.html` |

On the **Spanish root pages** the same eight alternates drop every `../`: `es-MX` and `x-default`
become the bare Spanish filename (`productos.html`), and the other six become
`<locale>/<english-slug>` (`en/products.html`, `ja/products.html`, …). Same eight lines, same order,
one directory level higher.

---

## 4. The language switcher

A disclosure menu, not a `<select>`. All seven links are real `<a href>` elements in the markup;
script only shows and hides the panel. `site.js` module 6 wires it, `site.css` §29.4 styles it, and
§29.6 turns it into a plain list of links if script is switched off — so **do not** add a `<script>`
tag, an `onclick`, or a `<noscript>` of your own.

Rules that are not negotiable:

- Each link points at **the current page** in that locale, never at a home page.
- The current locale is a `<span class="nv-lang__item is-current">`, not a link, and carries
  `aria-current="true"`.
- Every item carries its own `lang` **and** `hreflang`. The `lang` attribute is what makes 日本語 and
  한국어 render in the right face inside a Spanish page — `site.css` §29.2 keys the CJK stacks on
  `:lang()`, so an item that loses its `lang` gets a mismatched fallback face.
- Endonyms are never translated: Español · English · Italiano · Français · 日本語 · 中文 · 한국어.
- `id="nv-lang-panel"` and `aria-controls="nv-lang-panel"` appear **once per page** — on the header
  instance only. The drawer block carries neither.
- The toggle's `aria-label` follows the bilingual form I18N.md §2 prints for the Spanish page,
  `Idioma · Language`: your locale's `ui.language` value, then ` · Language`, so a visitor who cannot
  read the page can still find the control. `type="button"` is the house convention for every
  `<button>` on this site and is the only addition to the markup I18N.md §2 shows.

### 4a. Header switcher — root Spanish page (`productos.html`)

```html
<div class="nv-lang">
  <button class="nv-lang__toggle" type="button" aria-expanded="false" aria-controls="nv-lang-panel"
          aria-label="Idioma · Language">
    <span class="nv-lang__current" lang="es-MX">Español</span>
    <svg class="nv-icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
  </button>
  <ul class="nv-lang__panel" id="nv-lang-panel" hidden>
    <li><span class="nv-lang__item is-current" aria-current="true" lang="es-MX">Español</span></li>
    <li><a class="nv-lang__item" lang="en"      hreflang="en"      href="en/products.html">English</a></li>
    <li><a class="nv-lang__item" lang="it"      hreflang="it"      href="it/products.html">Italiano</a></li>
    <li><a class="nv-lang__item" lang="fr"      hreflang="fr"      href="fr/products.html">Français</a></li>
    <li><a class="nv-lang__item" lang="ja"      hreflang="ja"      href="ja/products.html">日本語</a></li>
    <li><a class="nv-lang__item" lang="zh-Hans" hreflang="zh-Hans" href="zh/products.html">中文</a></li>
    <li><a class="nv-lang__item" lang="ko"      hreflang="ko"      href="ko/products.html">한국어</a></li>
  </ul>
</div>
```

### 4b. Header switcher — inside a locale folder (`ja/products.html`)

```html
<div class="nv-lang">
  <button class="nv-lang__toggle" type="button" aria-expanded="false" aria-controls="nv-lang-panel"
          aria-label="言語 · Language">
    <span class="nv-lang__current" lang="ja">日本語</span>
    <svg class="nv-icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
  </button>
  <ul class="nv-lang__panel" id="nv-lang-panel" hidden>
    <li><a class="nv-lang__item" lang="es-MX"   hreflang="es-MX"   href="../productos.html">Español</a></li>
    <li><a class="nv-lang__item" lang="en"      hreflang="en"      href="../en/products.html">English</a></li>
    <li><a class="nv-lang__item" lang="it"      hreflang="it"      href="../it/products.html">Italiano</a></li>
    <li><a class="nv-lang__item" lang="fr"      hreflang="fr"      href="../fr/products.html">Français</a></li>
    <li><span class="nv-lang__item is-current" aria-current="true" lang="ja">日本語</span></li>
    <li><a class="nv-lang__item" lang="zh-Hans" hreflang="zh-Hans" href="../zh/products.html">中文</a></li>
    <li><a class="nv-lang__item" lang="ko"      hreflang="ko"      href="../ko/products.html">한국어</a></li>
  </ul>
</div>
```

Swap the `<span>` and the `<a>` of your own locale, keep the seven `<li>` in the order above, and
replace `products.html` / `productos.html` with the pair from §3 for the page you are on.

### 4c. Drawer block — the mobile variant

Below 900 px the header disclosure is hidden and the seven links live at the bottom of the nav
drawer as a labelled block. Same classes, plus `.nv-lang--block`; **no toggle, no `hidden`, no
`id`**. It is a static list, so `site.js` leaves it alone.

```html
<div class="nv-lang nv-lang--block">
  <p class="nv-label" id="nv-lang-label">{{ui.language}}</p>
  <ul class="nv-lang__panel" aria-labelledby="nv-lang-label">
    <li><a class="nv-lang__item" lang="es-MX"   hreflang="es-MX"   href="../productos.html">Español</a></li>
    <li><a class="nv-lang__item" lang="en"      hreflang="en"      href="../en/products.html">English</a></li>
    <li><a class="nv-lang__item" lang="it"      hreflang="it"      href="../it/products.html">Italiano</a></li>
    <li><a class="nv-lang__item" lang="fr"      hreflang="fr"      href="../fr/products.html">Français</a></li>
    <li><span class="nv-lang__item is-current" aria-current="true" lang="ja">日本語</span></li>
    <li><a class="nv-lang__item" lang="zh-Hans" hreflang="zh-Hans" href="../zh/products.html">中文</a></li>
    <li><a class="nv-lang__item" lang="ko"      hreflang="ko"      href="../ko/products.html">한국어</a></li>
  </ul>
</div>
```

### 4d. Keyboard behaviour you get for free

Click toggles `aria-expanded` · `Esc` closes and returns focus to the toggle · a click or a focus
outside closes · `↑` `↓` move between items · `Home` `End` jump to the ends · `↓` `↑` on the closed
toggle open it and land on the first or last item. The current locale is a `<span>`, so it is not in
the focus ring — that is intended.

---

## 5. Header — exact markup

`{{key}}` placeholders are the I18N.md §4 UI strings. `<L>` is your folder, `PAGE` the English slug
of the current page. Set `aria-current="page"` on the nav link for the current page — or on
`.nv-header__cta` when the current page is Contact. The header nav carries **three** links; Contact
lives in the button on the right. All four appear in the drawer and in the footer.

```html
<body>
<a class="nv-skip" href="#main">{{ui.skip}}</a>

<!-- ===================== HEADER ===================== -->
<header class="nv-header">
  <div class="nv-header__inner nv-container">
    <a class="nv-header__brand" href="index.html" aria-label="{{brand.home}}">
      <img class="nv-header__logo" src="../assets/brand/novalan-lockup-wordmark.png" alt="Novalan" width="600" height="88" loading="lazy" decoding="async">
    </a>

    <nav class="nv-nav" aria-label="{{ui.mainNav}}">
      <a class="nv-nav__link" href="about.html">{{nav.about}}</a>
      <a class="nv-nav__link" href="products.html">{{nav.products}}</a>
      <a class="nv-nav__link" href="processes.html">{{nav.processes}}</a>
    </nav>

    <div class="nv-header__actions">
      <!-- the seven-item switcher from §4b goes here -->
      <a class="nv-btn nv-btn--secondary nv-btn--sm nv-header__cta" href="contact.html">{{btn.contact}}</a>
      <button class="nv-burger" type="button" aria-expanded="false" aria-controls="nv-drawer" data-nv-drawer-toggle>
        <span class="nv-sr-only">{{ui.menu}}</span>
        <span class="nv-burger__box" aria-hidden="true">
          <span class="nv-burger__bar"></span>
          <span class="nv-burger__bar"></span>
        </span>
      </button>
    </div>
  </div>
</header>
```

### Mobile drawer — paste immediately after `</header>`

```html
<div class="nv-drawer" id="nv-drawer" data-nv-drawer>
  <div class="nv-drawer__scrim" data-nv-drawer-close></div>
  <div class="nv-drawer__panel" role="dialog" aria-modal="true" aria-label="{{drawer.label}}">
    <div class="nv-drawer__head">
      <img class="nv-drawer__logo" src="../assets/brand/novalan-lockup-wordmark.png" alt="Novalan" width="600" height="88" loading="lazy" decoding="async">
      <button class="nv-drawer__close" type="button" data-nv-drawer-close aria-label="{{drawer.close}}">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <nav class="nv-drawer__nav" aria-label="{{drawer.nav}}">
      <a class="nv-drawer__link" href="about.html">{{nav.about}}</a>
      <a class="nv-drawer__link" href="products.html">{{nav.products}}</a>
      <a class="nv-drawer__link" href="processes.html">{{nav.processes}}</a>
      <a class="nv-drawer__link" href="contact.html">{{nav.contact}}</a>
    </nav>
    <div class="nv-drawer__foot">
      <p class="nv-label">{{ft.contact}}</p>
      <a href="tel:+527757551123">(52) 775-755-11-23</a>
      <a href="tel:+527757530389">(52) 775-753-03-89</a>
      <a href="mailto:info@novalanfabrics.com.mx">info@novalanfabrics.com.mx</a>
      <!-- the .nv-lang--block from §4c goes here -->
    </div>
  </div>
</div>
```

The phone numbers, the e-mail address and their `tel:` / `mailto:` targets are **never** translated
or reformatted, in any locale.

---

## 6. Footer — exact markup

```html
<footer class="nv-footer" data-nv-theme="ink">
  <div class="nv-footer__inner nv-container">
    <div class="nv-footer__brand">
      <img class="nv-footer__mark" src="../assets/brand/novalan-wordmark-light.png" alt="Novalan" width="600" height="197" loading="lazy" decoding="async">
      <p class="nv-footer__desc">{{company.descriptor}}</p>
    </div>

    <nav class="nv-footer__col" aria-label="{{footer.nav}}">
      <h2 class="nv-footer__head">{{ft.nav}}</h2>
      <ul class="nv-footer__list">
        <li><a class="nv-footer__link" href="about.html">{{nav.about}}</a></li>
        <li><a class="nv-footer__link" href="products.html">{{nav.products}}</a></li>
        <li><a class="nv-footer__link" href="processes.html">{{nav.processes}}</a></li>
        <li><a class="nv-footer__link" href="contact.html">{{nav.contact}}</a></li>
      </ul>
    </nav>

    <div class="nv-footer__col">
      <h2 class="nv-footer__head">{{ft.contact}}</h2>
      <address class="nv-footer__addr">
        Carr. Tulancingo-Huapalcalco #1510<br>
        Col. Caltengo<br>
        Tulancingo, Hidalgo. México<br>
        C.P.: 43626
      </address>
      <ul class="nv-footer__list">
        <li><a class="nv-footer__link" href="tel:+527757551123">(52) 775-755-11-23</a></li>
        <li><a class="nv-footer__link" href="tel:+527757530389">(52) 775-753-03-89</a></li>
        <li><a class="nv-footer__link" href="mailto:info@novalanfabrics.com.mx">info@novalanfabrics.com.mx</a></li>
        <li><a class="nv-footer__link" href="MAPS_URL" target="_blank" rel="noopener noreferrer">{{btn.map}}</a></li>
      </ul>
    </div>

    <div class="nv-footer__col">
      <h2 class="nv-footer__head">{{ft.group}}</h2>
      <ul class="nv-footer__list">
        <li>Novalan, S.A. de C.V.</li>
        <li>San Ildefonso Fábrica de Tejidos de Lana, S.A. de C.V.</li>
      </ul>
    </div>
  </div>

  <div class="nv-container">
    <hr class="nv-footer__rule">
    <div class="nv-footer__bottom">
      <span>© {{ft.rights}}. Novalan, S.A. de C.V.</span>
      <span>Tulancingo, Hidalgo · México</span>
    </div>
  </div>
</footer>

<script src="../assets/js/site.js" defer></script>
</body>
</html>
```

- `MAPS_URL` is the single Google Maps place URL from `CONTENT.md` §0 — **copy it out of
  `index.html`, do not retype it.** It is identical in all seven locales.
- The address block stays in Spanish in every locale, because that is what has to be written on an
  envelope. Only the label above it is translated.
- The two company names are never translated, transliterated or glossed.
- `{{ft.rights}}` in `ja` and `ko` is deliberately the English formula "All rights reserved"
  (I18N.md §4). Chinese uses 版权所有.
- `{{company.descriptor}}` is the one-line descriptor from `CONTENT.md` §5, translated through the
  §5 glossary: *Fabricación y venta de tejidos de moda en lana y mezclas, hilos, tapicería y tejidos
  técnicos.* / *Manufacture and sale of wool fashion fabrics and blends, upholstery, technical
  textiles and yarns.*

---

## 7. The placeholders, resolved

Everything with an I18N.md §4 key — take the value straight out of that table, do not re-translate:

`{{ui.skip}}` `{{ui.menu}}` `{{ui.close}}` `{{ui.language}}` `{{ui.mainNav}}` `{{ui.prev}}`
`{{ui.next}}` · `{{nav.home}}` `{{nav.about}}` `{{nav.products}}` `{{nav.processes}}`
`{{nav.contact}}` · `{{btn.contact}}` `{{btn.map}}` `{{btn.products}}` `{{btn.video}}`
`{{btn.playVideo}}` `{{btn.write}}` · `{{lbl.address}}` `{{lbl.phones}}` `{{lbl.email}}`
`{{lbl.coords}}` · `{{ft.nav}}` `{{ft.contact}}` `{{ft.group}}` `{{ft.rights}}` · every `sec.*`.

### Chrome strings with no key in I18N.md §4 — translate and **flag**

These exist in the shipped Spanish and English pages but were not keyed. Translate them faithfully,
use the derivation given, and list every one of them in your handoff note as flagged.

| placeholder | where | es-MX | en | derivation |
| --- | --- | --- | --- | --- |
| toggle `aria-label` | header switcher | `Idioma · Language` | `Language` | **flag** — `ui.language` + ` · Language`, per I18N.md §2's own example; on the English page it collapses to `Language` |
| `{{brand.home}}` | header brand link `aria-label` | `Novalan — Inicio` | `Novalan — Home` | **flag** — no key; use `Novalan — ` + your locale's ordinary word for the front page |
| `{{drawer.label}}` | drawer dialog `aria-label` | `Navegación` | `Navigation` | use the `ft.nav` value |
| `{{drawer.nav}}` | drawer `<nav>` `aria-label` | `Navegación móvil` | `Mobile navigation` | **flag** — the `ui.mainNav` value is an acceptable substitute |
| `{{drawer.close}}` | drawer close button `aria-label` | `Cerrar el menú` | `Close the menu` | `ui.close` + `ui.menu`, in your locale's natural order |
| `{{footer.nav}}` | footer `<nav>` `aria-label` | `Navegación del pie de página` | `Footer navigation` | **flag** — the `ft.nav` value is an acceptable substitute |
| lightbox dialog `aria-label` | products page | `Telas` | `Fabrics` | the glossary's *fabric / cloth* row (§5): 生地 · 面料 · 원단 · tessuto · tissu |
| lightbox step buttons | products page | `Anterior` / `Siguiente` | `Previous` / `Next` | `ui.prev` / `ui.next` |
| video `data-nv-video-title` | home + processes | `Video Corporativo · Novalan, S.A. de C.V.` | `Corporate Video · Novalan, S.A. de C.V.` | `btn.video` + ` · Novalan, S.A. de C.V.` |
| video `.nv-sr-only` | home + processes | `Reproducir el video corporativo de Novalan en YouTube` | `Play the Novalan corporate video on YouTube` | `btn.playVideo`; keep "Novalan" and "YouTube" |

Section `aria-label`s that are page content (`Cita` / `Quote`, `Regiones` / `Regions`, `Control y
supervisión` / `Control and supervision`) are translated with the section they label.

### Never translated, in any locale

Company names `Novalan, S.A. de C.V.` and `San Ildefonso Fábrica de Tejidos de Lana, S.A. de C.V.` ·
the address · the phone numbers · `info@novalanfabrics.com.mx` · the coordinates · the wordmark and
its tagline artwork (`Weaving beauty since 1983` is a PNG — never re-typeset it) · `g/m²` · `1847`
`1977` `1983` `170` `C.P. 43626` and every other numeral, in Western digits and mono type · the
proper nouns *San Ildefonso*, *Don Juan Morera*, *Morera*, *Tulancingo*, *Hidalgo*, *Caltengo*
(Latin spelling kept in ja/zh/ko) · every `alt` is translated, but the thing it describes is not.

---

## 8. What the CJK layer does for you — and what it forbids

`site.css` §29 keys everything on `:lang()`. Get `<html lang>` right and the rest is automatic:

| | Latin (es · en · it · fr) | CJK (ja · zh · ko) |
| --- | --- | --- |
| display face | Bodoni Moda | Bodoni Moda **first**, then Yu Mincho / Songti SC / Nanum Myeongjo … |
| UI face | Archivo | Archivo **first**, then Yu Gothic / PingFang SC / Malgun Gothic … |
| body line-height | 1.7 | 1.9 |
| display line-height | 1.05 | 1.35 |
| display letter-spacing | −.01em | .02em |
| micro-labels | UPPERCASE, .24em | no casing change, .12em |
| pull quote | Bodoni italic | upright; the hanging khaki hairline is the marker |
| headline measure | 18ch | 15em |
| hero `<h1>` | `clamp(40px, 6vw, 76px)` | `clamp(32px, 5vw, 60px)` |
| wrapping | default | `line-break: strict`, `word-break: normal`, `overflow-wrap: anywhere`; `keep-all` for Korean |
| numerals | mono | mono — a CJK face never takes the digits |

Consequences for the markup:

- **Wrap every number in `.nv-mono`**, in all seven languages: `<span class="nv-mono">130 g/m²</span>`,
  `<span class="nv-mono">1847</span>`. Chinese writes the unit as `g/m²`, not 克/平方米.
- **Do not** add `<br>` to fix a line break, do not add `&nbsp;`, do not add inline `style`, do not
  add a class that is not in §9. If a CJK line breaks badly, the fix is in `site.css` §29 and belongs
  to the maintainer, not to the page.
- Micro-labels have **no terminal punctuation** and no exclamation marks — in any language.
- Japanese and Chinese use 全角 punctuation（、。「」／，。), Korean uses its own spacing rules
  (띄어쓰기 must be correct); French keeps its typographic spaces before `: ; ! ?` and « … » for the
  pull quote; Italian uses *voi*, French *nous*/*vous*, Japanese です・ます体 with 弊社, Chinese
  本公司, Korean 합쇼체. I18N.md §7 is binding.
- One `<h1>` per page (the hero title). Sections are `<h2>`, items inside them `<h3>`. Footer column
  heads are `<h2>`. No skipped levels.

---

## 9. Class inventory — everything `assets/css/site.css` defines

If a class is not in this list, it does not exist. Modifiers are listed with their base.

### Layout
| Class | Does | Modifiers |
| --- | --- | --- |
| `.nv-container` | 1440 max width, auto margins, `--page-margin` side padding | — |
| `.nv-section` | `--section-y` top and bottom padding | `--tight` (64 px), `--flush-top`, `--flush-bottom` |
| `.nv-section__head` | rule + heading + lede cluster with standard bottom air | — |
| `.nv-prose` | caps a text column at `--container-text` (64ch); last `<p>` loses its margin | `--wide` (76ch) |
| `.nv-split` | two-column editorial layout, collapses at 900 px | `--aside` (1.35 / 1), `--even` (1 / 1), `--reverse` |
| `.nv-grid-2` `.nv-grid-3` `.nv-grid-4` | equal-column grids on `--gutter`; 4→3 at 1180, 3/4→2 and 2→1 at 900, all →1 at 560 | `.nv-grid--gap-lg`, `.nv-grid--gap-sm` |
| `.nv-stack` | vertical grid stack, `--space-5` gap | `--sm`, `--lg` |
| `.nv-actions` | flex row of buttons/links, wraps | — |
| `.nv-list-reset` | strips list markers and padding | — |
| `.nv-sr-only` | visually hidden, still announced | — |

### Type
| Class | Does | Modifiers |
| --- | --- | --- |
| `.nv-label` | the micro-label: 10 px, uppercase, `--ls-label`, muted, zero margin | `--lg` (11 px), `--tight` (`--ls-label-tight`), `--accent`, `--ink` |
| `.nv-mono` | mono family + tabular numerals — wrap **every** number in it | — |
| `.nv-h1` `.nv-h2` `.nv-h3` `.nv-h4` | display type roles for non-heading elements | — |
| `.nv-lede` | 18 px standfirst paragraph in `--text-secondary` | — |
| `.nv-muted` | body copy in `--text-secondary` | — |
| `.nv-hairline` | a plain 1 px rule (`<hr>` or `<span>`) | `--strong`, `--accent` |
| `.nv-link-arrow` | uppercase micro-label link with an underline that darkens on hover | — |
| `.nv-icon` | inline SVG: `fill:none`, `stroke:currentColor`, `stroke-width:1.25` | — |

### Chrome
| Class | Does |
| --- | --- |
| `.nv-skip` | fixed skip link, slides in on focus |
| `.nv-header` | sticky paper bar, hairline bottom, `z-index:30`; `.is-scrolled` (added by JS past 8 px) darkens the hairline |
| `.nv-header__inner` | 82 px flex row (64 px below 900 px) |
| `.nv-header__brand` / `.nv-header__logo` | home link + 132 px wordmark |
| `.nv-nav` / `.nv-nav__link` | centre nav; `[aria-current="page"]` gives ink colour + solid ink underline; hidden below 900 px |
| `.nv-header__actions` | right cluster |
| `.nv-header__cta` | the secondary button to Contact; `[aria-current="page"]` fills it ink; hidden below 900 px |
| `.nv-burger`, `.nv-burger__box`, `.nv-burger__bar` | hamburger, visible only below 900 px |

### Language switcher (§29.4–29.7)
| Class | Does | Notes |
| --- | --- | --- |
| `.nv-lang` | the switcher root; positioning context for the panel | `--block` renders the drawer variant: no dropdown, no toggle, a labelled static list |
| `.nv-lang__toggle` | 44 px ghost control, 11 px uppercase, chevron rotates 180° when `aria-expanded="true"` | needs `type="button"`, `aria-expanded`, `aria-controls` |
| `.nv-lang__current` | the endonym inside the toggle | |
| `.nv-lang__panel` | square `<ul>`, `--surface-card` ground, 1 px hairline, `--shadow-overlay`, no radius; `hidden` is the closed state | absolutely positioned under the toggle; static inside `--block` |
| `.nv-lang__item` | 44 px row, `--fs-body-sm` Archivo, 4 % ink wash on hover | `.is-current` — ink text + a solid hairline rail, on the `<span>` |
| *legacy* `.nv-lang__sep`, `.nv-lang__link` | the old two-way ES/EN switch, still defined in §06 | **do not use in a new page** |

### Drawer
`.nv-drawer` (`.is-open`), `.nv-drawer__scrim`, `.nv-drawer__panel`, `.nv-drawer__head`,
`.nv-drawer__logo`, `.nv-drawer__close`, `.nv-drawer__nav`, `.nv-drawer__link`
(Bodoni 28 px, hairline-separated, `[aria-current="page"]` goes walnut), `.nv-drawer__foot`.
Full-height paper panel on the right, `--scrim-ink` + `--blur-veil` behind it.
JS adds `body.nv-no-scroll` while it is open.

### Footer
`.nv-footer` (needs `data-nv-theme="ink"`), `.nv-footer__inner` (1.4fr + 3 columns),
`.nv-footer__brand`, `.nv-footer__mark` (150 px), `.nv-footer__desc`, `.nv-footer__col`,
`.nv-footer__head` (khaki-300 micro-label), `.nv-footer__list`, `.nv-footer__link`,
`.nv-footer__addr`, `.nv-footer__rule`, `.nv-footer__bottom` (10 px uppercase, muted).

### Hero
`.nv-hero`, `.nv-hero__media` (21:9 → 3:2 → 4:5), `.nv-hero__img`, `.nv-hero__veil`,
`.nv-hero__protect`, `.nv-hero__inner`, `.nv-hero__eyebrow`, `.nv-hero__title`
(Bodoni `clamp(40px, 6vw, 76px)`, max 18ch — `clamp(32px, 5vw, 60px)`, max 15em under CJK),
`.nv-hero__standfirst` (max 52ch), `.nv-hero__actions`, `.nv-hero__plinth`, `.nv-hero__lockup`,
`.nv-hero__cue` (hidden below 560 px). Modifier: `.nv-hero--compact` → 21:7 desktop crop.

### Components
| Class | Does | Modifiers |
| --- | --- | --- |
| `.nv-rule` | labelled hairline; children `.nv-rule__label`, `<i>` or `.nv-rule__line`, `.nv-rule__index` | `--accent`, `--strong` |
| `.nv-btn` | 44 px square control, 11 px uppercase; press = `opacity:.86` | `--ink`, `--accent`, `--secondary`, `--ghost`, `--link`, `--sm` (32 px), `--lg` (52 px), `--block` |
| `.nv-card` | white, 1 px hairline, square, no shadow. Children `.nv-card__body`, `.nv-card__title`, `.nv-card__meta`, `.nv-card__link` | `--interactive`, `--flush` |
| `.nv-figure` | `<figure>`; holds `.nv-figure__frame`, `.nv-figure__img`, `.nv-figure__caption` | ratio: `--4x5` `--1x1` `--3x2` `--16x10` (default) `--19x10` `--21x9`; `--hover` |
| `.nv-figures` | key-figures strip: `.nv-figures__item` (`.nv-figures__label` + `.nv-figures__num`), 5 → 3 → 2 → 1 columns | `--4` |
| `.nv-spec` | `<dl>` of `.nv-spec__row` (`.nv-spec__label` / `.nv-spec__value`) | `--dense`, `--stacked`; `.nv-spec__value--text` |
| `.nv-tag` | 32 px hairline chip, uppercase micro-label | `--accent`, `--selected` |
| `.nv-list` | hairline list: `.nv-list__item` (`.nv-list__index` + `.nv-list__body` → `.nv-list__term`, `.nv-list__text`) | `--plain`, `--tight` |
| `.nv-quote` | Bodoni italic pull quote, max 24ch, hanging khaki hairline; `.nv-quote__text`, `.nv-quote__attr`. **One per page.** Upright under CJK, max 20em | `--wide` (30ch / 25em) |
| `.nv-band` | full-bleed section with `--section-y` padding | `--ink`, `--image` (+ `.nv-band__media`, `__img`, `__veil`, `__protect`, `__inner`) |
| `.nv-cta` | two-column contact layout inside an ink band: `.nv-cta__body`, `.nv-cta__title`, `.nv-cta__aside`, `.nv-cta__addr` | — |
| `.nv-timeline` | vertical rail: `.nv-timeline__item` → `__year` (mono) + `__body` → `__title`, `__text`, `__figure` | — |
| `.nv-video` | 16:9 ink box; `.nv-video__facade` holds `__img`, `__veil`, `__play`, `__label`; `.is-playing` reveals `.nv-video__frame`; `.nv-video__caption` below | — |
| `.nv-lightbox` | fixed modal, `.is-open` shows it: `__scrim`, `__dialog`, `__top`, `__close`, `__figure`, `__img`, `__bar`, `__caption`, `__index`, `__nav`, `__step` | — |
| `.nv-reveal` | fade + 12 px rise on intersect; `.is-visible` is the resting state | `--delay-1`, `--delay-2`, `--delay-3` |
| `.nv-map` | contact page: the woven plate beside the address; `.nv-map__foot`, `.nv-map__coords`. Makes no network request | — |
| `.nv-colophon` | contact page: closing wordmark + tagline; `.nv-colophon__mark`, `__tagline`, `__rule` | — |
| `.nv-index-link` | processes page: lifts an inline stage anchor to the 44 px control height | — |

### State classes set by JS
`.nv-js` (on `<html>`), `.is-scrolled` (header), `.is-open` (drawer, lightbox),
`.is-playing` (video), `.is-visible` (reveal), `body.nv-no-scroll` (scroll lock).

### Not defined — do not copy them forward
`.nv-hero--16x9` and `.nv-map__pin` appear in `contacto.html` / `en/contact.html` but have no rule in
`site.css`. They do nothing. `.nv-weave-plain` `.nv-weave-twill` `.nv-weave-herringbone`
`.nv-weave-canvas` are real, but they come from the design system's `tokens/texture.css`, not from
`site.css`.

### JS hooks
`data-nv-drawer`, `data-nv-drawer-toggle`, `data-nv-drawer-close` · `data-nv-video`,
`data-nv-video-id`, `data-nv-video-title` · `data-nv-lightbox`, `data-nv-lightbox-open` with
`data-nv-src`, `data-nv-src-webp`, `data-nv-caption`, `data-nv-alt`, and inside the dialog
`data-nv-lightbox-img`, `-source`, `-caption`, `-index`, `-close`, `-prev`, `-next`.
The switcher needs no data attribute — `site.js` finds it by class.

---

## 10. Before you hand the locale over

1. Five files exist at `<L>/index.html`, `about.html`, `products.html`, `processes.html`,
   `contact.html`, and every internal link resolves on disk.
2. The seven-item switcher is on all five, in the header **and** in the drawer, each item pointing at
   that same page in that locale, with `lang` + `hreflang` on every item and the current locale as a
   `<span aria-current="true">`.
3. All eight `hreflang` alternates present and correct on all five pages; `x-default` → Spanish.
4. `<html lang>` correct; open a CJK page and confirm the Bodoni wordmark, the digits and `g/m²`
   still set in the Latin faces while the sentences set in the system CJK face.
5. Every fact traces to `CONTENT.md`: all 8 values, all 13 product families in source order, all 5
   processes, both phone numbers, both company names, `130 g/m²`–`600 g/m²`, `170`, `1847`, `1977`,
   `1983`. Nothing added — no certification, no client, no opening hour, no form.
6. Trade terms match the I18N.md §5 glossary; the 13 family labels are the §5 table's, verbatim and
   with no added description.
7. Files are UTF-8, no mojibake, no `?`-boxes, `<meta charset="utf-8">` first in `<head>`.
8. No horizontal scroll at 360 px; the drawer opens, Esc closes it, focus returns to the burger.
9. The page opens off `file://` with no console error and makes **zero** network requests until the
   visitor clicks the video facade or the map link.
10. Your handoff note lists every string you flagged.
