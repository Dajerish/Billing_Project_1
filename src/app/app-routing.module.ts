import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginhomepageComponent } from './loginpage/loginhomepage/loginhomepage.component';

const routes: Routes = [
  {
    path:"",
    component:LoginhomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
