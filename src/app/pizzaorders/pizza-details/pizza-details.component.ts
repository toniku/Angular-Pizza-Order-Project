import { Component, Input } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css']
})

export class PizzaDetailsComponent {
  @Input()
  pizza: Pizza;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor (private pizzaService: PizzaService) {}

  createPizza(pizza: Pizza) {
    this.pizzaService.createPizza(pizza).then((newPizza: Pizza) => {
      this.createHandler(newPizza);
    });
  }

  updatePizza(pizza: Pizza): void {
    this.pizzaService.updatePizza(pizza).then((updatedPizza: Pizza) => {
      this.updateHandler(updatedPizza);
    });
  }

  deletePizza(pizzaId: String): void {
    this.pizzaService.deletePizza(pizzaId).then((deletedPizzaId: String) => {
    });
  }
}
