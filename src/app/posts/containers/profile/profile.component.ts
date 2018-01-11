import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(res => this.profile.id = 'profileId = ' + res['profileId'])
  }

}
