/** Modal sheet on a blurred ink scrim. Square, 1px solid border, no radius. */
export interface DialogProps {
  open?: boolean;
  title?: string;
  children?: React.ReactNode;
  /** action row, right-aligned */
  footer?: React.ReactNode;
  onClose?: () => void;
  width?: number;
  style?: React.CSSProperties;
}
export declare function Dialog(props: DialogProps): JSX.Element;