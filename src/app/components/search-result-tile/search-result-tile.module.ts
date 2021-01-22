import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipesModule } from 'app/core/pipes';
import { SearchResultTileComponent } from './search-result-tile.component';

@NgModule({
  imports: [CommonModule, PipesModule],
  exports: [SearchResultTileComponent],
  declarations: [SearchResultTileComponent],
  providers: [],
})
export class SearchResultTileModule {}
