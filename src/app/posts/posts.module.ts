import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './containers/posts/posts.component';
import { ProfileComponent } from './containers/profile/profile.component';
import { PostsService } from './services/posts.service';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  declarations: [PostsComponent, ProfileComponent],
  providers: [PostsService]
})
export class PostsModule { }
