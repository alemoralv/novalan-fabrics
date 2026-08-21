/** Square icon-only control for toolbars, galleries and table rows. */
export interface IconButtonProps {
  icon: React.ReactNode;
  /** required accessible label */
  label: string;
  variant?: "ghost" | "outline" | "solid";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;