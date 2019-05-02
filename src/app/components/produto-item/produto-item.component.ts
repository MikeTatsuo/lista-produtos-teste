import { Component, OnInit, Input } from '@angular/core';
import { JanelaComponent } from "../janela/janela.component"

// models
import { Product } from "../../models/Product";

@Component({
  selector: 'produto-item',
  templateUrl: './produto-item.component.html',
  styleUrls: ['./produto-item.component.scss']
})
export class ProdutoItemComponent implements OnInit {

  @Input() produto: Product;
  @Input() ativo: string;
  @Input() atual: number;

  constructor(
    private janela: JanelaComponent
  ) { }

  ngOnInit() {
  }

  // busca os mercados do produto selecionado
  atualizaMercado(id: number): void {
    this.janela.buscaMercados(id);
  }
}
