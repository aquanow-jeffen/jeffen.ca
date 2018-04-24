import { Headers, ResponseContentType, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable()
export class HttpClientService {
  private urlPrefix: string;

  constructor(private http: HttpClient) {
    if (environment.production) {
      // if page URL is http://localhost:8080/myapp/index.html, context is http://localhost:8080/myapp
      const context = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
      // if page URL is http://localhost:8080/myapp/index.html, serverURL is http://localhost:8080
      const serverURL =
        window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
      this.urlPrefix = !context ? serverURL + '/' : serverURL + context + '/';
      console.log('baseURL :', this.urlPrefix, ' serverURL : ' + serverURL, ' context : ', context);
    } else {
      this.urlPrefix = '/';
    }
  }

  // ********************* Private Helper Methods **************************
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error || 'server error at http-client');
  }

  private handleResponse(res: Observable<any>) {
    return res.catch(this.handleError);
  }

  private request(url: any, options: any) {
    return this.handleResponse(this.http.request(url, options));
  }

  // ********************* Public Methods API**************************
  public post(url, payload, additionalOptions?: any) {
    const requestURL = this.urlPrefix + url;
    const headers = new HttpHeaders();
    let options = { headers };
    if (additionalOptions) {
      options = Object.assign(options, additionalOptions);
    }
    return this.handleResponse(this.http.post(requestURL, payload, options));
  }

  public get(url, noToken?: boolean, options?: any) {
    const requestURL = this.urlPrefix + url;
    return this.handleResponse(this.http.get(requestURL, options));
  }

  public put(url: string, data: any, options?: any) {
    const requestURL = this.urlPrefix + url;
    return this.handleResponse(this.http.put(requestURL, data, options));
  }

  public delete(url: string, options?: any) {
    const requestURL = this.urlPrefix + url;
    return this.handleResponse(this.http.delete(requestURL, options));
  }

  public getBlob(url: string): Observable<Blob> {
    const requestURL = this.urlPrefix + url;
    return this.http
      .get(requestURL, {
        responseType: 'blob'
      })
      .map((res: any) => {
        const type = res.type;
        return new Blob([res], { type });
      });
  }
}
