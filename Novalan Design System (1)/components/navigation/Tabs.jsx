export function Tabs({items=[],value,onChange,variant="underline",style,...rest}){
  const active=value!=null?value:(items[0]&&(items[0].value||items[0]));
  return <div role="tablist" style={{display:"flex",alignItems:"stretch",gap:variant==="underline"?"var(--space-6)":0,
    borderBottom:variant==="underline"?"1px solid var(--border-hairline)":"none",...style}} {...rest}>
    {items.map(it=>{
      const v=it.value||it,l=it.label||it,on=v===active;
      const box=variant==="underline"
        ?{padding:"0 0 12px",borderBottom:"1px solid "+(on?"var(--border-solid)":"transparent"),marginBottom:-1,color:on?"var(--text-primary)":"var(--text-muted)"}
        :{padding:"11px 18px",border:"1px solid "+(on?"var(--border-solid)":"var(--border-hairline)"),marginRight:-1,
          background:on?"var(--nv-ink-900)":"transparent",color:on?"var(--nv-paper-300)":"var(--text-secondary)"};
      return <button key={v} role="tab" aria-selected={on} onClick={()=>onChange&&onChange(v)}
        style={{background:"transparent",cursor:"pointer",font:"var(--type-button)",fontSize:"var(--fs-label-lg)",
          letterSpacing:"var(--ls-label-tight)",textTransform:"uppercase",transition:"var(--transition-ink)",
          borderRadius:"var(--radius-none)",border:"none",...box}}>
        {l}{it.count!=null&&<span style={{marginLeft:8,opacity:.55}}>{it.count}</span>}
      </button>;
    })}
  </div>;
}