import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TabelasComponent } from './tabelas/tabelas.component';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';
import { FormClienteComponent } from './form-cliente/form-cliente.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const rotas: Routes = [
  { path: 'tabela', component: TabelasComponent },
  { path: 'novo', component: FormProdutosComponent },
  { path: 'novo2', component: FormClienteComponent },
  { path: 'edit/:id', component: FormProdutosComponent},
  { path: '', redirectTo: '/tabela', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rotas)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
