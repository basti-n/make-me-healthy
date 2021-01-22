import { Observable } from 'rxjs';

export abstract class SearchService<SearchResult> {
  private static readonly BASE_URL: string;

  abstract search(queryString: string): Observable<SearchResult>;
}
