import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderStepsService {

  constructor() { }

  OrderSteps = [
    {
      step: "1",
      content: "Selecione um dos nossos hamburguéres"
    },
    {
      step: "2",
      content: "Escolha a quantidade que lhe desejar",
    },
    {
      step: "3",
      content: "Selecione entre uma das opções: retirada na loja ou delivery",
    },
    {
      step: "4",
      content: "Selecione a forma de pagamento",
    },
    {
      step: "5",
      content: "Se optado por delivery, preencha as informações para entrega e pronto! Só esperar"
    }
  ]
}
