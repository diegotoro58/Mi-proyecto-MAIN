import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  httpClient = inject(HttpClient);
  baseUrl =  environment.ipPublic + '/api/users'
  userUrl =  environment.ipPublic + '/api'


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