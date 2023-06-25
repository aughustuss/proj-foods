import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from 'src/app/services/cart/cart.service';
import {CommonModule} from '@angular/common'
import { RouterModule } from '@angular/router';
import { LocationsService } from 'src/app/services/locations/locations.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [MatButtonModule, CommonModule, RouterModule],
})
export class CartComponent implements OnInit{
  items: any = [];
  total: number = 0;
  location: any;
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
    console.log(total);
    this.total = total.toFixed(2);
  };

  removeFromCart(product: any){
    this.cart.removeItem(product);
    this.items = this.cart.getItems();
    this.getTotal();
  };

  clearCart(products: any){
    this.cart.clearCart(products);
    this.items = this.cart.getItems();
    this.getTotal();
  }

}
