export function Swatch({name,code,color,weave="canvas",size=88,selected=false,onClick,style,...rest}){
  const [h,setH]=React.useState(false);
  const weaves={plain:"var(--weave-plain)",twill:"var(--weave-twill)",herringbone:"var(--weave-herringbone)",none:"none",canvas:"var(--weave-twill)"};
  return <button onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{display:"grid",gap:"var(--space-2)",padding:0,border:0,background:"transparent",cursor:onClick?"pointer":"default",textAlign:"left",...style}} {...rest}>
    <span style={{display:"block",width:size,height:size,background:color,backgroundImage:weaves[weave],
      outline:"1px solid "+(selected?"var(--border-solid)":h?"var(--border-hairline-strong)":"var(--border-hairline)"),
      outlineOffset:selected?2:0,transition:"outline-color var(--dur-fast) var(--ease-standard),outline-offset var(--dur-fast) var(--ease-standard)"}}/>
    {(name||code)&&<span style={{display:"grid",gap:1,maxWidth:size}}>
      {name&&<span style={{font:"var(--type-label)",fontSize:"var(--fs-label)",letterSpacing:"var(--ls-label-tight)",textTransform:"uppercase",color:"var(--text-primary)"}}>{name}</span>}
      {code&&<span style={{font:"var(--type-body-sm)",fontSize:"var(--fs-caption)",color:"var(--text-muted)",fontFamily:"var(--font-mono)"}}>{code}</span>}
    </span>}
  </button>;
}