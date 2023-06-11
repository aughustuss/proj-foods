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
      price: "",
    },
    {
      drinkName: 'Heineken',
      image: '../../../assets/images/drinks/drink2.jpg',
      price: "",
    },
    {
      drinkName: 'Budweiser',
      image: '../../../assets/images/drinks/drink4.jpg',
      price: "",
    },
    {
      drinkName: 'Corona Extra',
      image: '../../../assets/images/drinks/drink5.jpg',
      price: "",
    },
    {
      drinkName: 'Jack Daniels',
      image: '../../../assets/images/drinks/drink6.jpg',
      price: "",
    },
    {
      drinkName: 'Stella Artois',
      image: '../../../assets/images/drinks/drink7.jpg',
      price: "",
    }
  ]
}
