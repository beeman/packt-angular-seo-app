import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  template: `
    <div *ngFor="let post of posts">
      <a [routerLink]="post.id">
        {{post.text}}
      </a>
    </div>
  `,
  styles: []
})
export class PostsComponent implements OnInit {
  public posts = []
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts()
      .map(res => res.items)
      .subscribe((result: any) => this.posts = result)
  }

}
