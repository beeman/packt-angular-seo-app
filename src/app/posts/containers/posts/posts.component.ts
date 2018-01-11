import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
    for(let i = 1; i < 10; i++) {
      this.posts.push({ id: i, text: 'This is post with id: ' + i })
    }
  }

}
