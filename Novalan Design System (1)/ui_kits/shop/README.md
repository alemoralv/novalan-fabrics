# UI kit — Tienda en línea

Consumer shop flow: product detail → add to bag → cart drawer → checkout → confirmation. All state is fake and local.

| File | Contents |
| --- | --- |
| `index.html` | Flow shell: PDP, drawer, checkout, confirmation, toast |
| `Shop.jsx` | `ShopHeader`, `ProductPage`, `CartDrawer`, `Checkout`, `Confirmed` |

Patterns worth copying
- Colourway selection uses `Swatch` (offset outline), sizes use `Tag`.
- Every number — price, gramaje, folio — is mono.
- The drawer sits on `--scrim-ink` with `--blur-veil`; it is the only blurred surface in the system.
- Prices are written `$2,480 MXN`; addresses use colonia + CP.
