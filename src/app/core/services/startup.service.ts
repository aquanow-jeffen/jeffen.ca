import { Injectable } from '@angular/core';
import { HttpClientService } from './httpClient.service';

@Injectable()
export class StartupService {
  constructor(private http: HttpClientService) {}
  /**********************************************************************
   * Private methods
   ***********************************************************************/
  private routeSelector(name: string, data: any = {}) {
    const routeContainer = [{ type: 'APP_INFO', url: `app/info` }];
    const result = routeContainer.find(ele => ele.type === name);
    const url = result ? result.url : '';
    return url;
  }

  /**********************************************************************
   * Public methods
   ***********************************************************************/
  public onLoad(): Promise<any> {
    // You can do some auth token initialization or make a http call here
    console.log('App Initialized');
    return new Promise((res, rej) => res(null));
  }
}
