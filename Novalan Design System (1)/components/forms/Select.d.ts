/** Native select in Novalan clothing; the caret is a 1px chevron. */
export interface SelectProps {
  label?: string;
  hint?: string;
  options?: Array<string | { value: string; label: string }>;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element;