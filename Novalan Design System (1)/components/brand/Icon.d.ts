/** Thin-stroke line icon (Lucide, 1.25px stroke). Substituted set — no proprietary Novalan glyphs were supplied. */
export interface IconProps {
  /** Lucide icon name, e.g. "arrow-right", "search", "scissors" */
  name: string;
  /** px — use 14 / 16 / 20 / 24 */
  size?: number;
  strokeWidth?: number;
  color?: string;
  /** accessible name; omit for decorative icons */
  label?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;