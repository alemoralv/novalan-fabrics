# Novalan — Design System

Novalan is a Mexican textile house: **weaving, finishing and selling cloth from Puebla since 1983.**
The supplied wordmark carries the line *"Weaving beauty since 1983"* — in Spanish, *"Tejiendo belleza desde 1983."*

The business runs on three fronts, all covered by this system:

| Front | Audience | Surface |
| --- | --- | --- |
| Own label — apparel & home textiles | Consumers in Mexico | `ui_kits/website`, `ui_kits/shop` |
| Mill — cloth by the metre and by the roll | Designers, brands, hotels, upholstery shops | `ui_kits/catalogue` |
| Floor — production and orders | Internal team in Puebla | `ui_kits/ops` |

**Language: Mexican Spanish.** All product copy, UI labels, currency (`$2,480 MXN`) and addresses (colonia + CP) are written for Mexico.

## Sources given

- **Logo artwork:** one PNG supplied by the user (`novalan.png`, 600×197, transparent) — wordmark plus engraved script tagline. Stored as `assets/novalan-wordmark.png`; light and cropped variants were derived from it programmatically.
- **Brand brief (chat):** "black with white, as well as khaki and brown, stylish, elegant, professional, modern; textile company; based in Mexico, use Mexican Spanish; textures are core."
- **Chosen direction:** *Atelier* — the couture-house route, picked from three built proposals (kept in `proposals/` for reference).
- No codebase, Figma file, deck, photography or font files were provided. Everything visual here derives from the logo artwork plus the brief; anything that had to be substituted is flagged below.

## Substitutions to replace (please send files)

1. **Fonts.** No licensed fonts were supplied. The wordmark is a high-contrast didone, so the system uses **Bodoni Moda** (display), **Archivo** (UI/body) and **Pinyon Script** (tagline only), all from Google Fonts via `tokens/fonts.css`. Send the real licences and I will swap the `@import` for local `@font-face` rules.
2. **Icons.** No icon set exists. The system uses **Lucide** at a 1.25 px stroke, loaded from CDN (`https://unpkg.com/lucide@0.544.0`). Flagged substitution — swap for a house set if one exists.
3. **Photography.** No imagery was supplied, so every picture slot is a `Figure` component rendering a woven placeholder block. Drop real photos in via `src` and nothing else changes.
4. **Textures** are built from CSS gradients (`tokens/texture.css`), not scanned cloth. Real scans of your own fabric would be a straight upgrade.

## CONTENT FUNDAMENTALS

**Voice.** A workshop that knows its craft and does not oversell it. Plain-spoken, specific, quietly proud. Facts before adjectives; if a claim can be measured, it is measured.

**Person.** The house is **nosotros** ("Tejemos por metro", "Lo lavamos con enzimas"). The customer is **tú**, always — never *usted*, even in the B2B portal, which is professional but not formal. Internal tools drop the pronoun entirely and speak in nouns ("Pedidos en piso", "Avanzar etapa").

**Casing.** Sentence case for headlines and body. UPPERCASE + `.24em` tracking for micro-labels, buttons, tabs and table headers — these are typographic furniture, not sentences, and never end in punctuation. Never Title Case A Whole Headline.

**Length.** Headlines under 8 words. Body paragraphs 2–3 sentences. Button labels 1–3 words ("Agregar a la bolsa", "Solicitar cotización", "Pedir muestra").

**Numbers and units.** Metric, mono type, always with unit: `240 g/m²`, `150 cm`, `320 m`, `$2,480 MXN`. Lots are `NV-0042`; orders are `OC-2026-114`. Never round a spec to sound nicer.

**Emoji: never.** Not in product, not in marketing, not in slides. No exclamation marks either, apart from genuine celebration (which basically never happens here).

**Examples**

- Hero: *"Tejido para durar generaciones"* → *"Lino, algodón y lana tejidos en telares de lanzadera y acabados a mano en nuestro taller."*
- Care copy: *"Lava en frío, del revés y con jabón neutro. Seca a la sombra. Plancha tibia si quieres, aunque el lino se ve mejor vivido."*
- B2B: *"Cinco muestras sin costo. Enviamos cortes de 10 × 10 cm a cualquier parte de la República en 3 días hábiles."*
- Confirmation: *"Gracias, ya está en el taller."* (not "¡Pedido exitoso!")
- Empty state: *"Tu bolsa está vacía."* / production column: *"Vacío."*

**Avoid:** "innovador", "disruptivo", "premium", "lujo", "experiencia única", "artesanal" as a slogan (show the craft instead), anything that reads like a marketplace listing.

## VISUAL FOUNDATIONS

**The idea.** A couture house's printed matter: black ink on warm paper, hairline rules doing all the structural work, one khaki accent per view, and cloth texture as the only imagery when photography is absent.

**Colour.** Black (`--nv-ink-900 #0B0B0B`) is text and structure. Paper (`#F6F3EC`) is the page; white is reserved for cards. Walnut (`#4A3728`) is the warm ink — accents, links, and the hover state of every black button. Khaki (`#A89B72`) is the brand's warmth and appears **once per view**, at scale (a hero ground, a swatch strip, a single accent button). Semantic colours are dye-bath muted — olive/ochre/brick — and only ever appear inside `Badge`, never as decoration. Ratio in practice: ~70% paper, ~20% ink, ~10% earth.

**Type.** Bodoni Moda for everything display, weight 400 (never bold — high-contrast didones get thin, not heavy). Archivo Light 300 for body at 1.7 line-height. Micro-labels 10–11 px uppercase, `.24em`. Every number in mono. Bodoni italic once per view for an aside or pull quote. Pinyon Script only for the tagline lockup — never for a headline.

**Layout.** 72 px page margins, 24 px gutters, 1440 max width, 64ch measure for prose. Sections are separated by a labelled hairline (`Rule label="…"`) and 96 px of air. Grids are 4-up for product, 3-up for fabric, 6-up for colourways. Sticky elements: site header (82 px), PDP buy column, ops sidebar, checkout summary. The only fixed overlays are the cart drawer, the order drawer and Dialog.

**Backgrounds.** Flat paper, flat ink, or a woven gradient texture — **never a colour gradient**. Full-bleed is reserved for the hero (21:9) and section-divider slides. Grain (`--grain`) can sit at 5% over an ink block. Never a photo behind body text without a protection layer.

**Borders and corners.** Square. `--radius-none` everywhere; the only curve in the system is the 5 px dot inside a Badge and the 16 px radio circle. Hairlines come in four weights: `.14` (default), `.28` (emphasis/hover), solid ink (tables, dialogs, inputs on focus), khaki (accent). Cards are a 1px hairline on white — no shadow, no radius, no coloured left border (the one exception: the ops bitácora hangs off a khaki 1px left rule).

**Shadow and depth.** Depth is paper tone and hairlines, not elevation. `--shadow-sheet` is barely there; `--shadow-hover` (a soft 30 px lift) appears only under `Card interactive` on hover; `--shadow-overlay` only under Dialog and drawers.

**Transparency and blur.** Exactly one use: modal and drawer scrims — `--scrim-ink` (58% black) + `--blur-veil` (14 px blur, 120% saturate). Text over imagery uses `--protect-bottom`, a bottom-up ink gradient — a capsule/plate is never used.

**Motion.** Restrained and linear-feeling. Colour transitions 160 ms, layout/opacity 240 ms, curtain reveals 640 ms, easing `cubic-bezier(.22,.61,.36,1)`. **No bounce, no spring, no scale-up-on-load.** Imagery may scale to 1.04 over 420 ms on hover. Everything collapses to 0 ms under `prefers-reduced-motion`.

**Hover states.** Black button → walnut fill. Secondary/ghost → 4% ink wash. Text link → walnut becomes black, underline stays. Card → hairline darkens to `.28` and a soft shadow appears. Icons never change colour on hover, only their container.

**Press states.** Opacity drops to `.86`. Nothing shrinks, nothing shifts — press is a dimming, not a squash.

**Imagery direction (for when real photos arrive).** Warm daylight, low saturation, visible texture and grain, cloth photographed on wood or lime plaster. Flat-lays and mill details over lifestyle. Portrait 4:5 for product, 1:1 for grids, 21:9 for heroes, 16:9 for editorial. Black and white is acceptable for taller/heritage imagery; never cool-toned, never HDR.

**Iconography — see ICONOGRAPHY below.**

## ICONOGRAPHY

- **The house has no icon set.** No SVGs, no icon font, no sprite were supplied. Substituted with **Lucide** (CDN, `unpkg.com/lucide@0.544.0`) because its 1-weight outline drawing survives next to hairline rules. **Flagged for replacement.**
- **Stroke weight is 1.25 px, always.** Sizes: 14 (inline with small text), 16 (default), 18 (toolbars), 20–24 (feature). Colour is `currentColor` — icons inherit ink, never carry their own hue.
- **Never filled, never duotone, never two weights on one screen.** No icon larger than 24 px in product UI; large icons are a different visual language (this brand uses type and cloth instead).
- **Icons never carry meaning alone.** Every icon-only control passes a `label`; ambiguous ones get a `Tooltip`.
- **Emoji: never.** **Unicode as icons:** only three — `×` (close), `→` (inline "keep going"), and the chevron drawn as a rotated 1px square in `Select`. Everything else is Lucide.
- Icons in use across the kits: `search`, `shopping-bag`, `heart`, `user`, `x`, `arrow-right`, `ruler`, `scissors`, `package`, `truck`, `leaf`, `file-text`, `download`, `clipboard-list`, `layers`, `users`, `settings`, `info`, `mail`, `instagram`, `linkedin`.
- The brand mark itself is **artwork, not an icon** — always the supplied PNG via `Wordmark`, never re-typed as live text.

## Intentional additions

The brief defined no component inventory, so this is an authored standard set. Three additions are textile-specific and exist because the business cannot be designed without them:

- **`Swatch`** — a colourway chip (colour + weave + lot code). The atom of a fabric business.
- **`SpecList`** — label/value spec rows. Every product, fabric and order carries measurable specs.
- **`Figure`** — image frame that renders a woven placeholder when no `src` is given, because no photography exists yet.
- **`Wordmark`** and **`Rule`** — the two brand primitives: logo artwork, and the hairline that structures every layout.

## Index

**Root**
- `styles.css` — the single entry point consumers link. `@import` lines only.
- `readme.md` — this file. `SKILL.md` — Agent Skills wrapper. `thumbnail.html` — homepage tile.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `borders.css`, `elevation.css`, `motion.css`, `texture.css`, `base.css`
- `assets/` — `novalan-wordmark.png` (supplied artwork) + derived `-light`, `-lockup-wordmark`, `-lockup-tagline` variants
- `guidelines/` — 20 foundation specimen cards (Colors, Type, Spacing, Brand, Motion)
- `proposals/` — the three original brand directions (A Atelier ← chosen, B Mill, C Loom)

**Components** — `window.NovalanDesignSystem_054783.*`
- `components/brand/` — `Wordmark`, `Icon`, `Rule`
- `components/core/` — `Button`, `IconButton`, `Card`, `Badge`, `Tag`
- `components/forms/` — `Input`, `Select`, `Checkbox`, `Radio`, `Switch`
- `components/navigation/` — `Tabs`
- `components/feedback/` — `Dialog`, `Toast`, `Tooltip`
- `components/textile/` — `Swatch`, `SpecList`, `Figure`

**UI kits**
- `ui_kits/website/` — marketing site: hero, collections, fabric catalogue table, mill story, contact
- `ui_kits/shop/` — PDP → cart drawer → checkout → confirmation
- `ui_kits/catalogue/` — B2B portal: sign-in, filterable catalogue, fabric detail, quote dialog
- `ui_kits/ops/` — internal: orders table with KPIs, production stage flow, order drawer

**Slides** — `slides/`: `title`, `section`, `statement`, `comparison`, `data`, `collection` (1280×720)

**Templates** — `templates/collection-deck/` (`CollectionDeck.dc.html`): the six slides above as a ready 1920×1080 deck consuming projects can start from.
