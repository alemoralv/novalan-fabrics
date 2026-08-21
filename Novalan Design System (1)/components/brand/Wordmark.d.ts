/**
 * The Novalan lockup, drawn from the supplied logo artwork (never re-typed).
 */
export interface WordmarkProps {
  /** full = wordmark + script tagline; wordmark = letters only; tagline = script line only */
  variant?: "full" | "wordmark" | "tagline";
  /** ink = black artwork on paper; paper = paper artwork for black grounds */
  tone?: "ink" | "paper";
  width?: number;
  href?: string;
  style?: React.CSSProperties;
}
export declare function Wordmark(props: WordmarkProps): JSX.Element;