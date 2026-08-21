Renders the Novalan logo artwork; use it anywhere the brand signs its name — never set "NOVALAN" as live type in a header or slide title.

```jsx
<Wordmark variant="full" width={240} />
<Wordmark variant="wordmark" tone="paper" width={140} href="/" />
```

Variants: `full` (wordmark + script tagline), `wordmark`, `tagline`. `tone="paper"` swaps to light artwork for black grounds. Clear space = cap height of the N on every side. Set `window.NV_ASSETS` to the relative assets path when mounting from a nested page.