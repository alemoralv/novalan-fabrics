export function Toast({children,tone="ink",action,onClose,style,...rest}){
  const skin={ink:{background:"var(--nv-ink-900)",color:"var(--nv-paper-300)"},
    success:{background:"var(--status-success-bg)",color:"var(--status-success-fg)"},
    danger:{background:"var(--status-danger-bg)",color:"var(--status-danger-fg)"}}[tone];
  return <div role="status" style={{display:"inline-flex",alignItems:"center",gap:"var(--space-5)",padding:"14px 18px",
    border:"1px solid transparent",boxShadow:"var(--shadow-overlay)",font:"var(--type-body)",fontSize:"var(--fs-body-sm)",...skin,...style}} {...rest}>
    <span>{children}</span>
    {action&&<span style={{font:"var(--type-button)",letterSpacing:"var(--ls-label-tight)",textTransform:"uppercase",
      textDecoration:"underline",textUnderlineOffset:"4px",cursor:"pointer"}}>{action}</span>}
    {onClose&&<button aria-label="Cerrar" onClick={onClose} style={{border:0,background:"transparent",color:"inherit",opacity:.6,cursor:"pointer",fontSize:16,lineHeight:1}}>×</button>}
  </div>;
}