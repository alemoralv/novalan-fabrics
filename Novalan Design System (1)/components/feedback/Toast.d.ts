/** Transient confirmation, bottom-left, black by default. */
export interface ToastProps {
  children?: React.ReactNode;
  tone?: "ink" | "success" | "danger";
  /** inline uppercase action, e.g. "Ver bolsa" */
  action?: React.ReactNode;
  onClose?: () => void;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;