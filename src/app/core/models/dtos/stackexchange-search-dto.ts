import { SearchItemDTO } from './stackexchange-search-item.dto';

export interface StackexchangeSearchDTO {
  quota_remaining: number;
  quota_max: number;
  has_more: true;
  items: SearchItemDTO[];
}
