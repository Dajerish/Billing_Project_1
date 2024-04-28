import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginpageRoutingModule } from './loginpage-routing.module';
import { LoginhomepageComponent } from './loginhomepage/loginhomepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    LoginhomepageComponent
  ],
  imports: [
    CommonModule,
    LoginpageRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class LoginpageModule { }
