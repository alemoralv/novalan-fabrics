export function Icon({name,size=16,strokeWidth=1.25,color="currentColor",label,style,...rest}){
  const ref=React.useRef(null);
  React.useEffect(()=>{
    const host=ref.current; if(!host) return;
    host.innerHTML="";
    const i=document.createElement("i"); i.setAttribute("data-lucide",name); host.appendChild(i);
    const draw=()=>{ if(window.lucide&&window.lucide.createIcons) window.lucide.createIcons({attrs:{width:size,height:size,"stroke-width":strokeWidth,stroke:color}}); };
    draw(); const t=setTimeout(draw,150); return ()=>clearTimeout(t);
  },[name,size,strokeWidth,color]);
  return <span ref={ref} role={label?"img":"presentation"} aria-label={label} aria-hidden={label?undefined:true}
    style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:size,height:size,flex:"0 0 auto",...style}} {...rest}/>;
}