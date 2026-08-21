export function Rule({tone="hairline",label,vertical=false,style,...rest}){
  const color=tone==="solid"?"var(--border-solid)":tone==="accent"?"var(--border-accent)":tone==="strong"?"var(--border-hairline-strong)":"var(--border-hairline)";
  if(vertical) return <span aria-hidden="true" style={{width:1,alignSelf:"stretch",background:color,...style}} {...rest}/>;
  if(!label) return <hr style={{border:0,height:1,margin:0,background:color,...style}} {...rest}/>;
  return <div style={{display:"flex",alignItems:"center",gap:"var(--space-4)",...style}} {...rest}>
    <span style={{font:"var(--type-label)",letterSpacing:"var(--ls-label)",textTransform:"uppercase",color:"var(--text-muted)",whiteSpace:"nowrap"}}>{label}</span>
    <span style={{flex:1,height:1,background:color}}/>
  </div>;
}