import { Component, OnInit } from '@angular/core';
import { ClassServiceAuth } from '../Shared/autorize.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']

})
export class ClasePizzaPage implements OnInit{

  public pizzaMenu: any
  constructor(private auth: ClassServiceAuth, private actro: ActivatedRoute){}

  ngOnInit (){
    this.pizzaMenu = this.auth.getPizzaList();
    //testing
    //this.pizzaMenu = this.auth.getPizzaById(+this.actro.snapshot.params["id"]);
  }
}
