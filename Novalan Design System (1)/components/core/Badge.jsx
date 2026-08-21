export function Badge({children,tone="neutral",dot=false,style,...rest}){
  const t={neutral:{bg:"var(--surface-sunken)",fg:"var(--text-secondary)"},ink:{bg:"var(--nv-ink-900)",fg:"var(--nv-paper-300)"},
    accent:{bg:"var(--nv-khaki-100)",fg:"var(--nv-walnut-700)"},success:{bg:"var(--status-success-bg)",fg:"var(--status-success-fg)"},
    warning:{bg:"var(--status-warning-bg)",fg:"var(--status-warning-fg)"},danger:{bg:"var(--status-danger-bg)",fg:"var(--status-danger-fg)"}}[tone];
  return <span style={{display:"inline-flex",alignItems:"center",gap:"var(--space-2)",padding:"5px 9px",background:t.bg,color:t.fg,
    font:"var(--type-label)",letterSpacing:"var(--ls-label-tight)",textTransform:"uppercase",borderRadius:"var(--radius-none)",...style}} {...rest}>
    {dot&&<span style={{width:5,height:5,borderRadius:"var(--radius-pill)",background:"currentColor"}}/>}{children}</span>;
}