export function Switch({label,checked=false,onChange,disabled=false,style,...rest}){
  return <label style={{display:"inline-flex",alignItems:"center",gap:"var(--space-3)",cursor:disabled?"not-allowed":"pointer",opacity:disabled?.5:1,...style}}>
    <span onClick={()=>!disabled&&onChange&&onChange(!checked)}
      style={{width:38,height:18,padding:2,display:"inline-flex",alignItems:"center",
        background:checked?"var(--nv-ink-900)":"var(--surface-sunken)",
        border:"1px solid "+(checked?"var(--nv-ink-900)":"var(--border-hairline-strong)"),
        transition:"var(--transition-ink)"}} {...rest}>
      <span style={{width:14,height:14,background:checked?"var(--nv-khaki-300)":"var(--nv-paper-100)",
        transform:"translateX("+(checked?18:0)+"px)",transition:"transform var(--dur-fast) var(--ease-standard)",
        boxShadow:"var(--shadow-sheet)"}}/>
    </span>
    {label&&<span style={{font:"var(--type-body)",fontSize:"var(--fs-body-sm)",color:"var(--text-primary)"}}>{label}</span>}
  </label>;
}