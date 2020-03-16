import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ClassMainPageComponent } from './mainpage.component';
import { ClassNavbaraComponent } from './nav/navbar.component';
import { ClaseService } from './mainpage.service';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './routes';
import { ClasePizzaPage } from './pizza/pizza.component';
import { ClaseMainContent } from './mainpage/maincontent.component';
import { ClassLogin } from './login/login.component';
import { ClassSignUp } from './signup/signup.component';
import { ClassAddress } from './address/address.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    ClassMainPageComponent,
    ClassNavbaraComponent,
    ClasePizzaPage,
    ClaseMainContent,
    ClassLogin,
    ClassSignUp,
    ClassAddress
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAJGl5YlyWQwb3Zc-bOgmYt0tXdxzC_NsQ'
    })
  ],
  providers: [ClaseService],
  bootstrap: [ClaseMainContent]
})
export class AppModule { }
