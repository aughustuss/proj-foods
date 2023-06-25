import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  constructor() { }

  Drinks = [
    {
      name: 'Antártica Original',
      image: '../../../assets/images/drinks/drink1.png',
      price: 14.90,
    },
    {
      name: 'Heineken',
      image: '../../../assets/images/drinks/drink2.jpg',
      price: 18.90,
    },
    {
      name: 'Budweiser',
      image: '../../../assets/images/drinks/drink4.jpg',
      price: 18.90,
    },
    {
      name: 'Corona Extra',
      image: '../../../assets/images/drinks/drink5.jpg',
      price: 19.90,
    },
    {
      name: 'Jack Daniels',
      image: '../../../assets/images/drinks/drink6.jpg',
      price: 12.90,
    },
    {
      name: 'Stella Artois',
      image: '../../../assets/images/drinks/drink7.jpg',
      price: 19.90,
    }
  ]
}
