import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UsersService {

  httpClient = inject(HttpClient);
  baseUrl = 'http://auto-scaling-group-diego-1-1725703123.us-east-2.elb.amazonaws.com:8080/api/users'
  userUrl = 'http://localhost:9000/api'


  getAll() {
    return firstValueFrom(
      this.httpClient.get<any[]>(this.baseUrl));

  }

  register(formValue: any) {
    return firstValueFrom(
      this.httpClient.post<any>(`${this.userUrl}/register`, formValue)
    )
  }

  login(formValue: any) {
    return firstValueFrom(
      this.httpClient.post<any>(`${this.userUrl}/login`, formValue)
    )
  }

  isLogged(): boolean {
    return localStorage.getItem('token_reservas') ? true : false;
  }
}
//constructor() { }