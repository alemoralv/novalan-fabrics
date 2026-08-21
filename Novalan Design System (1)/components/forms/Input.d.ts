/**
 * Single-line text field. Square, hairline border that goes solid black on focus.
 */
export interface InputProps {
  /** uppercase micro-label above the field */
  label?: string;
  hint?: string;
  /** error message; replaces hint and turns the border brick */
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  /** static/demo value with no handler; also inferred when `value` is set without `onChange` */
  readOnly?: boolean;
  size?: "sm" | "md" | "lg";
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;