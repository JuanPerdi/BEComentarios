
//se utilizan para hacer las peticiones HTTP hacia el Backend
//comunicacion entre componentes

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { comentario } from '../interfaces/Comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private myAppUrl='https://localhost:7213/';
  private myApiUrl='api/Comentario/';

  constructor(private http:HttpClient) { }

  getListComentarios():Observable<any>{
    return this.http.get(this.myAppUrl+this.myApiUrl);
  }

  deleteComentario(id:number):Observable<any>{
    return this.http.delete(this.myAppUrl+this.myApiUrl+id);
  }

  getComentario(id:number):Observable<any>{
    return this.http.get(this.myAppUrl+this.myApiUrl+id);
  }

  saveComentario(comentario:comentario):Observable<any>{
    return this.http.post(this.myAppUrl+this.myApiUrl,comentario);
  }

  updateComentario(id:number,comentario:comentario):Observable<any>{
    return this.http.put(this.myAppUrl+this.myApiUrl+id,comentario);
  }
}
