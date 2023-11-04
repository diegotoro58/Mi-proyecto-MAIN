import { Injectable, inject } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  httpClient = inject(HttpClient);
  baseUrl = 'http://auto-scaling-group-diego-1-1725703123.us-east-2.elb.amazonaws.com:8080/api/reservas';


  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl, this.createHeaders());
  }

  createHeaders() {
    return {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem
          ('token_reservas')!
      })
    }
  }

  reservar(formValue:any){
    return firstValueFrom(this.httpClient.post<any>(`${this.baseUrl}`, formValue, this.createHeaders()))
  }
}



