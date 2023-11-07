
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private myAppUrl='https://localhost:7213/';
  private myApiUrl='api/Reservas/';

  constructor(private http:HttpClient) { }

  getListReservas():Observable<any>{
    return this.http.get(this.myAppUrl+this.myApiUrl);
  }
}