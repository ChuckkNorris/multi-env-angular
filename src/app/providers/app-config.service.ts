import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private appConfig: any;

  constructor(private http: HttpClient) { }

  public loadConfig() {
    return this.http.get('/assets/config/app-config.json')
      .toPromise()
      .then((config: any) => {
        console.log('Loaded application configuration', config);
        this.appConfig = config;
      })
      .catch((err: any) => {
        console.error('Could not retrieve application configuration: ', err);
      })
  }

  public getAppConfig() { return this.appConfig; }

}
