import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class AppService {

  authenticated = true;

  constructor(private http: HttpClient) {
  }

  authenticate(credentials, callback) {
    return this.authenticated = true;

    // const headers = new HttpHeaders(credentials ? {
    //   authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    // } : {});
    //
    // this.http.get('http://localhost:8080/user', {headers: headers}).subscribe(response => {
    //   if (response['name']) {
    //     this.authenticated = true;
    //   } else {
    //     this.authenticated = false;
    //   }
    //   return callback && callback();
    // });

  }

}

