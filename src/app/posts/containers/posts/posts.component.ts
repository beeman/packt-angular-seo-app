import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  template: `
    <app-post-list [posts]="posts"></app-post-list>
  `,
  styles: []
})
export class PostsComponent implements OnInit {
  public posts = []
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts()
      .map((res: any) => res.items)
      .subscribe((result: any) => this.posts = result)
  }

}
