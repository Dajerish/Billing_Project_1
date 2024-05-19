import { Component } from '@angular/core';

@Component({
  selector: 'app-user-nav-bar',
  templateUrl: './user-nav-bar.component.html',
  styleUrls: ['./user-nav-bar.component.scss']
})
export class UserNavBarComponent {

  user=''

  isMenuActive = false;
  // navLinks = ['Home', 'About', 'Services', 'Contact']; // Example links

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  closeMenu() {
    this.isMenuActive = false;
  }

}
