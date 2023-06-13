import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor (private auth: AuthService){}
  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }
  logOut(){
    this.auth.signOut();
  }
}
