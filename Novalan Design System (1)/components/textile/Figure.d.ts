/** Image frame. With no src it renders a woven placeholder block — no photography was supplied with the brand. */
export interface FigureProps {
  src?: string;
  alt?: string;
  caption?: string;
  /** CSS aspect-ratio, e.g. "4 / 5", "16 / 9", "1 / 1" */
  ratio?: string;
  weave?: "canvas" | "twill" | "herringbone" | "plain" | "none";
  tone?: "khaki" | "ink" | "paper" | "walnut";
  /** placeholder caption inside the block */
  label?: string;
  /** content laid over a bottom protection gradient */
  overlay?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Figure(props: FigureProps): JSX.Element;