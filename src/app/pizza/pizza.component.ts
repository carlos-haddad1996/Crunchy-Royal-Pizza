import { Component, OnInit } from '@angular/core';
import { ClassServiceAuth } from '../Shared/autorize.service';

@Component({
  selector: 'pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']

})
export class ClasePizzaPage implements OnInit{

  public pizzaMenu: any
  constructor(private auth: ClassServiceAuth){}

  ngOnInit (){
    this.pizzaMenu = this.auth.getPizzaList();
  }
}