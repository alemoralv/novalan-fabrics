export function Card({children,variant="hairline",padding="md",interactive=false,as="div",style,...rest}){
  const [h,setH]=React.useState(false);
  const pad={none:0,sm:"var(--space-4)",md:"var(--space-5) var(--space-5) var(--space-6)",lg:"var(--space-6)"}[padding];
  const skin={
    hairline:{background:"var(--surface-card)",border:"1px solid var(--border-hairline)"},
    solid:{background:"var(--surface-card)",border:"1px solid var(--border-solid)"},
    sunken:{background:"var(--surface-sunken)",border:"1px solid transparent"},
    ink:{background:"var(--nv-ink-900)",border:"1px solid transparent",color:"var(--nv-paper-300)"},
    plain:{background:"transparent",border:"1px solid transparent"}
  }[variant];
  const El=as;
  return <El onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{padding:pad,borderRadius:"var(--radius-none)",transition:"var(--transition-ink), box-shadow var(--dur) var(--ease-standard)",
      boxShadow:interactive&&h?"var(--shadow-hover)":"none",
      borderColor:interactive&&h?"var(--border-hairline-strong)":undefined,
      cursor:interactive?"pointer":undefined,...skin,...style}} {...rest}>{children}</El>;
}