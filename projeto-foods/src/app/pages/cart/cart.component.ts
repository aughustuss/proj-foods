import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from 'src/app/services/cart/cart.service';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { LocationsService } from 'src/app/services/locations/locations.service';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [MatButtonModule, CommonModule, RouterModule, MatButtonToggleModule],
})
export class CartComponent implements OnInit {
  items: any = [];
  total: number = 0;
  location: any;
  deliveryMethod: boolean = false;
  fisicShopMethod: boolean = false;
  deliverMethodOption: string = '';
  constructor(private cart: CartService, private locations: LocationsService) { }

  ngOnInit(): void {
    this.location = this.locations.Locations;
    this.cart.loadCart();
    this.items = this.cart.getItems();
    this.getTotal();
  }
  getTotal() {
    const total = this.items.reduce((acc: any, item: any) => {
      return acc + (parseFloat(item.price) * item.amount);
    }, 0);
    this.total = total.toFixed(2);
  };

  removeFromCart(product: any) {
    this.cart.removeItem(product);
    this.items = this.cart.getItems();
    this.getTotal();
  };

  clearCart(products: any) {
    this.cart.clearCart(products);
    this.items = this.cart.getItems();
    this.getTotal();
  };
  incrementProduct(product: any) {
    this.cart.incrementProduct(product);
    this.items = this.cart.getItems();
    this.getTotal();
    this.cart.loadCart();
  };
  decrementProduct(product: any){
    this.cart.decrementProduct(product);
    this.items = this.cart.getItems();
    this.getTotal();
    this.cart.loadCart();
  }
  setDeliveryMethod(method: string) {
    this.deliveryMethod = true;
    this.fisicShopMethod = false;
    this.deliverMethodOption = method;
  };

  setFisicShopMethod(method: string) {
    this.fisicShopMethod = true;
    this.deliveryMethod = false;
    this.deliverMethodOption = method;
  };

}
