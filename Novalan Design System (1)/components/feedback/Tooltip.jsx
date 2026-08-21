export function Tooltip({children,content,placement="top",style,...rest}){
  const [on,setOn]=React.useState(false);
  const pos=placement==="bottom"?{top:"calc(100% + 8px)"}:placement==="right"?{left:"calc(100% + 8px)",top:"50%",transform:"translateY(-50%)"}:{bottom:"calc(100% + 8px)"};
  return <span style={{position:"relative",display:"inline-flex",...style}} onMouseEnter={()=>setOn(true)} onMouseLeave={()=>setOn(false)} {...rest}>
    {children}
    <span role="tooltip" style={{position:"absolute",zIndex:40,...pos,left:pos.left||"50%",
      transform:(pos.transform||"translateX(-50%)")+" translateY("+(on?"0":"3px")+")",
      opacity:on?1:0,pointerEvents:"none",transition:"opacity var(--dur-fast) var(--ease-standard),transform var(--dur-fast) var(--ease-standard)",
      background:"var(--nv-ink-900)",color:"var(--nv-paper-300)",padding:"7px 10px",whiteSpace:"nowrap",
      font:"var(--type-label)",fontSize:"var(--fs-label)",letterSpacing:"var(--ls-label-tight)",textTransform:"uppercase"}}>{content}</span>
  </span>;
}