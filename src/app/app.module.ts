import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from './core/core.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomTitleService} from './core/custom-title.service';
import {DefaultInterceptor} from './core/default.interceptor';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    BrowserAnimationsModule,
    AuthModule.forRoot({
      domain: "dev-1zr6n7e7.us.auth0.com",
      clientId:"sJ717je0x5wXLVwllNmsQXzjIvlGgOrH"
    }),
    //ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    {
      provide: Title,
      useClass: CustomTitleService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DefaultInterceptor,
      multi: true
    }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
