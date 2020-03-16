import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class ClassLogin {

  constructor(private router: Router, private authService: AuthService){}

  fnLogin(formvalues){
    this.authService.loginUser(formvalues.userName, formvalues.password);
    this.router.navigate(['home']);
  }

  fnCancel(){
    this.router.navigate(['home']);
  } 
}
