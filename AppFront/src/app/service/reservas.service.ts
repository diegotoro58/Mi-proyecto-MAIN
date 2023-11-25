import { Injectable, inject } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  httpClient = inject(HttpClient);
  baseUrl = environment.ipPublic + '/api/reservas';


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



