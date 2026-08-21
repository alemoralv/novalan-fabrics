/**
 * Primary action control. Square, letterspaced uppercase, 1px border.
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** primary = black fill (hovers walnut); accent = khaki; link = underlined text */
  variant?: "primary" | "secondary" | "accent" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  /** render as another element, e.g. "a" */
  as?: "button" | "a";
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;