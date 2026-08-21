# UI kit — Portal de mayoreo (B2B)

Trade portal: sign-in, filterable fabric catalogue, fabric detail with quote/sample dialog.

| File | Contents |
| --- | --- |
| `index.html` | Auth gate → catalogue → detail. Click any card to open a fabric. |
| `Portal.jsx` | `Login`, `PortalChrome`, `Catalogo` (filter rail + grid), `Detalle` (specs, colourways, quote Dialog), `FABRICS` fixture |

Patterns worth copying
- Split-screen sign-in: ink woven panel + paper form column.
- Filter rail is checkboxes and selects on a hairline border, never a card.
- Applied filters echo back as removable `Tag`s above the grid.
- Every fabric shows lote / gramaje / ancho / precio in mono, plus a stock `Badge`.
