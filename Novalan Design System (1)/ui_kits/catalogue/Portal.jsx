const {Button,IconButton,Figure,Rule,Tag,Card,Swatch,SpecList,Input,Select,Icon,Badge,Checkbox,Switch,Tabs,Wordmark,Dialog,Tooltip}=window.NovalanDesignSystem_054783;

const FABRICS=[
  {code:"NV-0042",name:"Lino lavado 240",fibra:"Lino",gsm:"240 g/m²",ancho:"150 cm",precio:"$310",estado:["En existencia","success"],tone:"khaki",weave:"canvas"},
  {code:"NV-0118",name:"Algodón sarga",fibra:"Algodón",gsm:"310 g/m²",ancho:"160 cm",precio:"$248",estado:["En existencia","success"],tone:"paper",weave:"twill"},
  {code:"NV-0207",name:"Lana Tlaxcala",fibra:"Lana",gsm:"420 g/m²",ancho:"140 cm",precio:"$620",estado:["En producción","warning"],tone:"walnut",weave:"herringbone"},
  {code:"NV-0311",name:"Hemp canvas",fibra:"Hemp",gsm:"330 g/m²",ancho:"150 cm",precio:"$395",estado:["En existencia","success"],tone:"khaki",weave:"plain"},
  {code:"NV-0402",name:"Mezclilla selvedge",fibra:"Algodón",gsm:"390 g/m²",ancho:"76 cm",precio:"$540",estado:["Agotado","danger"],tone:"ink",weave:"twill"},
  {code:"NV-0455",name:"Gasa de lino",fibra:"Lino",gsm:"120 g/m²",ancho:"150 cm",precio:"$285",estado:["En existencia","success"],tone:"paper",weave:"plain"}
];

function Login({enter}){
  const [correo,setCorreo]=React.useState("");
  const [clave,setClave]=React.useState("");
  return <div style={{minHeight:"100vh",display:"grid",gridTemplateColumns:"1.15fr 480px"}}>
    <div style={{position:"relative",background:"var(--nv-ink-900)",backgroundImage:"var(--weave-twill)",padding:"var(--space-8)",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
      <Wordmark variant="wordmark" tone="paper" width={150}/>
      <div style={{display:"grid",gap:"var(--space-4)",maxWidth:"30ch"}}>
        <h1 style={{font:"var(--type-h1)",color:"var(--nv-paper-300)",margin:0}}>Portal de tejidos</h1>
        <p style={{font:"var(--type-body)",fontSize:"var(--fs-body-lg)",color:"rgba(246,243,236,.72)",margin:0}}>
          Precios por metro, existencias reales y muestrarios sin costo para clientes de mayoreo.</p>
      </div>
      <span style={{font:"var(--type-label)",letterSpacing:"var(--ls-label)",textTransform:"uppercase",color:"rgba(246,243,236,.45)"}}>Puebla · México</span>
    </div>
    <div style={{background:"var(--surface-page)",padding:"var(--space-8)",display:"grid",alignContent:"center",gap:"var(--space-5)"}}>
      <div style={{display:"grid",gap:"var(--space-2)"}}>
        <span className="nv-label">Acceso de clientes</span>
        <h2 style={{font:"var(--type-h2)",margin:0}}>Entra a tu cuenta</h2>
      </div>
      <Input label="Correo de trabajo" placeholder="compras@tumarca.mx" value={correo} onChange={e=>setCorreo(e.target.value)}/>
      <Input label="Contraseña" type="password" placeholder="••••••••" value={clave} onChange={e=>setClave(e.target.value)}/>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <Checkbox label="Mantener sesión" checked onChange={()=>{}}/>
        <Button variant="link" size="sm">¿Olvidaste tu clave?</Button>
      </div>
      <Button fullWidth size="lg" onClick={enter}>Entrar</Button>
      <Rule label="Sin cuenta"/>
      <Button variant="secondary" fullWidth>Solicitar acceso de mayoreo</Button>
    </div>
  </div>;
}

function PortalChrome({children,view,go}){
  return <div style={{minHeight:"100vh"}}>
    <header style={{position:"sticky",top:0,zIndex:30,background:"var(--surface-page)",borderBottom:"1px solid var(--border-hairline)"}}>
      <div style={{padding:"0 var(--space-7)",height:70,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center",gap:"var(--space-6)"}}>
          <Wordmark variant="wordmark" width={112} onClick={()=>go("catalogo")} style={{cursor:"pointer"}}/>
          <span style={{width:1,height:24,background:"var(--border-hairline)"}}/>
          <span className="nv-label">Portal de mayoreo</span>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"var(--space-4)"}}>
          <Tooltip content="Muestrario"><IconButton icon={<Icon name="package" size={18}/>} label="Muestrario"/></Tooltip>
          <IconButton icon={<Icon name="file-text" size={18}/>} label="Cotizaciones"/>
          <span style={{display:"flex",alignItems:"center",gap:8,font:"var(--type-body-sm)"}}>
            <span style={{width:26,height:26,background:"var(--nv-khaki-500)",display:"grid",placeItems:"center",fontFamily:"var(--font-mono)",fontSize:11}}>TM</span>
            Taller Mextlán</span>
        </div>
      </div>
    </header>
    {children}
  </div>;
}

function Catalogo({open}){
  const [fibras,setFibras]=React.useState(["Lino"]);
  const [solo,setSolo]=React.useState(false);
  const toggle=f=>setFibras(v=>v.includes(f)?v.filter(x=>x!==f):[...v,f]);
  const list=FABRICS.filter(f=>(!fibras.length||fibras.includes(f.fibra))&&(!solo||f.estado[1]==="success"));
  return <div style={{display:"grid",gridTemplateColumns:"260px 1fr",gap:0,alignItems:"start"}}>
    <aside style={{padding:"var(--space-6) var(--space-5)",borderRight:"1px solid var(--border-hairline)",display:"grid",gap:"var(--space-6)",position:"sticky",top:70}}>
      <div style={{display:"grid",gap:"var(--space-3)"}}>
        <span className="nv-label">Fibra</span>
        {["Lino","Algodón","Lana","Hemp"].map(f=><Checkbox key={f} label={f} checked={fibras.includes(f)} onChange={()=>toggle(f)}/>)}
      </div>
      <Rule/>
      <div style={{display:"grid",gap:"var(--space-3)"}}>
        <span className="nv-label">Gramaje</span>
        <Select options={["Todos","Ligero (< 200)","Medio (200–320)","Pesado (> 320)"]} size="sm"/>
        <span className="nv-label" style={{marginTop:8}}>Acabado</span>
        <Select options={["Todos","Crudo","Lavado enzimático","Teñido en pieza"]} size="sm"/>
      </div>
      <Rule/>
      <Switch label="Solo disponibles" checked={solo} onChange={setSolo}/>
    </aside>
    <main style={{padding:"var(--space-6) var(--space-7) var(--space-9)",display:"grid",gap:"var(--space-5)"}}>
      <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",gap:"var(--space-5)"}}>
        <div style={{display:"grid",gap:"var(--space-2)"}}>
          <span className="nv-label">Catálogo · Otoño 2026</span>
          <h1 style={{font:"var(--type-h2)",margin:0}}>{list.length} tejidos disponibles</h1>
        </div>
        <div style={{display:"flex",gap:"var(--space-3)",alignItems:"center"}}>
          <Input placeholder="Buscar por lote o nombre" size="sm" prefix={<Icon name="search" size={14}/>} style={{width:240}}/>
          <Button variant="secondary" size="sm" iconLeft={<Icon name="download" size={14}/>}>Lista de precios</Button>
        </div>
      </div>
      <div style={{display:"flex",gap:"var(--space-2)",flexWrap:"wrap"}}>
        {fibras.map(f=><Tag key={f} removable onRemove={()=>toggle(f)}>{f}</Tag>)}
        {solo&&<Tag removable onRemove={()=>setSolo(false)}>Disponibles</Tag>}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"var(--gutter)"}}>
        {list.map(f=><Card key={f.code} interactive padding="none" onClick={()=>open(f)}>
          <Figure ratio="4 / 3" tone={f.tone} weave={f.weave} label={f.fibra}/>
          <div style={{padding:"var(--space-4)",display:"grid",gap:"var(--space-3)"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:12}}>
              <span style={{font:"var(--type-h4)"}}>{f.name}</span>
              <span style={{fontFamily:"var(--font-mono)",fontSize:11,color:"var(--text-muted)",whiteSpace:"nowrap"}}>{f.code}</span>
            </div>
            <SpecList dense items={[{label:"Gramaje",value:f.gsm},{label:"Ancho",value:f.ancho},{label:"Precio/m",value:f.precio}]}/>
            <Badge tone={f.estado[1]} dot>{f.estado[0]}</Badge>
          </div>
        </Card>)}
      </div>
    </main>
  </div>;
}

function Detalle({f,back}){
  const [ask,setAsk]=React.useState(false);
  const [metros,setMetros]=React.useState("120");
  return <main style={{padding:"var(--space-6) var(--space-7) var(--space-9)",display:"grid",gap:"var(--space-6)"}}>
    <Button variant="link" size="sm" onClick={back}>← Catálogo</Button>
    <div style={{display:"grid",gridTemplateColumns:"1.2fr 1fr",gap:"var(--space-9)",alignItems:"start"}}>
      <div style={{display:"grid",gap:2,gridTemplateColumns:"1fr 1fr"}}>
        <Figure ratio="16 / 10" tone={f.tone} weave={f.weave} label="Rollo" style={{gridColumn:"span 2"}}/>
        <Figure ratio="1 / 1" tone={f.tone} weave="plain" label="Trama"/>
        <Figure ratio="1 / 1" tone="ink" weave="twill" label="Caída"/>
      </div>
      <div style={{display:"grid",gap:"var(--space-5)"}}>
        <div style={{display:"grid",gap:"var(--space-2)"}}>
          <span className="nv-label">Lote {f.code}</span>
          <h1 style={{font:"var(--type-h1)",fontSize:44,margin:0}}>{f.name}</h1>
          <span style={{fontFamily:"var(--font-mono)",fontSize:17,color:"var(--text-accent)"}}>{f.precio} MXN / metro</span>
        </div>
        <div style={{display:"flex",gap:"var(--space-3)",alignItems:"center"}}>
          <Badge tone={f.estado[1]} dot>{f.estado[0]}</Badge><Badge tone="accent">GOTS</Badge><Badge tone="neutral">Mín. 30 m</Badge>
        </div>
        <SpecList items={[{label:"Fibra",value:f.fibra,mono:false},{label:"Gramaje",value:f.gsm},{label:"Ancho útil",value:f.ancho},
          {label:"Encogimiento",value:"3 % urdimbre / 2 % trama"},{label:"Plazo",value:"4 semanas",mono:false},{label:"Telar",value:"Lanzadera 3"}]}/>
        <div style={{display:"grid",gap:"var(--space-3)"}}>
          <span className="nv-label">Coloridos disponibles</span>
          <div style={{display:"flex",gap:"var(--space-3)",flexWrap:"wrap"}}>
            {[["Crudo","var(--nv-khaki-100)"],["Arena","var(--nv-khaki-300)"],["Khaki","var(--nv-khaki-500)"],["Nogal","var(--nv-walnut-700)"],["Negro","var(--nv-ink-900)"]].map(([n,c])=>
              <Swatch key={n} name={n} color={c} weave={f.weave} size={64}/>)}
          </div>
        </div>
        <Rule/>
        <div style={{display:"grid",gap:"var(--space-3)"}}>
          <Input label="Metros a cotizar" value={metros} onChange={e=>setMetros(e.target.value)} suffix={<span className="nv-label">m</span>}/>
          <div style={{display:"flex",gap:"var(--space-3)"}}>
            <Button fullWidth onClick={()=>setAsk(true)}>Solicitar cotización</Button>
            <Button variant="secondary" fullWidth onClick={()=>setAsk(true)}>Pedir muestra</Button>
          </div>
        </div>
      </div>
    </div>
    <Dialog open={ask} title="Solicitar cotización" onClose={()=>setAsk(false)} width={520}
      footer={<><Button variant="ghost" onClick={()=>setAsk(false)}>Cancelar</Button><Button onClick={()=>setAsk(false)}>Enviar solicitud</Button></>}>
      <div style={{display:"grid",gap:"var(--space-4)"}}>
        <span>Confirmamos precio y plazo en menos de 24 horas hábiles.</span>
        <SpecList dense items={[{label:"Tejido",value:f.name,mono:false},{label:"Lote",value:f.code},{label:"Metros",value:metros+" m"}]}/>
        <Select label="Colorido" options={["Crudo","Arena","Khaki","Nogal","Negro"]}/>
        <Input label="Referencia interna" placeholder="OC-2026-114"/>
      </div>
    </Dialog>
  </main>;
}
Object.assign(window,{Login,PortalChrome,Catalogo,Detalle,FABRICS});