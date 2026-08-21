/** Single choice from a small set. The only circular control in the system. */
export interface RadioProps {
  label?: React.ReactNode;
  description?: string;
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  name?: string;
  style?: React.CSSProperties;
}
export declare function Radio(props: RadioProps): JSX.Element;