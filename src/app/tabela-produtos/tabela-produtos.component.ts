import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit {
  titulo = "Tabela de Produtos";
  nomePesquisado = "";
  lista: Produto[] = []
  
  constructor(private servico: ProdutoService) {
    this.lista = this.servico.listar();
  }

  ngOnInit(): void {
  }

  deletar(id: number){
    this.servico.deletar(id);
  }

}
