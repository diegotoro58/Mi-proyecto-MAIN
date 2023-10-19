import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { BeachesListComponent } from './components/beaches/beaches-list/beaches-list.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { HomeComponent } from './components/layout/home/home.component';
import { TipsComponent } from './components/layout/tips/tips.component';
import { ConocenosComponent } from './components/layout/conocenos/conocenos.component';
import { ContactoComponent } from './components/layout/contacto/contacto.component';
import { VreservaComponent } from './components/layout/vreserva/vreserva.component';
import { HcreservaComponent } from './components/layout/hcreserva/hcreserva.component';
import { loginGuard } from './guards/login.guard';
import { NavbarComponent } from './components/layout/navbar/navbar.component';


const routes: Routes = [
  { path: 'users', component: UsersListComponent },
  { path: 'beaches', component: BeachesListComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'tips', component: TipsComponent },
  { path: 'conocenos', component: ConocenosComponent },
  { path: 'hcreserva', component: HcreservaComponent, canActivate: [loginGuard] },
  { path: 'vreserva', component: VreservaComponent, canActivate: [loginGuard] },
  { path: 'contacto', component: ContactoComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
