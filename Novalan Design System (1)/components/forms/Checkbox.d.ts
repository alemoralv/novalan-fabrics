/** Square checkbox with a 1px tick. Controlled via checked/onChange(next). */
export interface CheckboxProps {
  label?: React.ReactNode;
  description?: string;
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;