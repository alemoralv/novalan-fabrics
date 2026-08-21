export function Dialog({open=true,title,children,footer,onClose,width=520,style,...rest}){
  if(!open) return null;
  return <div style={{position:"fixed",inset:0,zIndex:60,display:"flex",alignItems:"center",justifyContent:"center",padding:"var(--space-6)"}}>
    <div onClick={onClose} style={{position:"absolute",inset:0,background:"var(--scrim-ink)",backdropFilter:"var(--blur-veil)"}}/>
    <div role="dialog" aria-modal="true" style={{position:"relative",width:width,maxWidth:"100%",background:"var(--surface-card)",
      border:"1px solid var(--border-solid)",boxShadow:"var(--shadow-overlay)",...style}} {...rest}>
      <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between",gap:"var(--space-5)",padding:"var(--space-5) var(--space-6) var(--space-4)"}}>
        <h3 style={{font:"var(--type-h3)",margin:0}}>{title}</h3>
        <button aria-label="Cerrar" onClick={onClose} style={{border:0,background:"transparent",cursor:"pointer",font:"var(--type-body)",fontSize:18,color:"var(--text-muted)",lineHeight:1}}>×</button>
      </div>
      <hr style={{border:0,height:1,background:"var(--border-hairline)",margin:0}}/>
      <div style={{padding:"var(--space-5) var(--space-6)",font:"var(--type-body)",color:"var(--text-secondary)"}}>{children}</div>
      {footer&&<div style={{display:"flex",justifyContent:"flex-end",gap:"var(--space-3)",padding:"0 var(--space-6) var(--space-6)"}}>{footer}</div>}
    </div>
  </div>;
}