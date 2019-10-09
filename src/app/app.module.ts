import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PizzaDetailsComponent } from './pizzaorders/pizza-details/pizza-details.component';
import { PizzaListComponent } from './pizzaorders/pizza-list/pizza-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaDetailsComponent,
    PizzaListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
