const {Button,IconButton,Rule,Tag,Card,SpecList,Input,Select,Icon,Badge,Tabs,Wordmark,Switch,Swatch,Figure,Tooltip}=window.NovalanDesignSystem_054783;

const ORDERS=[
  {folio:"OC-2026-114",cliente:"Taller Mextlán",tejido:"Lino lavado 240",lote:"NV-0042",metros:"320",valor:"$99,200",etapa:["Tejido","warning"],entrega:"18 sep"},
  {folio:"OC-2026-118",cliente:"Casa Aurora",tejido:"Algodón sarga",lote:"NV-0118",metros:"150",valor:"$37,200",etapa:["Lavado","warning"],entrega:"21 sep"},
  {folio:"OC-2026-121",cliente:"Hotel Riviera",tejido:"Hemp canvas",lote:"NV-0311",metros:"600",valor:"$237,000",etapa:["Revisión","success"],entrega:"24 sep"},
  {folio:"OC-2026-125",cliente:"Estudio Nube",tejido:"Gasa de lino",lote:"NV-0455",metros:"80",valor:"$22,800",etapa:["Urdido","neutral"],entrega:"2 oct"},
  {folio:"OC-2026-127",cliente:"Marca Propia",tejido:"Lana Tlaxcala",lote:"NV-0207",metros:"240",valor:"$148,800",etapa:["Detenido","danger"],entrega:"—"}
];

function Sidebar({view,go}){
  const nav=[["pedidos","clipboard-list","Pedidos"],["produccion","layers","Producción"],["inventario","package","Inventario"],["clientes","users","Clientes"],["ajustes","settings","Ajustes"]];
  return <aside data-nv-theme="ink" style={{width:232,background:"var(--nv-ink-900)",color:"var(--nv-paper-300)",minHeight:"100vh",
    padding:"var(--space-5) var(--space-4)",display:"grid",gap:"var(--space-6)",alignContent:"start",position:"sticky",top:0}}>
    <Wordmark variant="wordmark" tone="paper" width={112} style={{margin:"var(--space-2) var(--space-2) 0"}}/>
    <nav style={{display:"grid",gap:2}}>
      {nav.map(([k,ic,l])=><button key={k} onClick={()=>go(k)} style={{display:"flex",alignItems:"center",gap:"var(--space-3)",
        padding:"11px 12px",border:0,cursor:"pointer",textAlign:"left",
        background:view===k?"rgba(246,243,236,.08)":"transparent",color:view===k?"var(--nv-paper-300)":"rgba(246,243,236,.62)",
        font:"var(--type-label)",fontSize:"var(--fs-label-lg)",letterSpacing:"var(--ls-label-tight)",textTransform:"uppercase"}}>
        <Icon name={ic} size={16}/>{l}</button>)}
    </nav>
    <div style={{padding:"var(--space-4) var(--space-3)",borderTop:"1px solid rgba(246,243,236,.2)",display:"grid",gap:"var(--space-2)"}}>
      <span style={{font:"var(--type-label)",letterSpacing:"var(--ls-label)",textTransform:"uppercase",color:"var(--nv-khaki-300)"}}>Turno actual</span>
      <span style={{fontFamily:"var(--font-mono)",fontSize:13}}>06:00 – 14:00</span>
      <span style={{font:"var(--type-body-sm)",fontSize:12,color:"rgba(246,243,236,.6)"}}>Telares 1–6 · Puebla</span>
    </div>
  </aside>;
}

function Pedidos({open}){
  const [tab,setTab]=React.useState("abiertos");
  return <main style={{flex:1,padding:"var(--space-6) var(--space-7) var(--space-9)",display:"grid",gap:"var(--space-5)",alignContent:"start"}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"var(--space-5)"}}>
      <div style={{display:"grid",gap:"var(--space-2)"}}>
        <span className="nv-label">Operación · Semana 38</span>
        <h1 style={{font:"var(--type-h2)",margin:0}}>Pedidos en piso</h1>
      </div>
      <div style={{display:"flex",gap:"var(--space-3)"}}>
        <Input placeholder="Buscar folio o cliente" size="sm" prefix={<Icon name="search" size={14}/>} style={{width:230}}/>
        <Button size="sm">Nuevo pedido</Button>
      </div>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"var(--gutter)"}}>
      {[["Metros comprometidos","1,390","m"],["Valor en piso","$545,000","MXN"],["Telares activos","5","de 6"],["Retrasos","1","pedido"]].map(([l,v,u])=>
        <Card key={l} padding="sm" variant="hairline" style={{display:"grid",gap:6}}>
          <span className="nv-label">{l}</span>
          <span style={{font:"var(--type-h3)",fontFamily:"var(--font-display)"}}>{v}</span>
          <span style={{font:"var(--type-body-sm)",fontSize:12,color:"var(--text-muted)"}}>{u}</span>
        </Card>)}
    </div>
    <Tabs items={[{value:"abiertos",label:"Abiertos",count:5},{value:"produccion",label:"En producción",count:3},{value:"cerrados",label:"Cerrados",count:28}]} value={tab} onChange={setTab}/>
    <div>
      <div style={{display:"grid",gridTemplateColumns:"130px 1.2fr 1.2fr 100px 90px 110px 120px 90px",gap:"var(--space-4)",padding:"0 0 10px",
        borderBottom:"1px solid var(--border-solid)",font:"var(--type-label)",fontSize:"var(--fs-label)",letterSpacing:"var(--ls-label-tight)",textTransform:"uppercase",color:"var(--text-muted)"}}>
        <span>Folio</span><span>Cliente</span><span>Tejido</span><span>Lote</span><span>Metros</span><span>Valor</span><span>Etapa</span><span>Entrega</span>
      </div>
      {ORDERS.map(o=><div key={o.folio} onClick={()=>open(o)} style={{display:"grid",gridTemplateColumns:"130px 1.2fr 1.2fr 100px 90px 110px 120px 90px",gap:"var(--space-4)",
        padding:"14px 0",borderBottom:"1px solid var(--border-hairline)",alignItems:"center",cursor:"pointer",font:"var(--type-body)",fontSize:"var(--fs-body-sm)"}}>
        <span style={{fontFamily:"var(--font-mono)",fontSize:12,whiteSpace:"nowrap"}}>{o.folio}</span>
        <span style={{font:"var(--type-body)",fontSize:14}}>{o.cliente}</span>
        <span style={{color:"var(--text-secondary)"}}>{o.tejido}</span>
        <span style={{fontFamily:"var(--font-mono)",fontSize:12,whiteSpace:"nowrap"}}>{o.lote}</span>
        <span style={{fontFamily:"var(--font-mono)",fontSize:12,whiteSpace:"nowrap"}}>{o.metros} m</span>
        <span style={{fontFamily:"var(--font-mono)",fontSize:12,whiteSpace:"nowrap"}}>{o.valor}</span>
        <Badge tone={o.etapa[1]} dot>{o.etapa[0]}</Badge>
        <span style={{fontFamily:"var(--font-mono)",fontSize:12,color:"var(--text-secondary)",whiteSpace:"nowrap"}}>{o.entrega}</span>
      </div>)}
    </div>
  </main>;
}

function Produccion(){
  const cols=[["Urdido",["OC-2026-125"]],["Tejido",["OC-2026-114","OC-2026-131"]],["Lavado",["OC-2026-118"]],["Revisión",["OC-2026-121"]],["Empaque",[]]];
  return <main style={{flex:1,padding:"var(--space-6) var(--space-7) var(--space-9)",display:"grid",gap:"var(--space-5)",alignContent:"start"}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end"}}>
      <div style={{display:"grid",gap:"var(--space-2)"}}>
        <span className="nv-label">Piso de producción</span>
        <h1 style={{font:"var(--type-h2)",margin:0}}>Flujo por etapa</h1>
      </div>
      <Switch label="Solo con retraso" checked={false} onChange={()=>{}}/>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:"var(--gutter)",alignItems:"start"}}>
      {cols.map(([etapa,items])=><div key={etapa} style={{display:"grid",gap:"var(--space-3)"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",paddingBottom:8,borderBottom:"1px solid var(--border-solid)"}}>
          <span className="nv-label">{etapa}</span><span style={{fontFamily:"var(--font-mono)",fontSize:11,color:"var(--text-muted)"}}>{items.length}</span>
        </div>
        {items.map(f=>{const o=ORDERS.find(x=>x.folio===f)||{folio:f,cliente:"Marca Propia",tejido:"Lino lavado 240",metros:"90",entrega:"5 oct"};
          return <Card key={f} padding="sm" style={{display:"grid",gap:8}}>
            <span style={{fontFamily:"var(--font-mono)",fontSize:11,color:"var(--text-muted)",whiteSpace:"nowrap"}}>{o.folio}</span>
            <span style={{font:"var(--type-h4)",fontSize:17}}>{o.cliente}</span>
            <span style={{font:"var(--type-body-sm)",fontSize:12,color:"var(--text-secondary)"}}>{o.tejido}</span>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:4,borderTop:"1px solid var(--border-hairline)"}}>
              <span style={{fontFamily:"var(--font-mono)",fontSize:11,whiteSpace:"nowrap"}}>{o.metros} m</span>
              <span style={{fontFamily:"var(--font-mono)",fontSize:11,color:"var(--text-muted)",whiteSpace:"nowrap"}}>{o.entrega}</span>
            </div>
          </Card>;})}
        {!items.length&&<div style={{height:64,border:"1px dashed var(--border-hairline-strong)",display:"grid",placeItems:"center",
          font:"var(--type-label)",fontSize:"var(--fs-label)",letterSpacing:"var(--ls-label)",textTransform:"uppercase",color:"var(--text-muted)"}}>Vacío</div>}
      </div>)}
    </div>
  </main>;
}

function OrderDrawer({o,close}){
  return <div style={{position:"fixed",inset:0,zIndex:50,display:"flex",justifyContent:"flex-end"}}>
    <div onClick={close} style={{position:"absolute",inset:0,background:"var(--scrim-ink)",backdropFilter:"var(--blur-veil)"}}/>
    <aside style={{position:"relative",width:460,background:"var(--surface-card)",borderLeft:"1px solid var(--border-solid)",overflow:"auto"}}>
      <div style={{padding:"var(--space-5)",display:"grid",gap:"var(--space-5)"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div style={{display:"grid",gap:6}}>
            <span className="nv-label">{o.folio}</span>
            <h3 style={{font:"var(--type-h3)",margin:0}}>{o.cliente}</h3>
          </div>
          <IconButton icon={<Icon name="x" size={18}/>} label="Cerrar" onClick={close}/>
        </div>
        <div style={{display:"flex",gap:"var(--space-2)"}}><Badge tone={o.etapa[1]} dot>{o.etapa[0]}</Badge><Badge tone="neutral">Mayoreo</Badge></div>
        <Figure ratio="16 / 9" tone="khaki" weave="canvas" label="Muestra de lote"/>
        <SpecList items={[{label:"Tejido",value:o.tejido,mono:false},{label:"Lote",value:o.lote},{label:"Metros",value:o.metros+" m"},
          {label:"Valor",value:o.valor+" MXN"},{label:"Entrega",value:o.entrega,mono:false},{label:"Telar",value:"Lanzadera 3"}]}/>
        <Rule label="Bitácora"/>
        <div style={{display:"grid",gap:"var(--space-4)"}}>
          {[["12 sep 08:40","Urdido terminado — M. Ordóñez"],["13 sep 11:05","Tejido al 60% — telar 3"],["14 sep 07:20","Paro por hilo faltante (2 h)"]].map(([t,d])=>
            <div key={t} style={{display:"grid",gap:4,paddingLeft:14,borderLeft:"1px solid var(--border-accent)"}}>
              <span style={{fontFamily:"var(--font-mono)",fontSize:11,color:"var(--text-muted)"}}>{t}</span>
              <span style={{font:"var(--type-body)",fontSize:14}}>{d}</span>
            </div>)}
        </div>
        <div style={{display:"flex",gap:"var(--space-3)"}}>
          <Button fullWidth>Avanzar etapa</Button><Button variant="secondary" fullWidth>Imprimir ficha</Button>
        </div>
      </div>
    </aside>
  </div>;
}
Object.assign(window,{Sidebar,Pedidos,Produccion,OrderDrawer,ORDERS});