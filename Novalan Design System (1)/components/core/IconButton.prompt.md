Icon-only action. Always pass `label` — icons never carry meaning alone.

```jsx
<IconButton icon={<Icon name="search" size={18} />} label="Buscar" />
<IconButton icon={<Icon name="x" size={18} />} label="Cerrar" variant="outline" />
```

md is 44×44 (the mobile hit target). Use `solid` only for a single dominant action.