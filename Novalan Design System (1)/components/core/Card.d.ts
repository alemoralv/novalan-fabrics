/** Content container. Square corners, 1px hairline, no shadow at rest. */
export interface CardProps {
  children?: React.ReactNode;
  variant?: "hairline" | "solid" | "sunken" | "ink" | "plain";
  padding?: "none" | "sm" | "md" | "lg";
  /** adds hover lift + darker hairline; use for whole-card links */
  interactive?: boolean;
  as?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;