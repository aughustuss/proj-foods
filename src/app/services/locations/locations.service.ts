import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor() { }

  Locations = [
      {
        location: 'Rua Pedro Álvares Cabral, 1500 - Rio de Janeiro, RJ - Brasil.',
      },
      {
        location: 'Rua Pedro Álvares Cabral, 1500 - Belo Horizonte, MG - Brasil',
      },
      {
        location: 'Rua Pedro Álvares Cabral, 1500 - São Paulo, SP - Brasil.',
      }
  ] 
}
