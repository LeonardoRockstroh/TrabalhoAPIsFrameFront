import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { MoedaPipe } from './moeda.pipe';
import { FiltroPesquisaPipe } from './filtro-pesquisa.pipe';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
//registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    TabelaProdutosComponent,
    FormProdutosComponent,
    MoedaPipe,
    FiltroPesquisaPipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [
//    { provide: LOCALE_ID, useValue: 'pt'},
//    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
