import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moeda'
})
export class MoedaPipe implements PipeTransform {
  //valor = 20
  transform(valor: number): string {
    const valorDecimal = valor.toFixed(2); //20.00
    const valorMoeda = 'R$ '+valorDecimal.replace('.',',');
    return valorMoeda; //Exemplo: "R$ 20,00"
  }

}
