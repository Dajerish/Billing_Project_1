import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { UserNavBarComponent } from './user-nav-bar/user-nav-bar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    UserHomePageComponent,
    UserNavBarComponent,
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
