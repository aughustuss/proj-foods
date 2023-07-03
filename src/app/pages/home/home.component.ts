import { Component } from '@angular/core';
import { OrderStepsService } from 'src/app/services/ordersteps/order-steps.service';
import { BurguerService } from 'src/app/services/burguers/burguer.service';
import { DrinksService } from 'src/app/services/drinks/drinks.service';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { LocationsService } from 'src/app/services/locations/locations.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CommonModule, MatSnackBarModule, RouterModule],
})
export class HomeComponent {
  constructor(
    private orderSteps: OrderStepsService,
    private burguers: BurguerService,
    private drinks: DrinksService,
    private locations: LocationsService,
    private auth: AuthService,
    private cart: CartService,
    private snack: MatSnackBar,
  ) { }

  orderStep: any;
  burguer: any;
  drink: any;
  location: any;
  burguerContentVisible: boolean = true;
  drinkContentVisible: boolean = true;
  duration: number = 2;

  ngOnInit(): void {
    this.orderStep = this.orderSteps.OrderSteps;
    this.burguer = this.burguers.Burguers;
    this.drink = this.drinks.Drinks;
    this.location = this.locations.Locations;
    this.cart.loadCart();
  };

  addToCart(product: any){
    if(!this.cart.itemInCart(product)){
      product.amount = 1;
      this.cart.addToCart(product);
      this.cart.addedProducts = [...this.cart.getItems()];
      this.snack.open('Adicionado ao carrinho', 'OK', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        duration: this.duration * 1000,
      })
    } else {
      this.snack.open('Este item já está em seu carrinho.', 'OK', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        duration: this.duration * 1000,
      })
    }
  }

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }
  toogleBurguerContentVisible() {
    this.burguerContentVisible = !this.burguerContentVisible;
  }
  toogleDrinkContentVisible() {
    this.drinkContentVisible = !this.drinkContentVisible;
  }

}
