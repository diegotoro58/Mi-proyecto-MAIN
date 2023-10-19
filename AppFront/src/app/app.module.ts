import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { BeachesListComponent } from './components/beaches/beaches-list/beaches-list.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/layout/home/home.component';
import { ConocenosComponent } from './components/layout/conocenos/conocenos.component';
import { TipsComponent } from './components/layout/tips/tips.component';
import { ContactoComponent } from './components/layout/contacto/contacto.component';
import { VreservaComponent } from './components/layout/vreserva/vreserva.component';
import { HcreservaComponent } from './components/layout/hcreserva/hcreserva.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    BeachesListComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    ConocenosComponent,
    TipsComponent,
    ContactoComponent,
    VreservaComponent,
    HcreservaComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
