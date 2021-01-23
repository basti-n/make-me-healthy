export interface WidgetConfig {
  mode: 'mixed' | 'weather' | 'stackoverflow';
  itemSize: 5 | 10;
  label: string;
  queryString?: string;
  route?: string;
}
