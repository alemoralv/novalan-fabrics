/**
 * Section switcher. Underline for page-level, segmented for filtering a table.
 */
export interface TabsProps {
  items: Array<string | { value: string; label: string; count?: number }>;
  value?: string;
  onChange?: (value: string) => void;
  variant?: "underline" | "segmented";
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;