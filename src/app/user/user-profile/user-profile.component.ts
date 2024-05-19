import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  cid:number=0;
  name:string='';
  email:string='';
  phno:number=0;
  address:string=''
}
