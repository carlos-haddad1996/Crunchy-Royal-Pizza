import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ClassMainPageComponent } from './mainpage.component';
import { ClassNavbaraComponent } from './nav/navbar.component';

import { RouterModule } from '@angular/router';
import { AppRoutes } from './routes';
import { ClasePizzaPage } from './pizza/pizza.component';
import { ClaseMainContent } from './mainpage/maincontent.component';
import { ClassLogin } from './login/login.component';
import { ClassSignUp } from './signup/signup.component';
import { ClassAddress } from './address/address.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { ClassCheckout } from './chekout/checkout.component';
import { ClassServiceAuth } from './Shared/autorize.service';
import { ClaseCartComponent } from './cart/cartpage.component';
import { ClassAddPizza } from './addpizzaAdmin/addpizza.component';

@NgModule({
  declarations: [
    ClassMainPageComponent,
    ClassNavbaraComponent,
    ClasePizzaPage,
    ClaseMainContent,
    ClassLogin,
    ClassSignUp,
    ClassAddress,
    ClassCheckout,
    ClaseCartComponent,
    ClassAddPizza
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAJGl5YlyWQwb3Zc-bOgmYt0tXdxzC_NsQ'
    })
  ],
  providers: [ClassServiceAuth],
  bootstrap: [ClaseMainContent]
})
export class AppModule { }
