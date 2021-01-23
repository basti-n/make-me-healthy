import { Observable } from 'rxjs';
export abstract class SearchService<SearchResult> {
  private static readonly BASE_URL: string;
  protected readonly cache: Map<string, SearchResult>;

  abstract search(queryString?: string): Observable<SearchResult>;
}
