import { Injectable } from '@angular/core';
import { Pizza } from './pizza';
import { Http, Response } from '@angular/http';

@Injectable()
export class PizzaService {
    private pizzasUrl = '/api/pizzaorders';

    constructor (private http: Http) {}

    // get("/api/pizzaorders")
    getPizzas(): Promise<void | Pizza[]> {
      return this.http.get(this.pizzasUrl)
                 .toPromise()
                 .then(response => response.json() as Pizza[])
                 .catch(this.handleError);
    }

    // post("/api/pizzaorders")
    createPizza(newPizza: Pizza): Promise<void | Pizza> {
      return this.http.post(this.pizzasUrl, newPizza)
                 .toPromise()
                 .then(response => response.json() as Pizza)
                 .catch(this.handleError);
    }

    // get("/api/pizzaorders/:id") endpoint not used by Angular app

    // delete("/api/pizzaorders/:id")
    deletePizza(delPizzaId: String): Promise<void | String> {
      return this.http.delete(this.pizzasUrl + '/' + delPizzaId)
                 .toPromise()
                 .then(response => response.json() as String)
                 .catch(this.handleError);
    }

    // put("/api/pizzas/:id")
    updatePizza(putPizza: Pizza): Promise<void | Pizza> {
      var putUrl = this.pizzasUrl + '/' + putPizza._id;
      return this.http.put(putUrl, putPizza)
                 .toPromise()
                 .then(response => response.json() as Pizza)
                 .catch(this.handleError);
    }

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}
