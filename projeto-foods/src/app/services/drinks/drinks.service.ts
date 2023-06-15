import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  constructor() { }

  Drinks = [
    {
      drinkName: 'Antártica Original',
      image: '../../../assets/images/drinks/drink1.png',
      price: "14,90",
    },
    {
      drinkName: 'Heineken',
      image: '../../../assets/images/drinks/drink2.jpg',
      price: "18,90",
    },
    {
      drinkName: 'Budweiser',
      image: '../../../assets/images/drinks/drink4.jpg',
      price: "18,90",
    },
    {
      drinkName: 'Corona Extra',
      image: '../../../assets/images/drinks/drink5.jpg',
      price: "19,90",
    },
    {
      drinkName: 'Jack Daniels',
      image: '../../../assets/images/drinks/drink6.jpg',
      price: "12,90 - Dose",
    },
    {
      drinkName: 'Stella Artois',
      image: '../../../assets/images/drinks/drink7.jpg',
      price: "19,90",
    }
  ]
}
