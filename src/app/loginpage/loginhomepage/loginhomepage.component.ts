import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-loginhomepage',
  templateUrl: './loginhomepage.component.html',
  styleUrls: ['./loginhomepage.component.scss'],
})
export class LoginhomepageComponent {
  username: any = '';
  password: any = '';
  displayMessage: any = '';

  constructor(private route: Router,private loginservice:LoginService) {}

  onclick() {
    this.loginservice.CheckValid(this.username, this.password);
  }

  
}
