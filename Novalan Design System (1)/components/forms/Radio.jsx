export function Radio({label,description,checked=false,onChange,disabled=false,name,style,...rest}){
  return <label style={{display:"flex",gap:"var(--space-3)",alignItems:"flex-start",cursor:disabled?"not-allowed":"pointer",opacity:disabled?.5:1,...style}}>
    <span onClick={()=>!disabled&&onChange&&onChange(true)} data-name={name}
      style={{width:16,height:16,marginTop:2,flex:"0 0 auto",borderRadius:"var(--radius-pill)",display:"inline-flex",alignItems:"center",justifyContent:"center",
        background:"var(--surface-card)",border:"1px solid "+(checked?"var(--nv-ink-900)":"var(--border-hairline-strong)"),transition:"var(--transition-ink)"}} {...rest}>
      {checked&&<span style={{width:8,height:8,borderRadius:"var(--radius-pill)",background:"var(--nv-ink-900)"}}/>}
    </span>
    <span style={{display:"grid",gap:2}}>
      <span style={{font:"var(--type-body)",fontSize:"var(--fs-body-sm)",lineHeight:1.4,color:"var(--text-primary)"}}>{label}</span>
      {description&&<span style={{font:"var(--type-body-sm)",fontSize:"var(--fs-caption)",color:"var(--text-muted)"}}>{description}</span>}
    </span>
  </label>;
}