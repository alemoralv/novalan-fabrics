Text field. Labels are uppercase micro-labels, never floating placeholders.

```jsx
<Input label="Correo" placeholder="nombre@empresa.mx" />
<Input label="Metros" suffix={<span className="nv-label">m</span>} />
<Input label="RFC" error="Formato inválido" />
```

Placeholders show a real Mexican example, not "Enter your…". Pass `onChange` alongside any `value`; a `value` with no handler is treated as read-only so static specimens don't warn.