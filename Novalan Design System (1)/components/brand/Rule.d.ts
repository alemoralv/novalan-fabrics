/** A 1px hairline — the structural device of the system, optionally with a letterspaced section label. */
export interface RuleProps {
  tone?: "hairline" | "strong" | "solid" | "accent";
  /** uppercase micro-label set to the left of the line */
  label?: string;
  vertical?: boolean;
  style?: React.CSSProperties;
}
export declare function Rule(props: RuleProps): JSX.Element;