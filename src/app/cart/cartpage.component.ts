import { Component, OnInit } from '@angular/core';
import { ClassServiceAuth } from '../Shared/autorize.service';

@Component({
  selector: 'cart',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']

})
export class ClaseCartComponent implements OnInit{

  public pizzaMenu: any
  

  constructor(private auth: ClassServiceAuth){}

  ngOnInit(){
    this.pizzaMenu = this.auth.getPizzaList();
  }

}

