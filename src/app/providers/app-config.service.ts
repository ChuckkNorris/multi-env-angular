import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private appConfig: any;

  constructor(private http: HttpClient) { }

  public loadConfig() {
    var headers = new HttpHeaders({
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
    });
    return this.http
      .get('/assets/config/app.config.json', { headers })
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
