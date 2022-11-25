import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from './produto';
//Adicionado o pure (false) para renderizar a tabela
//quando remover um produto
@Pipe({
  name: 'filtroPesquisa',
  pure: false
})
export class FiltroPesquisaPipe implements PipeTransform {

  transform(listaProdutos: Produto[], valor?: string): Produto[] {
    const nome = valor ?valor :"";
    console.log(nome);
    return listaProdutos.filter(
      (produto) => 
        produto.nome.toLocaleLowerCase().includes(nome.toLowerCase())
    );
  }

}
