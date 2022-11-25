import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto';

const httpOptions = { 
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProdutoApiService {

  baseAPI = "http://localhost:3000/api/produtos";

  constructor(private http: HttpClient) { }

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseAPI);
  }

  inserir(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseAPI, produto, httpOptions);
  }

  buscarPorId(id:number){
  }

  editar(id: number, produto: Produto) {
  }

  deletar(id: number) {
  }
}
