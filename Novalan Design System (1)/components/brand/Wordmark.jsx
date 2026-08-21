export function Wordmark({variant="full",tone="ink",width=200,href,style,...rest}){
  const src={full:"novalan-wordmark",wordmark:"novalan-lockup-wordmark",tagline:"novalan-lockup-tagline"}[variant]||"novalan-wordmark";
  const light=tone==="paper"&&variant!=="tagline";
  const file=(light?src+"-light":src)+".png";
  const img=<img src={(window.NV_ASSETS||"assets/")+file} alt="Novalan" style={{width:width,display:"block",...(tone==="paper"&&variant==="tagline"?{filter:"invert(1) brightness(1.6)"}:null)}}/>;
  const wrap={display:"inline-block",lineHeight:0,...style};
  return href?<a href={href} style={{...wrap,textDecoration:"none"}} {...rest}>{img}</a>:<span style={wrap} {...rest}>{img}</span>;
}