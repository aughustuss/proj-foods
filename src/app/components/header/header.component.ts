import { Component, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StoreService } from 'src/app/services/store/store.service';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatBadgeModule} from '@angular/material/badge'
import {MatButtonModule} from '@angular/material/button'
import { RouterModule } from '@angular/router';
import {MatSidenavModule, MatSidenav} from '@angular/material/sidenav'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, RouterModule, CommonModule, MatBadgeModule, MatButtonModule, MatIconModule, MatSidenavModule],
})
export class HeaderComponent {
  isSideNavOpen: boolean = false;
  constructor (private auth: AuthService, private store: StoreService){}

  toogleSideNav(){
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }
  logOut(){
    this.auth.signOut();
  }
}
