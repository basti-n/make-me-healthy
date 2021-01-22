import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { SearchItemDTO } from 'app/core/models/dtos/stackexchange-search-item.dto';

@Component({
  selector: 'app-search-result-tile',
  templateUrl: './search-result-tile.component.html',
  styleUrls: ['./search-result-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultTileComponent {
  @Input() fallbackImage: string;
  @Input() result: SearchItemDTO;

  constructor() {}
}
