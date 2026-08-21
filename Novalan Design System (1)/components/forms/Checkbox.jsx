export function Checkbox({label,description,checked=false,onChange,disabled=false,style,...rest}){
  return <label style={{display:"flex",gap:"var(--space-3)",alignItems:"flex-start",cursor:disabled?"not-allowed":"pointer",opacity:disabled?.5:1,...style}}>
    <span onClick={()=>!disabled&&onChange&&onChange(!checked)}
      style={{width:16,height:16,marginTop:2,flex:"0 0 auto",display:"inline-flex",alignItems:"center",justifyContent:"center",
        background:checked?"var(--nv-ink-900)":"var(--surface-card)",
        border:"1px solid "+(checked?"var(--nv-ink-900)":"var(--border-hairline-strong)"),transition:"var(--transition-ink)"}} {...rest}>
      {checked&&<span style={{width:8,height:4,borderLeft:"1px solid var(--nv-paper-300)",borderBottom:"1px solid var(--nv-paper-300)",transform:"rotate(-45deg) translate(1px,-1px)"}}/>}
    </span>
    <span style={{display:"grid",gap:2}}>
      <span style={{font:"var(--type-body)",fontSize:"var(--fs-body-sm)",lineHeight:1.4,color:"var(--text-primary)"}}>{label}</span>
      {description&&<span style={{font:"var(--type-body-sm)",fontSize:"var(--fs-caption)",color:"var(--text-muted)"}}>{description}</span>}
    </span>
  </label>;
}