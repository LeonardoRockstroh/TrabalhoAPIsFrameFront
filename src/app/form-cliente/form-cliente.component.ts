import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteApiService } from '../cliente-api.service';

@Component({
  selector: 'form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {
  id!: number;
  mensagem = "";
  cliente = new Cliente();
  botaoAcao = "Cadastrar";

  constructor(
    private ClienteApiService: ClienteApiService,
    private route: ActivatedRoute,
    private router: Router  
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.mensagem = "";
    console.log("ID", this.id);
    if(this.id) {
      this.botaoAcao= "Editar";      
      //this.ClienteApiService.buscarPorId(this.id).subscribe(cli => {
        //this.cliente = cli;  
        //console.log(this.cliente);   
      //})
    }
  }

  private estaInserindo() {
    return !this.id;
  }

  salvar() {
    if(this.estaInserindo()) {
      this.ClienteApiService.inserir(this.cliente).subscribe(cliente => {
        console.log("Cliente Cadastrado", cliente);
        this.mensagem = this.cliente.nome + " cadastrado com sucesso!";
        this.cliente = new Cliente();
      });

      if (!this.cliente.nome) {
        this.mensagem = "Nome é obrigatório";
      }
    }
    else {
        this.mensagem = `${this.cliente.nome} já inserido!`; 
    }
  }

  cancelar() {
    //Ir para a rota '/tabela'
    this.router.navigate(['/tabela']);
  }
}
