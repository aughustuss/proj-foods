import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  userPayload: any;
  addedProducts: any = [];
  constructor(private auth: AuthService) { 
      this.userPayload = this.auth.decodifyToken();
  }

  ngOnInit(): void{
    const newItem = localStorage.getItem(`${this.userPayload.name}`);
    
  }

  addItem(product: any){
    
  };
  

}
