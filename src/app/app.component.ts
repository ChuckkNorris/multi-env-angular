import { Component, ChangeDetectorRef, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {environment} from '../environments/environment'
import { AppConfigService } from './providers/app-config.service';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  template: `
  <p-toast></p-toast>
  <div class="content" role="main">
    <h1 class="title">Application Configuration</h1>
    <div class="card highlight-card card-small">
      <pre>{{ myEnv | json }}</pre>
    </div>
    <button (click)="makeRequest()">Make Req</button>
  </div>
  `,
  styles: [`
    .card {
      padding: 10px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  myEnv = {
    ...environment
  };
  
  constructor(
    private readonly appConfig: AppConfigService,
    private readonly http: HttpClient,
    private readonly messageService: MessageService
  ) {
    const config = appConfig.getAppConfig();
    console.log('App config from App component', appConfig.getAppConfig());
    this.myEnv = config;
  }

  makeRequest() {
    this.http.get('https://jsonplaceholder.typicode.com/todoss/1', {})
    .subscribe(resp => {
      console.warn('Made request!', resp);
    })
  }

}
