import {Routes} from "@angular/router";
import { ClassMainPageComponent } from './mainpage.component';
import { ClasePizzaPage } from './pizza/pizza.component';
import { ClassLogin } from './login/login.component';
import { ClassSignUp } from './signup/signup.component';
import { ClassAddress } from './address/address.component';
import { ClassCheckout } from './chekout/checkout.component';

export const AppRoutes: Routes = [
    {path: 'checkout', component:ClassCheckout},
    {path: 'address', component:ClassAddress},
    {path: 'registro', component:ClassSignUp},
    {path: 'login', component:ClassLogin},
    {path: 'pizza', component:ClasePizzaPage},
    {path: 'home', component:ClassMainPageComponent},
    {path: '', redirectTo:'/home', pathMatch: 'full'}
];