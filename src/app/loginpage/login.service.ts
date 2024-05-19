import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private route:Router) { }

  CheckValid(username:any, password: any) {
    if (username === '' && password === '') {
      
      Swal.fire({
        title: 'Welcome '+username,
        // html: 'I will close in <b></b> milliseconds.',
        timer: 800,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const popup = Swal.getPopup();
          if (popup !== null) {
            const timer = popup.querySelector('b');
            if (timer !== null) {
              const timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
              }, 1000);
            }
          }
        },
        willClose: () => {
          // clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer');
        }
      });
      this.route.navigate(['/userhome']);

    } else {
      // this.displayMessage="Wrong Username or Password";
      Swal.fire({
        icon: 'error',
        // title: "Wrong Password",
        text: 'Invalid Username or Password',
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  }
  delayedFunction() {
    throw new Error('Method not implemented.');
  }
}
