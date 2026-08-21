/** Technical specification rows — composition, gramaje, ancho, acabado, plazo. */
export interface SpecListProps {
  items: Array<{ label: string; value: React.ReactNode; mono?: boolean }>;
  dense?: boolean;
  style?: React.CSSProperties;
}
export declare function SpecList(props: SpecListProps): JSX.Element;