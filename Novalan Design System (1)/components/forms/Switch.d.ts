/** Immediate on/off setting (no save step). Square track, khaki knob when on. */
export interface SwitchProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Switch(props: SwitchProps): JSX.Element;