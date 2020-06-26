import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppConfigService } from './providers/app-config.service';

export const initializeConfig = (appConfig: AppConfigService) => () => appConfig.loadConfig();

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeConfig,
    deps: [AppConfigService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
