import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeachesService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://auto-scaling-group-diego-1-1725703123.us-east-2.elb.amazonaws.com:8080/api/beaches');
  }
}