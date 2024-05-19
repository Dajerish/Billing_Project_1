import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { LoginhomepageComponent } from './loginhomepage/loginhomepage.component';
import { UserHomePageComponent } from '../user/user-home-page/user-home-page.component';
import { UserProfileComponent } from '../user/user-profile/user-profile.component';

const routes: Routes = [
  {
    path:'',
    component:LoginhomepageComponent
  },
  {
    path:'userhome',
    component:UserHomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginpageRoutingModule { }
