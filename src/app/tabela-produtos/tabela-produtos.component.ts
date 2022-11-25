import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoApiService } from '../produto-api.service';
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
  
  constructor(private servico: ProdutoApiService) {
    this.listar();
  }

  ngOnInit(): void {
  }

  listar() {
    this.servico.listar().subscribe(
      (data) => {
        this.lista = data;
      }
    )
  }



  deletar(id: number){
    this.servico.deletar(id);
  }

}
