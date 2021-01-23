export interface WidgetConfig {
  // Mixed Mode fetches from two sources
  mode: 'mixed' | 'weather' | 'stackoverflow';
  itemSize: 5 | 10;
  queryString?: string;
}
