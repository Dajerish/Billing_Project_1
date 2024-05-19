import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';

const routes: Routes = [
  {
    path:"myprofile",
    component:UserProfileComponent  
  },
  {
    path:"userhome",
    component:UserHomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
