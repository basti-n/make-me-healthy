import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchService } from '../services';
import { environment } from 'environments/environment';

@Injectable()
export class ClientIdInterceptor implements HttpInterceptor {
  constructor(private readonly searchService: SearchService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let httpReq = req;
    if (this.searchService.isSearchRequest(req.url)) {
      const params = req.params.append('key', environment.clientId);
      httpReq = httpReq.clone({ params });
    }

    return next.handle(httpReq);
  }
}
