export function Input({label,hint,error,value,onChange,placeholder,type="text",disabled=false,readOnly=false,size="md",prefix,suffix,style,...rest}){
  const [f,setF]=React.useState(false);
  const h={sm:"var(--control-h-sm)",md:"var(--control-h)",lg:"var(--control-h-lg)"}[size];
  return <label style={{display:"grid",gap:"var(--space-2)",...style}}>
    {label&&<span style={{font:"var(--type-label)",letterSpacing:"var(--ls-label)",textTransform:"uppercase",color:"var(--text-muted)"}}>{label}</span>}
    <span style={{display:"flex",alignItems:"center",gap:"var(--space-3)",height:h,padding:"0 var(--space-4)",
      background:disabled?"var(--state-disabled-bg)":"var(--surface-card)",
      border:"1px solid "+(error?"var(--status-danger-fg)":f?"var(--border-solid)":"var(--border-hairline-strong)"),
      transition:"var(--transition-ink)"}}>
      {prefix}
      <input type={type} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled} readOnly={readOnly||(value!==undefined&&!onChange)}
        onFocus={()=>setF(true)} onBlur={()=>setF(false)}
        style={{flex:1,minWidth:0,border:0,outline:"none",background:"transparent",font:"var(--type-body)",
          fontSize:"var(--fs-body-sm)",color:"var(--text-primary)"}} {...rest}/>
      {suffix}
    </span>
    {(hint||error)&&<span style={{font:"var(--type-body-sm)",fontSize:"var(--fs-caption)",color:error?"var(--status-danger-fg)":"var(--text-muted)"}}>{error||hint}</span>}
  </label>;
}