/** Selectable filter chip — fibre, weight, colourway, certification. */
export interface TagProps {
  children?: React.ReactNode;
  selected?: boolean;
  tone?: "outline" | "accent";
  removable?: boolean;
  onRemove?: () => void;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;