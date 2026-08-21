export function Tag({children,selected=false,removable=false,onRemove,tone="outline",style,...rest}){
  const [h,setH]=React.useState(false);
  const skin=selected?{background:"var(--nv-ink-900)",color:"var(--nv-paper-300)",borderColor:"var(--nv-ink-900)"}
    :tone==="accent"?{background:h?"var(--nv-khaki-100)":"transparent",color:"var(--nv-walnut-700)",borderColor:"var(--border-accent)"}
    :{background:h?"var(--state-hover-surface)":"transparent",color:"var(--text-secondary)",borderColor:"var(--border-hairline-strong)"};
  return <button onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{display:"inline-flex",alignItems:"center",gap:"var(--space-2)",padding:"7px 12px",border:"1px solid",
      font:"var(--type-label)",fontSize:"var(--fs-label)",letterSpacing:"var(--ls-label-tight)",textTransform:"uppercase",
      borderRadius:"var(--radius-none)",cursor:"pointer",transition:"var(--transition-ink)",...skin,...style}} {...rest}>
    {children}{removable&&<span onClick={e=>{e.stopPropagation();onRemove&&onRemove()}} style={{opacity:.6,fontSize:12,lineHeight:1}}>×</span>}</button>;
}