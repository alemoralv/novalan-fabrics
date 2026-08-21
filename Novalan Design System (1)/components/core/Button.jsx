export function Button({children,variant="primary",size="md",disabled=false,fullWidth=false,iconRight,iconLeft,as="button",style,...rest}){
  const [h,setH]=React.useState(false),[p,setP]=React.useState(false);
  const m={sm:{h:"var(--control-h-sm)",px:"var(--control-px-sm)",fs:"10px"},md:{h:"var(--control-h)",px:"var(--control-px)",fs:"var(--fs-label-lg)"},lg:{h:"var(--control-h-lg)",px:"38px",fs:"12px"}}[size];
  const base={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"var(--space-3)",
    height:variant==="link"?"auto":m.h,padding:variant==="link"?"0":"0 "+m.px,width:fullWidth?"100%":"auto",
    font:"var(--type-button)",fontSize:m.fs,letterSpacing:"var(--ls-label-tight)",textTransform:"uppercase",
    border:"1px solid transparent",borderRadius:"var(--radius-none)",cursor:disabled?"not-allowed":"pointer",
    transition:"var(--transition-ink)",textDecoration:"none",whiteSpace:"nowrap",boxSizing:"border-box"};
  const skin={
    primary:{background:h&&!disabled?"var(--nv-walnut-700)":"var(--nv-ink-900)",color:"var(--nv-paper-300)",borderColor:h&&!disabled?"var(--nv-walnut-700)":"var(--nv-ink-900)"},
    secondary:{background:h&&!disabled?"var(--state-hover-surface)":"transparent",color:"var(--text-primary)",borderColor:"var(--border-solid)"},
    accent:{background:h&&!disabled?"var(--nv-khaki-700)":"var(--nv-khaki-500)",color:"var(--nv-ink-900)",borderColor:"transparent"},
    ghost:{background:h&&!disabled?"var(--state-hover-surface)":"transparent",color:"var(--text-secondary)",borderColor:"transparent"},
    link:{background:"transparent",color:h?"var(--text-link-hover)":"var(--text-link)",borderColor:"transparent",textDecoration:"underline",textUnderlineOffset:"5px"}
  }[variant];
  const dis=disabled?{background:variant==="primary"||variant==="accent"?"var(--state-disabled-bg)":"transparent",color:"var(--state-disabled-fg)",borderColor:variant==="secondary"?"var(--border-hairline)":"transparent"}:null;
  const El=as;
  return <El disabled={as==="button"?disabled:undefined} onMouseEnter={()=>setH(true)} onMouseLeave={()=>{setH(false);setP(false)}}
    onMouseDown={()=>setP(true)} onMouseUp={()=>setP(false)}
    style={{...base,...skin,...dis,opacity:p&&!disabled?.86:1,...style}} {...rest}>{iconLeft}{children}{iconRight}</El>;
}