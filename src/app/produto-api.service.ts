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

  buscarPorId(id:number): Observable<Produto> {
    const uri = `${this.baseAPI}/${id}`;//baseAPI + "/"+ id;
    return this.http.get<Produto>(uri);  
  }

  editar(id: number, produto: Produto): Observable<Produto> {
    const uri = `${this.baseAPI}/${id}`;//baseAPI + "/"+ id;
    return this.http.put<Produto>(uri, produto, httpOptions);    
  }

  deletar(id: number){
    const uri = `${this.baseAPI}/${id}`;//baseAPI + "/"+ id;
    return this.http.delete(uri);
  }
}
