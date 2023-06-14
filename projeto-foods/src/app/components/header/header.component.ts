import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StoreService } from 'src/app/services/store/store.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public fullName: string = "";
  constructor (private auth: AuthService, private store: StoreService){}

  ngOnInit(){
    this.store.getFullNameFromStore().subscribe(val => {
      let fullName = this.auth.getFullName();
      this.fullName = val || fullName;
    })
  };
  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }
  logOut(){
    this.auth.signOut();
  }
}
