import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  router = inject(Router);
  usersService = inject(UsersService);

  onClickLogout() {
    localStorage.removeItem('token_reservas');
    this.router.navigate(['/login']);
  }

}
