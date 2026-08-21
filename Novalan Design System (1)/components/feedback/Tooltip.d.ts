/** Micro-label on hover — used to name icon-only controls and fabric abbreviations. */
export interface TooltipProps {
  children?: React.ReactNode;
  content: React.ReactNode;
  placement?: "top" | "bottom" | "right";
  style?: React.CSSProperties;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;