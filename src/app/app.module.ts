import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CollapseModule } from "ngx-bootstrap";

import { AppComponent } from './app.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProdutosBoxComponent } from './components/produtos-box/produtos-box.component';
import { MercadoBoxComponent } from './components/mercado-box/mercado-box.component';
import { ProdutoItemComponent } from './components/produto-item/produto-item.component';
import { MercadoItemComponent } from './components/mercado-item/mercado-item.component';
import { JanelaComponent } from './components/janela/janela.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    NavBarComponent,
    ProdutosBoxComponent,
    MercadoBoxComponent,
    ProdutoItemComponent,
    MercadoItemComponent,
    JanelaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
