import { Component, OnInit } from '@angular/core';
import {BlogService} from '../services/blog/blog.service';
import {Post} from '../models/Post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public posts: Post[] = [];
  public nextPageToken = '';

  constructor(
      private blogService: BlogService
  ) { }

  ngOnInit() {
    this.blogService.getBlogList(this.nextPageToken).subscribe((result: any) => {
      this.posts = result.items;
      this.nextPageToken = result.nextPageToken;
    });
  }

  getRoute(post: Post) {
    const urlArr = post.url.split('/');
    return `${post.id}-${urlArr[urlArr.length - 1]}`;
  }
}
