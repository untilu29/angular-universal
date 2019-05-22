import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient: HttpClient) { }

  getBlogList(pageToken: string) {
    const params = new HttpParams()
        .set('key', environment.apiKey)
        .set('fetchBodies', 'false')
        .set('maxResults', '10')
        .set('fetchImages', 'true');
    if (pageToken.length) { params.set('pageToken', pageToken); }
    return this.httpClient.get(`https://www.googleapis.com/blogger/v3/blogs/${environment.blogId}/posts`, { params });
  }

  getPostById(postId: string){
    const params = new HttpParams()
        .set('key', environment.apiKey)
        .set('fetchImages', 'true')
        .set('fetchBody', 'true');
    return this.httpClient.get(`https://www.googleapis.com/blogger/v3/blogs/${environment.blogId}/posts/${postId}`, { params });
  }
}
