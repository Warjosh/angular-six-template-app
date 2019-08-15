import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type':  'application/json'
  })
};

export const baseUrl = 'http://localhost:3002/reserva/';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Object[]> {
    return this.httpClient.get<Object[]>(baseUrl + 'usuario/find', httpOptions);
  }

  public get(username): Observable<Object> {
    return this.httpClient.post(baseUrl + 'usuario/find', username, httpOptions);
  }

  public getCod(username): Observable<Object> {
    return this.httpClient.post(baseUrl + 'usuario/find_cod', username, httpOptions);
  }

  public add(usuario): Observable<Object> {
    return this.httpClient.post(baseUrl + 'usuario/add', usuario, httpOptions);
  }

  public update(usuario): Observable<Object> {
    return this.httpClient.post(baseUrl + 'usuario/update', usuario, httpOptions);
  }

}
