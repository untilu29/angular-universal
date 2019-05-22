import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from '../../services/blog/blog.service';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private postId: string;
  public post: Post;

  constructor(  private route: ActivatedRoute,
                private blogService: BlogService
  ) {
    this.postId = this.route.snapshot.paramMap.get('slug').split('-')[0];
    blogService.getPostById(this.postId).subscribe((data: any) => {
      this.post = data;
    });
  }

  ngOnInit() { }

}
