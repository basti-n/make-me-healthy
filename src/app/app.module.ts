import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchService } from './core/services/search.service';
import { AppRoutingModule } from './app.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from './core/layout/layout.module';
import { SearchComponent } from './search/search.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClientIdInterceptor } from './core/interceptors/client-id.interceptor';

@NgModule({
  declarations: [AppComponent, DashboardComponent, SearchComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    LayoutModule,
    AppRoutingModule,
  ],
  providers: [
    SearchService,
    { provide: HTTP_INTERCEPTORS, useClass: ClientIdInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
