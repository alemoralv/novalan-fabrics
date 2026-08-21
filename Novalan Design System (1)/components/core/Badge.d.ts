/** Status marker: stock, production stage, order state. */
export interface BadgeProps {
  children?: React.ReactNode;
  tone?: "neutral" | "ink" | "accent" | "success" | "warning" | "danger";
  /** leading 5px status dot */
  dot?: boolean;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;