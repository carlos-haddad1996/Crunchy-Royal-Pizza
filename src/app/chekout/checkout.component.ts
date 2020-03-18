import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClassServiceAuth } from '../Shared/autorize.service';
import { Routes, Router } from '@angular/router';


@Component({
  templateUrl: './checkoutpage.component.html',
  styleUrls: ['./checkout.component.css']
})
export class ClassCheckout implements OnInit{

/*  
  creditcardnumber:FormControl
  //cvvnumber:FormControl
  //cardtype:FormControl
  //creditcardname:FormControl
  creditcardForm:FormGroup

  constructor(public auth: ClassServiceAuth){
    this.creditcardnumber = new FormControl([Validators.required]);
  }

  ngOnInit(){
    this.creditcardForm = new FormGroup({
        creditcardnumber: this.creditcardnumber,
        //cvvnumber: this.cvvnumber,
        //cardtype: this.cardtype,
        //creditcardname: this.creditcardname,

    });
  }

    fnUpdate(formvalue){

    }
    */

   idproducto:FormControl
   nameproduct:FormControl
   description:FormControl
   precio:FormControl
   image:FormControl
   perfilForm:FormGroup
 
   constructor( private router: Router,private claseservice: ClassServiceAuth) {
    //regex - regular expressions 
    this.idproducto = new FormControl('',[Validators.required]);
    this.nameproduct = new FormControl('',[Validators.required, this.validateFruitFresa, this.validateFruitUva, this.validateFruitNaranja]);
    this.description = new FormControl('',[Validators.required]);
    this.precio =  new FormControl('',[Validators.required]);
    this.image =  new FormControl('',[Validators.required]);
  }
   
  ngOnInit()
  {
      this.perfilForm = new FormGroup({
          idproducto: this.idproducto,
          nameproduct: this.nameproduct,
          description: this.description,
          precio: this.precio,
          image: this.image
      });
  }

  validateFruitFresa(control: FormControl){
      let fruitname = control.value;
      if( control.value.startsWith("fresa") != 1){
        return null;
      }
      return { validFruitFresa: true };
  }

  validateFruitUva(control: FormControl){
    let fruitname = control.value;
    if( control.value.startsWith("uva") != 1){
      return null;
    }
    return { validFruitUva: true };
}

validateFruitNaranja(control: FormControl){
  let fruitname = control.value;
  if( control.value.startsWith("naranja") != 1){
    return null;
  }
  return { validFruitNaranja: true };
}


  NoValidNameProduct(){
    return this.nameproduct.invalid && this.nameproduct.touched;
  }

  NoValididProduct(){
    return this.idproducto.invalid && this.idproducto.touched;
  }

  NoValiddescription(){
    return this.description.invalid && this.description.touched;
  }

  NoValidprecio(){
    return this.precio.invalid && this.precio.touched;
  }

  NoValidimage(){
    return this.image.invalid && this.image.touched;
  }

  fnUpdate(formvalues){
    this.claseservice.getCreateProductValues(formvalues.idproducto, formvalues.nameproduct, formvalues.description, formvalues.precio, formvalues.image);
    this.router.navigate(['home']);
  }

  fnCancel(){
    this.router.navigate(['home']);
  }
    
}
