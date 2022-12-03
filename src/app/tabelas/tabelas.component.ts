import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { Cliente } from '../cliente';
import { ProdutoApiService } from '../produto-api.service';
import { ClienteApiService } from '../cliente-api.service';


@Component({
  selector: 'tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.css']
})
export class TabelasComponent implements OnInit {
  titulo = "Dados produto";
  nomePesquisado = "";
  lista1: Produto[]  = []
  lista2: Cliente[] = []
  
  constructor(private servico: ProdutoApiService, private servico2: ClienteApiService) {
    this.listar();
  }

  ngOnInit(): void {
  }

  listar() {
    this.servico.listar().subscribe(
      (data) => {
        this.lista1 = data;
      }
    )

    this.servico2.listar().subscribe(
      (data2) => {
        this.lista2 = data2;
      }
    )
  }

  deletar(id: number){
    this.servico.deletar(id).subscribe(res => {
      this.listar();
      console.log(res);
    });
  }
}
