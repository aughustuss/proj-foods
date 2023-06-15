import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class BurguerService {

  constructor() { }

  Burguers = [
    {
      burguerName: 'Espartilho',
      image: '../../../assets/images/burguers/burguer1.jpg',
      ingredients: 'Pão Italiano selado na manteiga, 200G de Bife Bovino, queijo parmesão derretido...',
      price: '40,90',
    },
    {
      burguerName: 'Ivar',
      image: '../../../assets/images/burguers/burguer2.jpg',
      ingredients: 'Pão Italiano selado na manteiga, 200G de Bife Bovino, queijo parmesão derretido...',
      price: '44,90',
    },
    {
      burguerName: 'Mediterrâneo',
      image: "../../../assets/images/burguers/burguer3.jpg",
      ingredients: 'Pão Italiano selado na manteiga, 200G de Bife Bovino, queijo parmesão derretido...',
      price: '46,90',
    },
    {
      burguerName: 'Original',
      image: '../../../assets/images/burguers/burguer4.jpg',
      ingredients: 'Pão Italiano selado na manteiga, 200G de Bife Bovino, queijo parmesão derretido...',
      price: '52,90',
    },
    {
      burguerName: 'Górdon',
      image: '../../../assets/images/burguers/burguer5.jpg',
      ingredients: 'Pão Italiano selado na manteiga, 200G de Bife Bovino, queijo parmesão derretido...',
      price: '57,90',
    },
    {
      burguerName: 'Brutallus',
      image: "../../../assets/images/burguers/burguer6.jpg",
      ingredients: 'Pão Italiano selado na manteiga, 200G de Bife Bovino, queijo parmesão derretido...',
      price: '59,90',
    },
    {
      burguerName: 'Medieval',
      image: '../../../assets/images/burguers/burguer7.jpg',
      ingredients: 'Pão Italiano selado na manteiga, 200G de Bife Bovino, queijo parmesão derretido...',
      price: '63,90',
    },
    {
      burguerName: 'Ragnar',
      image: '../../../assets/images/burguers/burguer8.jpg',
      ingredients: 'Pão Italiano selado na manteiga, 200G de Bife Bovino, queijo parmesão derretido...',
      price: '67,90',
    },
    {
      burguerName: 'Barbarus',
      image: '../../../assets/images/burguers/burguer9.jpg',
      ingredients: 'Pão Italiano selado na manteiga, 200G de Bife Bovino, queijo parmesão derretido...',
      price: '69,90',
    },
    {
      burguerName: 'Cenarius',
      image: '../../../assets/images/burguers/burguer10.jpg',
      ingredients: 'Pão Italiano selado na manteiga, 200G de Bife Bovino, queijo parmesão derretido...',
      price: '69,90',
    },
  ]
}
