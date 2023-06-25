import { Injectable, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  userPayload: any;
  addedProducts: any[] = [];
  constructor(private auth: AuthService) {
    this.userPayload = this.auth.decodifyToken();
  }

  getItems(){
    return this.addedProducts;
  };

  loadCart(): void{
    this.addedProducts = JSON.parse(window.sessionStorage.getItem("produtos")!) ?? [];
  };

  saveCart(): void{
    window.sessionStorage.setItem("produtos", JSON.stringify(this.addedProducts));
  };

  addToCart(product: any) {
    let newProduct = {...product, amount:1}
    this.addedProducts.push(newProduct);
    let existingProducts = [];
    if(window.sessionStorage.getItem("produtos")){
      existingProducts = JSON.parse(window.sessionStorage.getItem("produtos")!);
      let sameProduct = {...product, amount: + 1};
      existingProducts = [sameProduct, ...existingProducts];
      console.log('existe')
    } else {
      existingProducts = [product];
    }
    this.saveCart();
  };

  removeItem(product: any){
    const index = this.addedProducts.findIndex((i: any) => i.id === product.id);
    if(index > -1){
      this.addedProducts.splice(index, 1);
      this.saveCart();
    };
  };

  itemInCart(product: any): boolean{
    return this.addedProducts.findIndex((i: any) => i.id === product.id) > -1;
  }

}
