import { Component, ChangeDetectorRef, Input } from '@angular/core';
import {environment} from '../environments/environment'
import { AppConfigService } from './providers/app-config.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="content" role="main">
    <h1 class="title">Application Configuration</h1>
    <div class="card highlight-card card-small">
      <pre>{{ myEnv | json }}</pre>
    </div>
  </div>
  `,
  styles: [`
    .card {
      padding: 10px;
    }
  `]
})
export class AppComponent {
  myEnv = {
    ...environment
  };
  
  constructor(private readonly appConfig: AppConfigService) {
    const config = appConfig.getAppConfig();
    console.log('App config from App component', appConfig.getAppConfig());
    this.myEnv = config;
  }


}
