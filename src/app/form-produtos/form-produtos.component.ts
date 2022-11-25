import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoApiService } from '../produto-api.service';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
  id!: number;
  mensagem = "";
  produto = new Produto();
  botaoAcao = "Cadastrar";

  constructor(
    private produtoApiService: ProdutoApiService,
    private route: ActivatedRoute,
    private router: Router  
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.mensagem = "";
    console.log("ID", this.id);
    if(this.id) {
      this.botaoAcao= "Editar";      
      //this.produto = Object.assign({}, 
      //  this.produtoApiService.buscarPorId(this.id));
      console.log("Produto", this.produto);
    }
  }

  private estaInserindo() {
    return !this.id;
  }

  salvar() {
    if(this.estaInserindo()) {
      this.produtoApiService.inserir(this.produto).subscribe(produto => {
        console.log("Produto Cadastrado", produto);
        this.mensagem = this.produto.nome + " cadastrado com sucesso!";
        this.produto = new Produto();
      });

    }
    else {
      this.produtoApiService.editar(this.id, this.produto);
      this.mensagem = this.produto.nome + " editado com sucesso!";

    }
  }

  cancelar() {
    //Ir para a rota '/tabela'
    this.router.navigate(['/tabela']);
  }
}
