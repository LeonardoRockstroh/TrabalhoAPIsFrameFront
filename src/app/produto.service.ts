import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  listaProdutos: Produto[] = [
    {_id:1, nome:"Produto 1", preco: 20},
    {_id:2, nome:"Produto 2", preco: 30},
    {_id:3, nome:"Produto 3", preco: 40},
    {_id:4, nome:"Produto 4", preco: 50},
  ];

  constructor() { }

  inserir(produto: Produto) {
    this.listaProdutos.push(produto);
  }

  listar() {
    return this.listaProdutos;
  }

  buscarPorId(id:number): Produto{
    const produto = this.listaProdutos.find(produto => produto._id === id);
    return produto ?produto :new Produto();
  }

  editar(id: number, produto: Produto) {
    const indice = this.getIndice(id);
    if(indice >=0)
      this.listaProdutos[indice] = produto;
  }

  deletar(id: number) {
    const indice = this.getIndice(id);
    if(indice >=0) 
      this.listaProdutos.splice(indice,1);    
  }

  private getIndice(id: number) {
    return this.listaProdutos.findIndex(produto => produto._id === id);
  }
}
