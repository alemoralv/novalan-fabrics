export const meta = {
  name: 'novalan-seven-languages',
  description: 'Add Italian, French, Japanese, Chinese and Korean to the Novalan site and retrofit the seven-language switcher',
  phases: [
    { title: 'Andamiaje', detail: 'CJK type, switcher CSS/JS, retrofit the 10 existing ES/EN pages' },
    { title: 'Traducción', detail: 'five locales, five pages each' },
    { title: 'Revisión', detail: 'native-level check per locale' },
    { title: 'Correcciones', detail: 'apply confirmed findings' },
  ],
}

const ROOT = String.raw`C:\Users\alexm\novalan_webpage`
const SITE = ROOT + String.raw`\site`

const PRE = `
You are extending an already-built static website to seven languages. Root: ${SITE}.

READ IN FULL BEFORE WRITING ANYTHING — these are binding:
1. ${ROOT}\\_source\\I18N.md          — locales, path map, switcher markup, CJK type, UI strings, textile glossary
2. ${ROOT}\\_source\\CONTENT.md       — every fact and line of copy that may appear anywhere on this site
3. ${ROOT}\\_source\\BUILD_CONTRACT.md — stack rules, design direction, component list, accessibility floor
4. ${SITE}\\PAGE_TEMPLATE.md          — the shared markup and the class inventory
5. ${SITE}\\assets\\css\\site.css      — the only authored stylesheet

This is the real site of a real Mexican wool mill (Novalan, S.A. de C.V., Tulancingo, Hidalgo),
belonging to the user's family. The five new locales are TRANSLATIONS. Every sentence must already
exist in CONTENT.md in Spanish or English. Adding a claim, a statistic, a certification, a client,
a service, an opening hour or a form is the worst possible failure. If a sentence resists
translation, translate it faithfully anyway and flag it — never paraphrase around it, never drop it.

Zero network dependencies: no CDN, no webfont fetch, no analytics. All paths relative.
Do not touch ${ROOT}\\_source or the design-system folder; they are read-only inputs.
`

// ─────────────────────────────── Phase 1 — scaffolding ───────────────────────────────
phase('Andamiaje')

const scaffold = await agent(`${PRE}

YOUR TASK — the scaffolding every translator will build on. Two deliverables.

A) Extend ${SITE}\\assets\\css\\site.css and ${SITE}\\assets\\js\\site.js.

CSS, appended as a clearly commented block at the end of the file:
 - The CJK font custom properties and the ':lang()' overrides exactly as specified in I18N.md §3.
   They work by redefining --font-display and --font-ui, which every component already reads, so
   do not touch any component rule.
 - The per-script typographic corrections in the I18N.md §3 table: body and display line-height,
   display letter-spacing, micro-label casing and tracking, upright pull quotes for CJK, headline
   measure in em rather than ch, wrapping rules, and 'word-break: keep-all' for Korean. Numerals
   stay mono in every language.
 - The hero h1 clamp drops one step for CJK.
 - The '.nv-lang' switcher: toggle, panel, items, current state, hover, focus, and the mobile
   variant that renders the seven links as a labelled block inside the drawer instead of a dropdown.
   Square, hairline, --shadow-overlay, no radius. Use only design-system custom properties; a raw
   hex or hardcoded colour is a defect.

JS, added to site.js as a new guarded module in the existing style:
 - The language menu: click toggles aria-expanded, Esc closes and returns focus to the toggle,
   click outside closes, ArrowUp/ArrowDown move between items, Home/End jump to the ends. It must
   no-op cleanly on any page lacking the markup, and the links must still work with JS disabled.

B) Write ${SITE}\\LANG_TEMPLATE.md — the contract the five translators will follow. It must contain,
   verified against the files you just wrote and against I18N.md:
 - The exact <head> block for a non-Spanish locale page, including all eight hreflang alternates,
   with a worked example for one page.
 - The exact switcher markup, with the href for every one of the seven items, shown once for a root
   Spanish page and once for a page inside a locale folder.
 - The exact header and footer markup with the UI strings left as clearly marked placeholders.
 - The full class inventory from site.css with the modifiers that exist.
 - The relative-path table: assets, siblings, and each other locale, from inside a locale folder.

Return a terse report: what you changed in css/js, and confirmation that LANG_TEMPLATE.md matches.`,
  { label: 'andamiaje:css-js', effort: 'high' })

const retrofit = await agent(`${PRE}

The CJK type, the switcher styles and the language-menu script now exist. Read
${SITE}\\LANG_TEMPLATE.md first — it is the contract.

YOUR TASK — retrofit the ten pages that already exist, and fix the outstanding visual defects.
Files: index.html, nosotros.html, productos.html, procesos.html, contacto.html and the five
counterparts in en\\. Do not create any new page.

1. Replace the two-way ES/EN toggle in the header with the seven-language menu from LANG_TEMPLATE.md.
   On every page, each of the seven links must point at THAT page in that locale, never at a home
   page. The current locale is a span with aria-current, not a link. Spanish pages sit at the root
   and link out to 'en/…', 'it/…', 'ja/…' and so on; English pages sit in en\\ and link to
   '../productos.html' for Spanish and '../it/products.html' for the rest. Get the Spanish
   filenames right — they are the one irregularity in the whole site (I18N.md §1).
2. Add the seven-language block to the mobile drawer as specified.
3. Expand the hreflang alternates from four to the full eight (seven locales plus x-default → the
   Spanish page).
4. Apply every fix in ${ROOT}\\_source\\POLISH.md. Read that file: it lists a font preload that
   throws a CORS error when the site is opened from disk, photographs letterboxed inside
   mismatched aspect ratios, an over-tall ink band, an unbalanced two-column block, and a
   key-figures tile that wraps badly. It also lists two things that are NOT broken — do not
   "fix" those.

Work with Edit, surgically, page by page. After each page, re-read the switcher block you wrote and
check every href against the I18N.md §1 table by eye. A wrong href here multiplies across 35 pages.

Return a terse report: pages changed, plus any POLISH.md item you could not apply and why.`,
  { label: 'andamiaje:retrofit', effort: 'high' })

log('Scaffolding done — translating into five locales')

// ─────────────────────────────── Phase 2 + 3 — per locale ───────────────────────────────
phase('Traducción')

const LOCALES = [
  { code: 'it', dir: 'it', name: 'Italian',            endonym: 'Italiano', lang: 'it' },
  { code: 'fr', dir: 'fr', name: 'French',             endonym: 'Français', lang: 'fr' },
  { code: 'ja', dir: 'ja', name: 'Japanese',           endonym: '日本語',    lang: 'ja' },
  { code: 'zh', dir: 'zh', name: 'Simplified Chinese', endonym: '中文',      lang: 'zh-Hans' },
  { code: 'ko', dir: 'ko', name: 'Korean',             endonym: '한국어',    lang: 'ko' },
]

const FINDINGS = {
  type: 'object',
  properties: {
    findings: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          file: { type: 'string' },
          severity: { type: 'string', enum: ['blocker', 'major', 'minor'] },
          category: { type: 'string' },
          problem: { type: 'string' },
          evidence: { type: 'string' },
          fix: { type: 'string' },
        },
        required: ['file', 'severity', 'category', 'problem', 'evidence', 'fix'],
      },
    },
  },
  required: ['findings'],
}

const perLocale = await pipeline(
  LOCALES,

  // stage 1 — home + contact
  L => agent(`${PRE}

Read ${SITE}\\LANG_TEMPLATE.md, then the two Spanish pages you are mirroring:
${SITE}\\index.html and ${SITE}\\contacto.html, plus their English counterparts in en\\ for
cross-reference on wording.

YOUR TASK — create the ${L.name} versions of the home and contact pages:
  ${SITE}\\${L.dir}\\index.html
  ${SITE}\\${L.dir}\\contact.html

The structure, classes, section order, images and alt-text subjects are IDENTICAL to the Spanish
pages. Only the human-readable text changes. Set lang="${L.lang}" on <html>, mark ${L.endonym} as the
current item in the switcher, and point the other six items at the counterparts of THESE pages.

Translation rules — all from I18N.md, which you have read:
 - UI strings come from the §4 table for ${L.code}. Do not improvise them.
 - Trade vocabulary comes from the §5 glossary for ${L.code}. A dictionary-literal rendering of
   'worsted', 'woolen', 'top' or 'upholstery' is a defect.
 - §6 lists what is never translated: the two company names, the postal address, the phone numbers,
   the email, the coordinates, the wordmark artwork, and every numeral.
 - §7 gives the register for ${L.name}. Follow it exactly, including punctuation conventions.
 - The hero h1 on the home page is the ${L.name} rendering of «Más de 170 años en el mercado lanero
   y textil». The pull quote is the ${L.name} rendering of «Actualmente, produce las telas de lana
   más finas de América.»
 - Alt text is translated too, describing the same photograph as CONTENT.md §6 describes it.
 - The contact page keeps the address label semantics of I18N.md §4 lbl.address for ${L.code}.

Write the files UTF-8. Return a terse report plus anything that resisted faithful translation.`,
    { label: `traducir:${L.code}:1`, phase: 'Traducción', effort: 'high' }),

  // stage 2 — about + products + processes
  (_prev, L) => agent(`${PRE}

Read ${SITE}\\LANG_TEMPLATE.md and your own ${SITE}\\${L.dir}\\index.html (you just wrote it) so the
chrome, the switcher and the register stay identical. Then read the three Spanish pages you are
mirroring: ${SITE}\\nosotros.html, ${SITE}\\productos.html and ${SITE}\\procesos.html, plus their
English counterparts in en\\.

YOUR TASK — create the remaining three ${L.name} pages:
  ${SITE}\\${L.dir}\\about.html
  ${SITE}\\${L.dir}\\products.html
  ${SITE}\\${L.dir}\\processes.html

Same rule: identical structure and classes, only the text changes. lang="${L.lang}".

Specific to these three:
 - about.html carries all EIGHT values in the source order, mission, vision, philosophy, markets,
   the environmental commitment with its two lists, and the quality policy. Nothing may be dropped
   or merged away.
 - products.html carries all THIRTEEN product families in the source order. Their ${L.name} labels
   are given verbatim in the I18N.md §5 table — use those exact strings, do not re-translate them.
   The source has no descriptions for the families, so write none.
 - processes.html carries all FIVE stages in order with their full source text.
 - Every switcher item points at the counterpart of the page it sits on, so about.html links to
   '../nosotros.html' for Spanish and '../fr/about.html' for French, and so on.

Write the files UTF-8. Return a terse report plus anything that resisted faithful translation.`,
    { label: `traducir:${L.code}:2`, phase: 'Traducción', effort: 'high' }),

  // stage 3 — native-level review of this locale
  (_prev, L) => agent(`${PRE}

You are REVIEWING the ${L.name} locale. Do not edit any file.

Review all five pages in ${SITE}\\${L.dir}\\ as a native ${L.name} speaker who also knows the wool
textile trade, checking against CONTENT.md, I18N.md and the Spanish originals at the site root.

Report a finding for each of these that you actually find:
 - INVENTED CONTENT: any sentence, number, claim, product or service not traceable to CONTENT.md.
   Quote the exact string. This is always a blocker.
 - MISSING CONTENT: walk the checklist — 8 values, 13 product families, 5 process stages, both
   phone numbers, both company names, mission, vision, philosophy, markets, environmental policy
   with both lists, quality policy.
 - TERMINOLOGY: any trade term that departs from the I18N.md §5 glossary, or any product label that
   is not the exact string from the §5 table.
 - REGISTER AND GRAMMAR: violations of the I18N.md §7 rules for ${L.name} — wrong politeness level,
   wrong pronoun, wrong punctuation convention, spacing errors. For Japanese: です・ます consistency
   and 全角/半角 handling. For Chinese: mainland vocabulary and full-width punctuation. For Korean:
   합쇼체 and 띄어쓰기. For French: the typographic spaces and « ». For Italian: the voi form.
 - UNTRANSLATED LEFTOVERS: any Spanish or English text still sitting in the page, and conversely
   anything from I18N.md §6 that was translated when it should not have been — company names,
   address, phones, email, coordinates, numerals.
 - LINKS: verify every switcher href and every asset path resolves on disk from inside ${L.dir}\\.
   Assets must be ../assets/…, Spanish links must use the Spanish filenames.
 - ENCODING: any mojibake, and confirm <meta charset="utf-8"> comes first in <head>.
 - lang="${L.lang}" present, and eight hreflang alternates.

Be concrete: exact file, exact offending string, exact fix. An empty list is a valid answer.`,
    { label: `revisar:${L.code}`, phase: 'Revisión', effort: 'high', schema: FINDINGS }),
)

const all = perLocale.filter(Boolean).flatMap(r => (r && r.findings) || [])
const rank = { blocker: 0, major: 1, minor: 2 }
all.sort((a, b) => rank[a.severity] - rank[b.severity])
log(`${all.length} findings: ${all.filter(f => f.severity === 'blocker').length} blockers, ${all.filter(f => f.severity === 'major').length} major, ${all.filter(f => f.severity === 'minor').length} minor`)

if (!all.length) return { findings: [], note: 'no findings' }

// ─────────────────────────────── Phase 4 — fixes ───────────────────────────────
phase('Correcciones')

const groups = LOCALES
  .map(L => ({ L, items: all.filter(f => (f.file || '').replace(/\\/g, '/').includes(`${L.dir}/`)) }))
  .filter(g => g.items.length)
const orphans = all.filter(f => !groups.some(g => g.items.includes(f)))
if (orphans.length && groups.length) groups[0].items.push(...orphans)

const fixes = await parallel(groups.map(g => () =>
  agent(`${PRE}

The ${g.L.name} pages have been reviewed. Apply the findings below to ${SITE}\\${g.L.dir}\\ only.

${JSON.stringify(g.items, null, 2)}

How to work:
 - VERIFY each finding first: open the file and confirm the quoted evidence is really there.
   Reviewers misread sometimes. If a finding is wrong, skip it and say so — never "fix" a
   non-problem, and never delete correct content to satisfy a bad finding.
 - Fix every blocker and major. Fix minors unless one contradicts I18N.md or the design system.
 - Never resolve a content finding by inventing replacement copy. If something must go, delete it.
 - Other fixers are working on other locale folders at the same time. Stay inside your own folder.
   The single exception: if a finding names assets/css/site.css or assets/js/site.js, do NOT edit
   it — report it back instead, so one owner can make that change.
 - Use Edit, surgically.

Return a terse report: fixed, skipped and why, plus anything you had to escalate.`,
    { label: `corregir:${g.L.code}`, phase: 'Correcciones', effort: 'high' })
))

return {
  counts: {
    blocker: all.filter(f => f.severity === 'blocker').length,
    major: all.filter(f => f.severity === 'major').length,
    minor: all.filter(f => f.severity === 'minor').length,
  },
  findings: all,
  fixReports: fixes.filter(Boolean),
}
