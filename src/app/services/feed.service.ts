import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class FeedService{
  http: any;
  baseUrl: String;

  constructor(http: Http) {
    this.http = http;
    this.baseUrl = "https://api.github.com/users";
  }

  getPosts(startFrom) {
    return this.http.get(this.baseUrl + "?since=" + String(startFrom))
      .map(res => res.json())
      .map(result => {
        return result
      })
  }

  getPost(username) {
    return this.http.get(this.baseUrl + "/" + username)
      .map(res => res.json())
      .catch(error => JSON.stringify('error'))
      // .map(result => {
      //   return result
      // })     
  }
}