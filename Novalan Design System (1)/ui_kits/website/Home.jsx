const {Button,Figure,Rule,Tag,Icon,Card,Swatch}=window.NovalanDesignSystem_054783;

function Home({go}){
  return <main>
    {/* HERO — full-bleed editorial */}
    <section style={{position:"relative"}}>
      <div style={{aspectRatio:"21 / 9",background:"var(--nv-khaki-500)",backgroundImage:"var(--weave-canvas)",position:"relative"}}>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(90deg,rgba(11,11,11,.62),rgba(11,11,11,.05))"}}/>
        <div style={{position:"absolute",inset:0,maxWidth:1440,margin:"0 auto",padding:"0 var(--page-margin)",display:"flex",flexDirection:"column",justifyContent:"center",gap:"var(--space-5)"}}>
          <span style={{font:"var(--type-label)",letterSpacing:"var(--ls-label)",textTransform:"uppercase",color:"var(--nv-khaki-300)"}}>Otoño 2026 · Puebla</span>
          <h1 style={{font:"var(--type-hero)",color:"var(--nv-paper-300)",maxWidth:"18ch",margin:0}}>Tejido para durar generaciones</h1>
          <p style={{font:"var(--type-body)",fontSize:"var(--fs-body-lg)",color:"rgba(246,243,236,.82)",maxWidth:"46ch",margin:0}}>
            Lino, algodón y lana tejidos en telares de lanzadera y acabados a mano en nuestro taller.</p>
          <div style={{display:"flex",gap:"var(--space-3)",marginTop:"var(--space-2)"}}>
            <Button variant="accent" onClick={()=>go("colecciones")}>Ver colección</Button>
            <Button variant="secondary" style={{color:"var(--nv-paper-300)",borderColor:"rgba(246,243,236,.5)"}} onClick={()=>go("tejidos")}>Catálogo de tejidos</Button>
          </div>
        </div>
      </div>
    </section>

    {/* MANIFESTO */}
    <section style={{maxWidth:1440,margin:"0 auto",padding:"var(--section-y) var(--page-margin) 0"}}>
      <Rule label="La casa"/>
      <div style={{display:"grid",gridTemplateColumns:"1.1fr 1fr",gap:"var(--space-9)",paddingTop:"var(--space-6)"}}>
        <h2 style={{font:"var(--type-h1)",margin:0,maxWidth:"20ch"}}>Cuatro generaciones frente al telar.</h2>
        <div style={{display:"grid",gap:"var(--space-4)",alignContent:"start"}}>
          <p style={{font:"var(--type-body)",fontSize:"var(--fs-body-lg)",margin:0}}>
            Empezamos en 1983 con seis telares y un solo hilo: lino europeo crudo. Hoy tejemos para casas de moda, hoteles y talleres de tapicería en todo México.</p>
          <p style={{font:"var(--type-body)",color:"var(--text-secondary)",margin:0}}>
            Cada rollo lleva su número de lote y la firma de quien lo revisó. Si algo no pasa la revisión, no sale del taller.</p>
          <Button variant="link" size="sm" iconRight={<Icon name="arrow-right" size={14}/>} onClick={()=>go("taller")}>Conoce el taller</Button>
        </div>
      </div>
    </section>

    {/* FEATURED PRODUCTS */}
    <section style={{maxWidth:1440,margin:"0 auto",padding:"var(--section-y) var(--page-margin) 0"}}>
      <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between",gap:"var(--space-5)",paddingBottom:"var(--space-5)"}}>
        <h2 style={{font:"var(--type-h2)",margin:0}}>Piezas de temporada</h2>
        <Button variant="link" size="sm" onClick={()=>go("colecciones")}>Ver las 42 piezas</Button>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"var(--gutter)"}}>
        {[["Camisa Ombré","$2,480 MXN","khaki","canvas"],["Manta de Telar","$3,150 MXN","walnut","herringbone"],
          ["Cojín Crudo","$890 MXN","paper","plain"],["Rebozo Negro","$4,200 MXN","ink","twill"]].map(([n,p,t,w])=>
          <Card key={n} interactive padding="none">
            <Figure ratio="4 / 5" tone={t} weave={w} label="Producto"/>
            <div style={{padding:"var(--space-4) var(--space-4) var(--space-5)",display:"grid",gap:4}}>
              <span style={{font:"var(--type-h4)"}}>{n}</span>
              <span style={{fontFamily:"var(--font-mono)",fontSize:"var(--fs-body-sm)",color:"var(--text-accent)"}}>{p}</span>
            </div>
          </Card>)}
      </div>
    </section>

    {/* SWATCH STRIP */}
    <section style={{maxWidth:1440,margin:"0 auto",padding:"var(--section-y) var(--page-margin) 0"}}>
      <Rule label="Coloridos del taller"/>
      <div style={{display:"flex",gap:"var(--space-5)",paddingTop:"var(--space-6)",flexWrap:"wrap"}}>
        {[["Negro","NV-0B0B","var(--nv-ink-900)","plain"],["Nogal","NV-4A37","var(--nv-walnut-700)","twill"],
          ["Barro","NV-6B53","var(--nv-walnut-500)","herringbone"],["Khaki","NV-A89B","var(--nv-khaki-500)","twill"],
          ["Arena","NV-C4B9","var(--nv-khaki-300)","plain"],["Crudo","NV-D8CF","var(--nv-khaki-100)","plain"]].map(([n,c,col,w])=>
          <Swatch key={n} name={n} code={c} color={col} weave={w} size={124}/>)}
      </div>
    </section>

    {/* B2B BAND */}
    <section style={{maxWidth:1440,margin:"var(--section-y) auto 0",padding:"0 var(--page-margin)"}}>
      <div data-nv-theme="ink" style={{background:"var(--nv-ink-900)",color:"var(--nv-paper-300)",padding:"var(--space-8)",
        display:"grid",gridTemplateColumns:"1fr auto",gap:"var(--space-7)",alignItems:"center"}}>
        <div style={{display:"grid",gap:"var(--space-3)"}}>
          <span style={{font:"var(--type-label)",letterSpacing:"var(--ls-label)",textTransform:"uppercase",color:"var(--nv-khaki-300)"}}>Mayoreo</span>
          <h3 style={{font:"var(--type-h2)",margin:0,maxWidth:"24ch",color:"var(--nv-paper-300)"}}>Abre tu cuenta de tejidos por rollo</h3>
          <p style={{font:"var(--type-body)",color:"rgba(246,243,236,.76)",maxWidth:"52ch",margin:0}}>
            Precios por metro, muestrarios sin costo y plazos de producción visibles en tu portal.</p>
        </div>
        <div style={{display:"flex",gap:"var(--space-3)"}}>
          <Button variant="accent" onClick={()=>go("tejidos")}>Solicitar acceso</Button>
        </div>
      </div>
      <div style={{display:"flex",gap:"var(--space-3)",paddingTop:"var(--space-5)",flexWrap:"wrap"}}>
        {["Lino","Algodón orgánico","Lana de Tlaxcala","Hemp","Mezclilla"].map(t=><Tag key={t}>{t}</Tag>)}
      </div>
    </section>
  </main>;
}
Object.assign(window,{Home});