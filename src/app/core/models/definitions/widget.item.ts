import { NumberFormatStyle } from '@angular/common';

export interface WidgetItem {
  headline: string;
  bullets: { value: string | number; label: string }[];
  imageUrl?: string;
}
