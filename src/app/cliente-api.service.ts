import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

const httpOptions = { 
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class ClienteApiService {

  baseAPI = "http://localhost:3000/api/cliente";

  constructor(private http: HttpClient) { }

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseAPI);
  }

  inserir(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseAPI, cliente, httpOptions);
  }
}