import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class BurguerService {

  constructor() { }

  Burguers = [
    {
      id: 1,
      name: 'Espartilho',
      image: '../../../assets/images/burguers/burguer1.jpg',
      ingredients: 'Pão Italiano selado na manteiga, 200G de Bife Bovino, queijo parmesão derretido...',
      price: 40.90,
    },
    {
      id: 2,
      name: 'Ivar',
      image: '../../../assets/images/burguers/burguer2.jpg',
      ingredients: 'Pão Italiano selado na manteiga, 200G de Bife Bovino, queijo parmesão derretido...',
      price: 44.90,
    },
    {
      id: 3,
      name: 'Mediterrâneo',
      image: "../../../assets/images/burguers/burguer3.jpg",
      ingredients: 'Pão Italiano selado na manteiga, 200G de Bife Bovino, queijo parmesão derretido...',
      price: 46.90,
    },
    {
      id: 4,
      name: 'Original',
      image: '../../../assets/images/burguers/burguer4.jpg',
      ingredients: 'Pão Italiano selado na manteiga, 200G de Bife Bovino, queijo parmesão derretido...',
      price: 52.90,
    },
    {
      id: 5,
      name: 'Górdon',
      image: '../../../assets/images/burguers/burguer5.jpg',
      ingredients: 'Pão Italiano selado na manteiga, 200G de Bife Bovino, queijo parmesão derretido...',
      price: 57.90,
    },
    {
      id: 6,
      name: 'Brutallus',
      image: "../../../assets/images/burguers/burguer6.jpg",
      ingredients: 'Pão Italiano selado na manteiga, 200G de Bife Bovino, queijo parmesão derretido...',
      price: 59.90,
    },
    {
      id: 7,
      name: 'Medieval',
      image: '../../../assets/images/burguers/burguer7.jpg',
      ingredients: 'Pão Italiano selado na manteiga, 200G de Bife Bovino, queijo parmesão derretido...',
      price: 63.90,
    },
    {
      id: 8,
      name: 'Ragnar',
      image: '../../../assets/images/burguers/burguer8.jpg',
      ingredients: 'Pão Italiano selado na manteiga, 200G de Bife Bovino, queijo parmesão derretido...',
      price: 67.90,
    },
    {
      id: 9,
      name: 'Barbarus',
      image: '../../../assets/images/burguers/burguer9.jpg',
      ingredients: 'Pão Italiano selado na manteiga, 200G de Bife Bovino, queijo parmesão derretido...',
      price: 69.90,
    },
    {
      id: 10,
      name: 'Cenarius',
      image: '../../../assets/images/burguers/burguer10.jpg',
      ingredients: 'Pão Italiano selado na manteiga, 200G de Bife Bovino, queijo parmesão derretido...',
      price: 69.90,
    },
  ]
}
