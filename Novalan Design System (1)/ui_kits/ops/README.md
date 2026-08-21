# UI kit — Panel de operación (internal)

Mill-floor dashboard: orders in production, stage flow, order drawer with bitácora.

| File | Contents |
| --- | --- |
| `index.html` | Sidebar navigation between Pedidos and Producción; click a row to open the drawer |
| `Ops.jsx` | `Sidebar` (ink theme), `Pedidos` (KPIs + table), `Produccion` (stage columns), `OrderDrawer`, `ORDERS` fixture |

Patterns worth copying
- Dense data uses hairline rows, never zebra striping or card-per-row.
- KPI cards show a display-serif number over a micro-label — no icons, no sparklines.
- Stage columns are hairline-headed lists; empty columns show a dashed "Vacío" slot.
- The log/bitácora entries hang off a khaki 1px left rule — the one place a left accent border is allowed.
