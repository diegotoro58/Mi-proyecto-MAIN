import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UsersService {

  httpClient = inject(HttpClient);
  baseUrl = '3.140.251.106:8080/api/users'
  userUrl = 'http://3.140.251.106:8080/api'


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