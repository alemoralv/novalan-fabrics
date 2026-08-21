const {Wordmark,Icon,Button,Rule}=window.NovalanDesignSystem_054783;

function SiteHeader({route,go}){
  const nav=[["colecciones","Colecciones"],["tejidos","Tejidos"],["taller","El taller"],["contacto","Contacto"]];
  return <header style={{position:"sticky",top:0,zIndex:30,background:"var(--surface-page)",borderBottom:"1px solid var(--border-hairline)"}}>
    <div style={{maxWidth:1440,margin:"0 auto",padding:"0 var(--page-margin)",height:82,display:"flex",alignItems:"center",justifyContent:"space-between",gap:"var(--space-7)"}}>
      <Wordmark variant="wordmark" width={132} onClick={()=>go("home")} style={{cursor:"pointer"}}/>
      <nav style={{display:"flex",gap:"var(--space-6)"}}>
        {nav.map(([k,l])=><button key={k} onClick={()=>go(k)} style={{border:0,background:"transparent",cursor:"pointer",
          font:"var(--type-label)",fontSize:"var(--fs-label-lg)",letterSpacing:"var(--ls-label-tight)",textTransform:"uppercase",
          color:route===k?"var(--text-primary)":"var(--text-secondary)",paddingBottom:2,whiteSpace:"nowrap",
          borderBottom:"1px solid "+(route===k?"var(--border-solid)":"transparent")}}>{l}</button>)}
      </nav>
      <div style={{display:"flex",alignItems:"center",gap:"var(--space-5)"}}>
        <span style={{font:"var(--type-label)",letterSpacing:"var(--ls-label-tight)",textTransform:"uppercase",color:"var(--text-muted)"}}>MX / ES</span>
        <Icon name="search" size={18}/>
        <Button size="sm" variant="secondary" onClick={()=>go("contacto")}>Cotizar</Button>
      </div>
    </div>
  </header>;
}

function SiteFooter(){
  const cols=[["Colecciones",["Otoño 2026","Lino lavado","Manta de telar","Lanas de Tlaxcala"]],
    ["Casa",["El taller","Trazabilidad","Prensa","Trabaja con nosotros"]],
    ["Ayuda",["Guía de cuidado","Envíos y cambios","Mayoreo","Contacto"]]];
  return <footer data-nv-theme="ink" style={{background:"var(--nv-ink-900)",color:"var(--nv-paper-300)",marginTop:"var(--section-y)"}}>
    <div style={{maxWidth:1440,margin:"0 auto",padding:"var(--space-8) var(--page-margin) var(--space-6)",
      display:"grid",gridTemplateColumns:"1.4fr repeat(3,1fr)",gap:"var(--space-7)"}}>
      <div style={{display:"grid",gap:"var(--space-4)",alignContent:"start"}}>
        <Wordmark variant="wordmark" tone="paper" width={150}/>
        <p style={{font:"var(--type-body)",fontSize:"var(--fs-body-sm)",color:"rgba(246,243,236,.7)",maxWidth:"32ch",margin:0}}>
          Telares y acabados en Puebla, México. Tejemos por metro, por rollo y por encargo desde 1983.</p>
      </div>
      {cols.map(([t,items])=><div key={t} style={{display:"grid",gap:"var(--space-3)",alignContent:"start"}}>
        <span style={{font:"var(--type-label)",letterSpacing:"var(--ls-label)",textTransform:"uppercase",color:"var(--nv-khaki-300)"}}>{t}</span>
        {items.map(i=><a key={i} href="#" style={{font:"var(--type-body)",fontSize:"var(--fs-body-sm)",color:"rgba(246,243,236,.78)",textDecoration:"none"}}>{i}</a>)}
      </div>)}
    </div>
    <div style={{maxWidth:1440,margin:"0 auto",padding:"var(--space-4) var(--page-margin) var(--space-6)"}}>
      <Rule tone="hairline" style={{background:"rgba(246,243,236,.2)"}}/>
      <div style={{display:"flex",justifyContent:"space-between",paddingTop:"var(--space-4)",
        font:"var(--type-label)",fontSize:"var(--fs-label)",letterSpacing:"var(--ls-label-tight)",textTransform:"uppercase",color:"rgba(246,243,236,.5)"}}>
        <span>© 2026 Novalan Textiles S.A. de C.V.</span><span>Aviso de privacidad · Términos</span>
      </div>
    </div>
  </footer>;
}
Object.assign(window,{SiteHeader,SiteFooter});