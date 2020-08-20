import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppConfigService } from './providers/app-config.service';
import { RequestInterceptor } from './error-handling/request.interceptor';
import { ToastModule } from 'primeng/toast'
import { MessageModule } from 'primeng/message'
import { MessagesModule } from 'primeng/messages'
import { MessageService } from 'primeng/api'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export const initializeConfig = (appConfig: AppConfigService) => () => appConfig.loadConfig();

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastModule,
    MessageModule,
    MessagesModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeConfig,
      deps: [AppConfigService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
