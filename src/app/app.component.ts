import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projeto-foods';
  showHeader: boolean = true;
  showFooter: boolean = true;
  
  constructor (private router: Router){
    router.events.subscribe(val => {
      if(val instanceof NavigationEnd){
        if(val.url === '/login' || val.url === '/register' || val.url === '/reset'){
          this.showHeader = false;
          this.showFooter = false;
        } else {
          this.showHeader = true;
          this.showFooter = true;
        }
      }
    })
  }
}