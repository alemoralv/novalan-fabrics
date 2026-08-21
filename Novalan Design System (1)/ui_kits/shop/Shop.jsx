const {Button,IconButton,Figure,Rule,Tag,Card,Swatch,SpecList,Input,Select,Icon,Badge,Radio,Checkbox,Toast,Tabs,Wordmark,Dialog}=window.NovalanDesignSystem_054783;

function ShopHeader({count,openCart}){
  return <header style={{position:"sticky",top:0,zIndex:30,background:"var(--surface-page)",borderBottom:"1px solid var(--border-hairline)"}}>
    <div style={{padding:"0 var(--space-7)",height:74,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <div style={{display:"flex",alignItems:"center",gap:"var(--space-7)"}}>
        <Wordmark variant="wordmark" width={118}/>
        <nav style={{display:"flex",gap:"var(--space-5)"}}>
          {["Prendas","Casa","Tejidos","Rebajas"].map(l=><span key={l} style={{font:"var(--type-label)",fontSize:"var(--fs-label-lg)",letterSpacing:"var(--ls-label-tight)",textTransform:"uppercase",color:"var(--text-secondary)"}}>{l}</span>)}
        </nav>
      </div>
      <div style={{display:"flex",alignItems:"center",gap:"var(--space-2)"}}>
        <IconButton icon={<Icon name="search" size={18}/>} label="Buscar"/>
        <IconButton icon={<Icon name="user" size={18}/>} label="Cuenta"/>
        <span style={{position:"relative"}}>
          <IconButton icon={<Icon name="shopping-bag" size={18}/>} label="Bolsa" onClick={openCart}/>
          {count>0&&<span style={{position:"absolute",top:4,right:2,minWidth:16,height:16,padding:"0 4px",background:"var(--nv-ink-900)",color:"var(--nv-paper-300)",
            display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-mono)",fontSize:10}}>{count}</span>}
        </span>
      </div>
    </div>
  </header>;
}

function ProductPage({add}){
  const [color,setColor]=React.useState("Nogal");
  const [talla,setTalla]=React.useState("M");
  const [tab,setTab]=React.useState("ficha");
  return <main style={{padding:"var(--space-6) var(--space-7) 0",display:"grid",gridTemplateColumns:"1.25fr 1fr",gap:"var(--space-9)",alignItems:"start"}}>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:2}}>
      <Figure ratio="4 / 5" tone="khaki" weave="canvas" label="Frente" style={{gridColumn:"span 2"}}/>
      <Figure ratio="1 / 1" tone="walnut" weave="twill" label="Detalle"/>
      <Figure ratio="1 / 1" tone="paper" weave="herringbone" label="Textura"/>
    </div>
    <div style={{display:"grid",gap:"var(--space-5)",position:"sticky",top:98}}>
      <div style={{display:"grid",gap:"var(--space-2)"}}>
        <span className="nv-label">Otoño 2026 · Lote NV-0042</span>
        <h1 style={{font:"var(--type-h1)",fontSize:44,margin:0}}>Camisa Ombré</h1>
        <span style={{fontFamily:"var(--font-mono)",fontSize:17,color:"var(--text-accent)"}}>$2,480 MXN</span>
      </div>
      <p style={{font:"var(--type-body)",margin:0,color:"var(--text-secondary)"}}>
        Lino lavado de 240 g/m² teñido en degradado a mano. Cae suelta, se arruga bonito y se ablanda con cada lavado.</p>
      <div style={{display:"grid",gap:"var(--space-3)"}}>
        <span className="nv-label">Colorido — {color}</span>
        <div style={{display:"flex",gap:"var(--space-3)"}}>
          {[["Negro","var(--nv-ink-900)","plain"],["Nogal","var(--nv-walnut-700)","twill"],["Khaki","var(--nv-khaki-500)","twill"],["Crudo","var(--nv-khaki-100)","plain"]].map(([n,c,w])=>
            <Swatch key={n} color={c} weave={w} size={52} selected={color===n} onClick={()=>setColor(n)}/>)}
        </div>
      </div>
      <div style={{display:"grid",gap:"var(--space-3)"}}>
        <span className="nv-label">Talla</span>
        <div style={{display:"flex",gap:"var(--space-2)"}}>
          {["XS","S","M","L","XL"].map(t=><Tag key={t} selected={talla===t} onClick={()=>setTalla(t)} style={{minWidth:44,justifyContent:"center"}}>{t}</Tag>)}
        </div>
        <Button variant="link" size="sm" iconRight={<Icon name="ruler" size={14}/>}>Guía de tallas</Button>
      </div>
      <div style={{display:"grid",gap:"var(--space-3)"}}>
        <Button fullWidth size="lg" onClick={()=>add({name:"Camisa Ombré",color,talla,price:2480})}>Agregar a la bolsa</Button>
        <div style={{display:"flex",gap:"var(--space-3)"}}>
          <Button variant="secondary" fullWidth>Solicitar muestra</Button>
          <IconButton variant="outline" icon={<Icon name="heart" size={18}/>} label="Guardar" size="lg"/>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"var(--space-3)"}}>
          <Badge tone="success" dot>En existencia</Badge>
          <span style={{font:"var(--type-body-sm)",color:"var(--text-muted)"}}>Envío en 3–5 días hábiles a todo México</span>
        </div>
      </div>
      <Rule/>
      <Tabs items={[{value:"ficha",label:"Ficha"},{value:"cuidado",label:"Cuidado"},{value:"envio",label:"Envío"}]} value={tab} onChange={setTab}/>
      {tab==="ficha"&&<SpecList items={[{label:"Composición",value:"100% lino europeo",mono:false},{label:"Gramaje",value:"240 g/m²"},
        {label:"Ancho de tela",value:"150 cm"},{label:"Acabado",value:"Lavado enzimático",mono:false},{label:"Hecho en",value:"Puebla, México",mono:false}]}/>}
      {tab==="cuidado"&&<p style={{font:"var(--type-body)",color:"var(--text-secondary)",margin:0}}>Lava en frío, del revés y con jabón neutro. Seca a la sombra. Plancha tibia si quieres, aunque el lino se ve mejor vivido.</p>}
      {tab==="envio"&&<SpecList items={[{label:"Estándar",value:"5–7 días · $150"},{label:"Exprés",value:"2–3 días · $320"},{label:"Cambios",value:"30 días sin costo",mono:false}]}/>}
    </div>
  </main>;
}

function CartDrawer({items,close,checkout,remove}){
  const total=items.reduce((s,i)=>s+i.price,0);
  return <div style={{position:"fixed",inset:0,zIndex:50,display:"flex",justifyContent:"flex-end"}}>
    <div onClick={close} style={{position:"absolute",inset:0,background:"var(--scrim-ink)",backdropFilter:"var(--blur-veil)"}}/>
    <aside style={{position:"relative",width:420,background:"var(--surface-card)",borderLeft:"1px solid var(--border-solid)",display:"flex",flexDirection:"column"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"var(--space-5) var(--space-5) var(--space-4)"}}>
        <h3 style={{font:"var(--type-h3)",margin:0}}>Tu bolsa</h3>
        <IconButton icon={<Icon name="x" size={18}/>} label="Cerrar" onClick={close}/>
      </div>
      <Rule/>
      <div style={{flex:1,overflow:"auto",padding:"var(--space-4) var(--space-5)",display:"grid",gap:"var(--space-4)",alignContent:"start"}}>
        {items.length===0&&<span style={{font:"var(--type-body)",color:"var(--text-muted)"}}>Tu bolsa está vacía.</span>}
        {items.map((it,i)=><div key={i} style={{display:"grid",gridTemplateColumns:"72px 1fr auto",gap:"var(--space-4)",alignItems:"start"}}>
          <Figure ratio="4 / 5" tone="khaki" weave="canvas" label=""/>
          <div style={{display:"grid",gap:4}}>
            <span style={{font:"var(--type-h4)",fontSize:17}}>{it.name}</span>
            <span style={{font:"var(--type-body-sm)",color:"var(--text-muted)"}}>{it.color} · Talla {it.talla}</span>
            <Button variant="link" size="sm" onClick={()=>remove(i)}>Quitar</Button>
          </div>
          <span style={{fontFamily:"var(--font-mono)",fontSize:13}}>${it.price.toLocaleString("es-MX")}</span>
        </div>)}
      </div>
      <div style={{padding:"var(--space-5)",borderTop:"1px solid var(--border-hairline)",display:"grid",gap:"var(--space-4)"}}>
        <SpecList dense items={[{label:"Subtotal",value:"$"+total.toLocaleString("es-MX")},{label:"Envío",value:"$150"},{label:"Total",value:"$"+(total?total+150:0).toLocaleString("es-MX")+" MXN"}]}/>
        <Button fullWidth size="lg" disabled={!items.length} onClick={checkout}>Pagar</Button>
      </div>
    </aside>
  </div>;
}

function Checkout({items,back,done}){
  const [envio,setEnvio]=React.useState("std");
  const total=items.reduce((s,i)=>s+i.price,0)+(envio==="std"?150:320);
  return <main style={{padding:"var(--space-6) var(--space-7) var(--space-9)",display:"grid",gridTemplateColumns:"1.2fr 420px",gap:"var(--space-9)",alignItems:"start"}}>
    <div style={{display:"grid",gap:"var(--space-6)"}}>
      <div style={{display:"grid",gap:"var(--space-2)"}}>
        <Button variant="link" size="sm" onClick={back}>← Seguir viendo</Button>
        <h1 style={{font:"var(--type-h1)",fontSize:44,margin:0}}>Pago</h1>
      </div>
      <Rule label="Datos de envío"/>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--space-4)"}}>
        <Input label="Nombre"/><Input label="Apellidos"/>
        <Input label="Correo" placeholder="nombre@correo.mx" style={{gridColumn:"span 2"}}/>
        <Input label="Calle y número" style={{gridColumn:"span 2"}}/>
        <Input label="Colonia"/><Input label="Código postal" placeholder="06700"/>
        <Select label="Estado" options={["Ciudad de México","Puebla","Jalisco","Nuevo León","Yucatán"]}/>
        <Input label="Teléfono" placeholder="55 1234 5678"/>
      </div>
      <Rule label="Entrega"/>
      <div style={{display:"grid",gap:"var(--space-3)"}}>
        <Radio label="Estándar — 5 a 7 días hábiles · $150" checked={envio==="std"} onChange={()=>setEnvio("std")}/>
        <Radio label="Exprés — 2 a 3 días hábiles · $320" checked={envio==="exp"} onChange={()=>setEnvio("exp")}/>
        <Checkbox label="Guardar esta dirección para la próxima" checked={true} onChange={()=>{}}/>
      </div>
    </div>
    <Card padding="lg" variant="solid" style={{display:"grid",gap:"var(--space-5)",position:"sticky",top:98}}>
      <span className="nv-label">Resumen</span>
      {items.map((it,i)=><div key={i} style={{display:"grid",gridTemplateColumns:"56px 1fr auto",gap:"var(--space-3)",alignItems:"center"}}>
        <Figure ratio="1 / 1" tone="khaki" weave="canvas" label=""/>
        <div style={{display:"grid"}}><span style={{font:"var(--type-body)",fontSize:14}}>{it.name}</span>
          <span style={{font:"var(--type-body-sm)",fontSize:12,color:"var(--text-muted)"}}>{it.color} · {it.talla}</span></div>
        <span style={{fontFamily:"var(--font-mono)",fontSize:12}}>${it.price.toLocaleString("es-MX")}</span>
      </div>)}
      <SpecList dense items={[{label:"Envío",value:envio==="std"?"$150":"$320"},{label:"IVA incluido",value:"—"},{label:"Total",value:"$"+total.toLocaleString("es-MX")+" MXN"}]}/>
      <Button fullWidth size="lg" onClick={done}>Confirmar pedido</Button>
      <span style={{font:"var(--type-body-sm)",fontSize:12,color:"var(--text-muted)"}}>Pago seguro. Facturamos a petición.</span>
    </Card>
  </main>;
}

function Confirmed({back,folio}){
  return <main style={{padding:"var(--space-10) var(--space-7)",display:"grid",placeItems:"center"}}>
    <div style={{maxWidth:520,display:"grid",gap:"var(--space-5)",justifyItems:"start"}}>
      <span className="nv-label">Pedido {folio}</span>
      <h1 style={{font:"var(--type-h1)",margin:0}}>Gracias, ya está en el taller.</h1>
      <p style={{font:"var(--type-body)",fontSize:"var(--fs-body-lg)",color:"var(--text-secondary)",margin:0}}>
        Te mandamos el número de guía en cuanto salga de Puebla. Si necesitas factura, respóndenos ese correo.</p>
      <SpecList items={[{label:"Folio",value:folio},{label:"Entrega estimada",value:"12–16 sep"},{label:"Envío",value:"Estándar",mono:false}]} style={{width:"100%"}}/>
      <Button onClick={back}>Seguir comprando</Button>
    </div>
  </main>;
}
Object.assign(window,{ShopHeader,ProductPage,CartDrawer,Checkout,Confirmed});