import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-profile',
  template: `
    <p>
      {{profile.id}}
    </p>
  `,
  styles: []
})
export class ProfileComponent implements OnInit {
  public profile = { id: null };
  constructor(private postsService: PostsService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.postsService.getProfile(this.route.snapshot.params['profileId'])
      .subscribe((result: any) => this.profile = result)
  }

}
