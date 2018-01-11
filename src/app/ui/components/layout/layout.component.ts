import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    app-header placeholder
    <div class="container my-5">
      <router-outlet></router-outlet>
    </div>
    app-footer placeholder
  `,
  styles: []
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
