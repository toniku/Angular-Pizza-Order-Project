import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';
import { PizzaDetailsComponent } from '../pizza-details/pizza-details.component';

@Component({
  selector: 'pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css'],
  providers: [PizzaService]
})

export class PizzaListComponent implements OnInit {

  pizzas: Pizza[]
  selectedPizza: Pizza

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
     this.pizzaService
      .getPizzas()
      .then((pizzas: Pizza[]) => {
        this.pizzas = pizzas.map((pizza) => {
          if (!pizza.address) {
            pizza.address = {
              city: '',
              street: ''
            }
          }
          return pizza;
        });
      });
  }

  private getIndexOfPizza = (pizzaId: String) => {
    return this.pizzas.findIndex((pizza) => {
      return pizza._id === pizzaId;
    });
  }

  selectPizza(pizza: Pizza) {
    this.selectedPizza = pizza
  }

  createNewPizza() {
    var pizza: Pizza = {
      pizzaname: '',
      name: '',
      email: '',
      phone: '',
      address: {
        city: '',
        street: ''
      },
      panpizza: false,
      familypizza: false,
    };

    // By default, a newly-created pizza will have the selected state.
    this.selectPizza(pizza);
  }

  deletePizza = (pizzaId: String) => {
    var idx = this.getIndexOfPizza(pizzaId);
    if (idx !== -1) {
      this.pizzas.splice(idx, 1);
      this.selectPizza(null);
    }
    return this.pizzas;
  }

  addPizza = (pizza: Pizza) => {
    this.pizzas.push(pizza);
    this.selectPizza(pizza);
    return this.pizzas;
  }

  updatePizza = (pizza: Pizza) => {
    var idx = this.getIndexOfPizza(pizza._id);
    if (idx !== -1) {
      this.pizzas[idx] = pizza;
      this.selectPizza(pizza);
    }
    return this.pizzas;
  }
}
