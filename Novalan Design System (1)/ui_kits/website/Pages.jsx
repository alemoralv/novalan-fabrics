const {Button,Figure,Rule,Tag,Card,Swatch,SpecList,Input,Select,Icon,Badge}=window.NovalanDesignSystem_054783;

function Colecciones({go}){
  const [fil,setFil]=React.useState("Todo");
  const items=[["Camisa Ombré","$2,480","khaki","canvas","Prendas"],["Manta de Telar","$3,150","walnut","herringbone","Casa"],
    ["Cojín Crudo","$890","paper","plain","Casa"],["Rebozo Negro","$4,200","ink","twill","Prendas"],
    ["Mantel Lino 240","$1,980","khaki","plain","Mesa"],["Sábana Arena","$3,900","paper","twill","Cama"],
    ["Toalla Telar","$740","walnut","plain","Baño"],["Saco Nogal","$5,600","ink","herringbone","Prendas"]];
  const shown=fil==="Todo"?items:items.filter(i=>i[4]===fil);
  return <main style={{maxWidth:1440,margin:"0 auto",padding:"var(--space-8) var(--page-margin) 0"}}>
    <div style={{display:"grid",gap:"var(--space-4)",paddingBottom:"var(--space-6)"}}>
      <span className="nv-label">Colecciones</span>
      <h1 style={{font:"var(--type-h1)",margin:0}}>Otoño 2026</h1>
      <p style={{font:"var(--type-body)",fontSize:"var(--fs-body-lg)",maxWidth:"58ch",margin:0,color:"var(--text-secondary)"}}>
        Cuarenta y dos piezas tejidas en lino, algodón y lana. Todas se pueden pedir por metro.</p>
    </div>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"var(--space-5)",padding:"var(--space-4) 0",borderTop:"1px solid var(--border-hairline)",borderBottom:"1px solid var(--border-hairline)"}}>
      <div style={{display:"flex",gap:"var(--space-3)",flexWrap:"wrap"}}>
        {["Todo","Prendas","Casa","Mesa","Cama","Baño"].map(t=><Tag key={t} selected={fil===t} onClick={()=>setFil(t)}>{t}</Tag>)}
      </div>
      <Select options={["Novedades","Precio menor","Precio mayor"]} size="sm" style={{width:190}}/>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"var(--gutter)",paddingTop:"var(--space-6)"}}>
      {shown.map(([n,p,t,w,c])=><Card key={n} interactive padding="none" onClick={()=>go("producto")}>
        <Figure ratio="4 / 5" tone={t} weave={w} label={c}/>
        <div style={{padding:"var(--space-4) var(--space-4) var(--space-5)",display:"grid",gap:4}}>
          <span style={{font:"var(--type-h4)"}}>{n}</span>
          <span style={{fontFamily:"var(--font-mono)",fontSize:"var(--fs-body-sm)",color:"var(--text-accent)"}}>{p} MXN</span>
        </div>
      </Card>)}
    </div>
  </main>;
}

function Tejidos({go}){
  const rows=[["NV-0042","Lino lavado 240","100% lino","240 g/m²","150 cm","$310","success"],
    ["NV-0118","Algodón sarga","100% algodón org.","310 g/m²","160 cm","$248","success"],
    ["NV-0207","Lana Tlaxcala","70% lana / 30% alg.","420 g/m²","140 cm","$620","warning"],
    ["NV-0311","Hemp canvas","100% hemp","330 g/m²","150 cm","$395","success"],
    ["NV-0402","Mezclilla selvedge","98% alg. / 2% ea.","390 g/m²","76 cm","$540","danger"]];
  const est={success:["En existencia","success"],warning:["En producción","warning"],danger:["Agotado","danger"]};
  return <main style={{maxWidth:1440,margin:"0 auto",padding:"var(--space-8) var(--page-margin) 0"}}>
    <div style={{display:"grid",gridTemplateColumns:"1fr 380px",gap:"var(--space-9)",alignItems:"start"}}>
      <div>
        <span className="nv-label">Catálogo de tejidos</span>
        <h1 style={{font:"var(--type-h1)",margin:"var(--space-3) 0 var(--space-6)"}}>Por metro y por rollo</h1>
        <div style={{display:"grid"}}>
          <div style={{display:"grid",gridTemplateColumns:"90px 1.4fr 1fr 90px 80px 90px 130px",gap:"var(--space-4)",padding:"0 0 10px",
            font:"var(--type-label)",fontSize:"var(--fs-label)",letterSpacing:"var(--ls-label-tight)",textTransform:"uppercase",color:"var(--text-muted)",borderBottom:"1px solid var(--border-solid)"}}>
            <span>Lote</span><span>Tejido</span><span>Composición</span><span>Gramaje</span><span>Ancho</span><span>Precio/m</span><span>Estado</span>
          </div>
          {rows.map(r=><div key={r[0]} style={{display:"grid",gridTemplateColumns:"90px 1.4fr 1fr 90px 80px 90px 130px",gap:"var(--space-4)",
            padding:"14px 0",borderBottom:"1px solid var(--border-hairline)",alignItems:"center",font:"var(--type-body)",fontSize:"var(--fs-body-sm)"}}>
            <span style={{fontFamily:"var(--font-mono)",fontSize:12}}>{r[0]}</span>
            <span style={{font:"var(--type-h4)",fontSize:17}}>{r[1]}</span>
            <span style={{color:"var(--text-secondary)"}}>{r[2]}</span>
            <span style={{fontFamily:"var(--font-mono)",fontSize:12}}>{r[3]}</span>
            <span style={{fontFamily:"var(--font-mono)",fontSize:12}}>{r[4]}</span>
            <span style={{fontFamily:"var(--font-mono)",fontSize:12}}>{r[5]}</span>
            <Badge tone={est[r[6]][1]} dot>{est[r[6]][0]}</Badge>
          </div>)}
        </div>
      </div>
      <Card padding="lg" variant="solid" style={{display:"grid",gap:"var(--space-4)"}}>
        <span className="nv-label">Muestrario</span>
        <h3 style={{font:"var(--type-h3)",margin:0}}>Cinco muestras sin costo</h3>
        <p style={{font:"var(--type-body)",fontSize:"var(--fs-body-sm)",color:"var(--text-secondary)",margin:0}}>
          Enviamos cortes de 10 × 10 cm a cualquier parte de la República en 3 días hábiles.</p>
        <Input label="Correo de trabajo" placeholder="compras@tumarca.mx"/>
        <Input label="Código postal" placeholder="72000"/>
        <Button fullWidth onClick={()=>go("contacto")}>Solicitar muestrario</Button>
      </Card>
    </div>
  </main>;
}

function Taller(){
  return <main style={{maxWidth:1440,margin:"0 auto",padding:"var(--space-8) var(--page-margin) 0"}}>
    <span className="nv-label">El taller</span>
    <h1 style={{font:"var(--type-h1)",margin:"var(--space-3) 0 var(--space-6)",maxWidth:"22ch"}}>Puebla, seis telares, cuarenta y tres años</h1>
    <Figure ratio="21 / 9" tone="ink" weave="twill" label="Interior del taller"/>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"var(--space-7)",paddingTop:"var(--space-7)"}}>
      {[["1983","Abrimos con seis telares de lanzadera y un contrato de manteles para hoteles del centro."],
        ["2004","Instalamos la lavandería enzimática propia: el acabado deja de salir del taller."],
        ["2026","Trazabilidad por lote y muestrario digital para clientes de mayoreo."]].map(([y,t])=>
        <div key={y} style={{display:"grid",gap:"var(--space-3)"}}>
          <span style={{font:"var(--type-h3)",fontFamily:"var(--font-display)"}}>{y}</span>
          <hr className="nv-rule"/>
          <p style={{font:"var(--type-body)",color:"var(--text-secondary)",margin:0}}>{t}</p>
        </div>)}
    </div>
    <div style={{paddingTop:"var(--space-8)",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--space-9)",alignItems:"center"}}>
      <Figure ratio="4 / 5" tone="khaki" weave="herringbone" label="Detalle de urdimbre" caption="Urdimbre de lino, telar 3"/>
      <div style={{display:"grid",gap:"var(--space-4)"}}>
        <h2 style={{font:"var(--type-h2)",margin:0}}>Trazabilidad por lote</h2>
        <p style={{font:"var(--type-body)",fontSize:"var(--fs-body-lg)",margin:0,color:"var(--text-secondary)"}}>
          Cada rollo sale con su ficha: origen del hilo, telar, fecha de lavado y quién lo revisó.</p>
        <SpecList items={[{label:"Hilo",value:"Lino europeo, Normandía",mono:false},{label:"Telar",value:"Lanzadera 3"},
          {label:"Lavado",value:"Enzimático, 60 min"},{label:"Revisión",value:"M. Ordóñez",mono:false}]}/>
      </div>
    </div>
  </main>;
}

function Contacto(){
  return <main style={{maxWidth:1440,margin:"0 auto",padding:"var(--space-8) var(--page-margin) 0"}}>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--space-9)"}}>
      <div style={{display:"grid",gap:"var(--space-5)",alignContent:"start"}}>
        <span className="nv-label">Contacto</span>
        <h1 style={{font:"var(--type-h1)",margin:0,maxWidth:"16ch"}}>Cuéntanos qué necesitas tejer</h1>
        <SpecList items={[{label:"Taller",value:"Av. Reforma 118, Puebla, Pue.",mono:false},
          {label:"Showroom",value:"Colima 214, Roma Norte, CDMX",mono:false},
          {label:"Teléfono",value:"+52 222 145 8890"},{label:"Correo",value:"hola@novalan.mx",mono:false}]}/>
        <div style={{display:"flex",gap:"var(--space-4)",color:"var(--text-secondary)"}}>
          <Icon name="instagram" size={18}/><Icon name="linkedin" size={18}/><Icon name="mail" size={18}/>
        </div>
      </div>
      <Card padding="lg" style={{display:"grid",gap:"var(--space-4)"}}>
        <Input label="Nombre"/>
        <Input label="Empresa" placeholder="Opcional"/>
        <Input label="Correo" placeholder="nombre@empresa.mx"/>
        <Select label="Tipo de proyecto" options={["Mayoreo por rollo","Pedido a medida","Prensa","Otro"]}/>
        <Input label="Metros estimados" placeholder="120"/>
        <Button fullWidth>Enviar mensaje</Button>
        <span style={{font:"var(--type-body-sm)",fontSize:"var(--fs-caption)",color:"var(--text-muted)"}}>Respondemos en menos de 24 horas hábiles.</span>
      </Card>
    </div>
  </main>;
}
Object.assign(window,{Colecciones,Tejidos,Taller,Contacto});