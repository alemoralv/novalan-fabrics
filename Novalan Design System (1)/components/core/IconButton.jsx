export function IconButton({icon,label,variant="ghost",size="md",disabled=false,style,...rest}){
  const [h,setH]=React.useState(false);
  const d={sm:32,md:44,lg:52}[size];
  const skin={ghost:{background:h?"var(--state-hover-surface)":"transparent",color:"var(--text-primary)",borderColor:"transparent"},
    outline:{background:h?"var(--state-hover-surface)":"transparent",color:"var(--text-primary)",borderColor:"var(--border-solid)"},
    solid:{background:h?"var(--nv-walnut-700)":"var(--nv-ink-900)",color:"var(--nv-paper-300)",borderColor:"transparent"}}[variant];
  return <button aria-label={label} disabled={disabled} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{width:d,height:d,display:"inline-flex",alignItems:"center",justifyContent:"center",border:"1px solid transparent",
      borderRadius:"var(--radius-none)",cursor:disabled?"not-allowed":"pointer",transition:"var(--transition-ink)",
      opacity:disabled?.4:1,...skin,...style}} {...rest}>{icon}</button>;
}