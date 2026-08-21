export function Select({label,hint,options=[],value,onChange,disabled=false,size="md",style,...rest}){
  const [f,setF]=React.useState(false);
  const h={sm:"var(--control-h-sm)",md:"var(--control-h)",lg:"var(--control-h-lg)"}[size];
  return <label style={{display:"grid",gap:"var(--space-2)",...style}}>
    {label&&<span style={{font:"var(--type-label)",letterSpacing:"var(--ls-label)",textTransform:"uppercase",color:"var(--text-muted)"}}>{label}</span>}
    <span style={{position:"relative",display:"block"}}>
      <select value={value} onChange={onChange} disabled={disabled} onFocus={()=>setF(true)} onBlur={()=>setF(false)}
        style={{appearance:"none",width:"100%",height:h,padding:"0 36px 0 var(--space-4)",
          background:disabled?"var(--state-disabled-bg)":"var(--surface-card)",color:"var(--text-primary)",
          border:"1px solid "+(f?"var(--border-solid)":"var(--border-hairline-strong)"),borderRadius:"var(--radius-none)",
          font:"var(--type-body)",fontSize:"var(--fs-body-sm)",outline:"none",transition:"var(--transition-ink)",cursor:disabled?"not-allowed":"pointer"}} {...rest}>
        {options.map(o=>{const v=typeof o==="string"?o:o.value,l=typeof o==="string"?o:o.label;return <option key={v} value={v}>{l}</option>;})}
      </select>
      <span aria-hidden="true" style={{position:"absolute",right:14,top:"50%",transform:"translateY(-60%) rotate(45deg)",
        width:6,height:6,borderRight:"1px solid var(--text-secondary)",borderBottom:"1px solid var(--text-secondary)",pointerEvents:"none"}}/>
    </span>
    {hint&&<span style={{font:"var(--type-body-sm)",fontSize:"var(--fs-caption)",color:"var(--text-muted)"}}>{hint}</span>}
  </label>;
}