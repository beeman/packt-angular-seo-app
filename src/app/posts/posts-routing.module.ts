import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './containers/posts/posts.component'
import { ProfileComponent } from './containers/profile/profile.component'

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: ':profileId', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
