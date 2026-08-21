/**
 * A fabric colourway chip: colour + weave texture + lot code.
 */
export interface SwatchProps {
  /** colourway name, e.g. "Nogal" */
  name?: string;
  /** lot or reference code, set in mono */
  code?: string;
  /** CSS colour of the cloth */
  color: string;
  weave?: "plain" | "twill" | "herringbone" | "canvas" | "none";
  /** px square */
  size?: number;
  selected?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function Swatch(props: SwatchProps): JSX.Element;