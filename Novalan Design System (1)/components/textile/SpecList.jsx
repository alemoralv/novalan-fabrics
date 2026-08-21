export function SpecList({items=[],dense=false,style,...rest}){
  return <dl style={{margin:0,display:"grid",...style}} {...rest}>
    {items.map((it,i)=><div key={i} style={{display:"flex",alignItems:"baseline",justifyContent:"space-between",gap:"var(--space-5)",
      padding:(dense?"7px":"11px")+" 0",borderTop:i===0?"none":"1px solid var(--border-hairline)"}}>
      <dt style={{font:"var(--type-label)",fontSize:"var(--fs-label)",letterSpacing:"var(--ls-label-tight)",textTransform:"uppercase",color:"var(--text-muted)"}}>{it.label}</dt>
      <dd style={{margin:0,font:"var(--type-body)",fontSize:"var(--fs-body-sm)",fontFamily:it.mono===false?"var(--font-ui)":"var(--font-mono)",color:"var(--text-primary)",textAlign:"right"}}>{it.value}</dd>
    </div>)}
  </dl>;
}