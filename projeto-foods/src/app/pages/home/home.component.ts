import { Component } from '@angular/core';
import { OrderStepsService } from 'src/app/services/ordersteps/order-steps.service';
import { BurguerService } from 'src/app/services/burguers/burguer.service';
import { DrinksService } from 'src/app/services/drinks/drinks.service';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CommonModule],
})
export class HomeComponent {
  constructor(private orderSteps: OrderStepsService, private burguers: BurguerService, private drinks: DrinksService) { }

  orderStep: any;
  burguer: any;
  drink: any;
  burguerContentVisible: boolean = true;
  drinkContentVisible: boolean = true;

  ngOnInit(): void {
    this.orderStep = this.orderSteps.OrderSteps;
    this.burguer = this.burguers.Burguers;
    this.drink = this.drinks.Drinks;
  };
  toogleBurguerContentVisible(){
    this.burguerContentVisible = !this.burguerContentVisible;
  }
  toogleDrinkContentVisible(){
    this.drinkContentVisible = !this.drinkContentVisible;
  }

}
