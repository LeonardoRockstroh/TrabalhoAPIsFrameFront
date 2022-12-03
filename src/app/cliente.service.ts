import { Injectable } from '@angular/core';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  listaCliente: Cliente[] = [
    {_id:1, nome:"Cliente 1", email: "teste@gmail.com"},
    {_id:2, nome:"Cliente 2", email: "teste@gmail.com"},
    {_id:3, nome:"Cliente 3", email: "teste@gmail.com"},
    {_id:4, nome:"Cliente 4", email: "teste@gmail.com"},
  ];

  constructor() { }

  inserir(cliente: Cliente) {
    console.log('aqui 01')
    this.listaCliente.push(cliente);
  }

  listar() {
    return this.listaCliente;
  }

  buscarPorId(id:number): Cliente{
    const cliente = this.listaCliente.find(cliente => cliente._id === id);
    return cliente ?cliente :new Cliente();
  }

  editar(id: number, cliente: Cliente) {
    const indice = this.getIndice(id);
    if(indice >=0)
      this.listaCliente[indice] = cliente;
  }

  deletar(id: number) {
    const indice = this.getIndice(id);
    if(indice >=0) 
      this.listaCliente.splice(indice,1);    
  }

  private getIndice(id: number) {
    return this.listaCliente.findIndex(cliente => cliente._id === id);
  }
}
