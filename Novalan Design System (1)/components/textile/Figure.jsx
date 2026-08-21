export function Figure({src,alt="",caption,ratio="4 / 5",weave="canvas",tone="khaki",label="Imagen",overlay,style,...rest}){
  const grounds={khaki:"var(--nv-khaki-500)",ink:"var(--nv-ink-900)",paper:"var(--nv-paper-400)",walnut:"var(--nv-walnut-500)"};
  const weaves={canvas:"var(--weave-canvas)",twill:"var(--weave-twill)",herringbone:"var(--weave-herringbone)",plain:"var(--weave-plain)",none:"none"};
  return <figure style={{margin:0,display:"grid",gap:"var(--space-3)",...style}} {...rest}>
    <div style={{position:"relative",aspectRatio:ratio,overflow:"hidden",background:grounds[tone],
      backgroundImage:src?"none":weaves[weave]}}>
      {src
        ? <img src={src} alt={alt} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
        : <span style={{position:"absolute",inset:0,display:"flex",alignItems:"flex-end",justifyContent:"center",padding:"var(--space-3)",
            font:"var(--type-label)",fontSize:"var(--fs-label)",letterSpacing:"var(--ls-label)",textTransform:"uppercase",
            color:tone==="ink"?"rgba(246,243,236,.6)":"rgba(11,11,11,.5)"}}>{label}</span>}
      {overlay&&<span style={{position:"absolute",inset:0,display:"flex",alignItems:"flex-end",padding:"var(--space-5)",
        background:"var(--protect-bottom)",color:"var(--nv-paper-300)"}}>{overlay}</span>}
    </div>
    {caption&&<figcaption style={{font:"var(--type-body-sm)",fontSize:"var(--fs-caption)",color:"var(--text-muted)"}}>{caption}</figcaption>}
  </figure>;
}