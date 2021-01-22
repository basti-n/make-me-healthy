import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { StackexchangeSearchDTO } from 'app/core/models/dtos';
import { StackExchangeSearchService } from 'app/core/services/search/stackexchange.service';
import { fromEvent, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
  readonly formControl = new FormControl();
  searchResult$: Observable<StackexchangeSearchDTO>;

  @ViewChild('searchBtn', { read: ElementRef, static: true })
  searchButton: ElementRef<HTMLButtonElement>;

  constructor(
    private readonly stackExchangeSearchService: StackExchangeSearchService
  ) {}

  ngOnInit() {
    this.initSearchListener();
  }

  initSearchListener(): void {
    this.searchResult$ = fromEvent(
      this.searchButton.nativeElement,
      'click'
    ).pipe(
      switchMap(() =>
        this.stackExchangeSearchService.search(this.formControl.value)
      )
    );
  }
}
