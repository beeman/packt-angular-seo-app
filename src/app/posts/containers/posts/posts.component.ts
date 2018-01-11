import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-posts',
  template: `
    <app-post-list [posts]="posts"></app-post-list>
  `,
  styles: []
})
export class PostsComponent implements OnInit {
  public posts: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .map(data => data['posts'])
      .map(data => data['items'])
      .subscribe((result: any) => this.posts = result)
  }

}
