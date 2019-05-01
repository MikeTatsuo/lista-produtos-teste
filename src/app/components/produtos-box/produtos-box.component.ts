import { Component, OnInit, Input } from '@angular/core';

// models
import { Product } from "../../models/Product";

@Component({
  selector: 'produtos-box',
  templateUrl: './produtos-box.component.html',
  styleUrls: ['./produtos-box.component.scss']
})
export class ProdutosBoxComponent implements OnInit {

@Input() produtos: Product[];
@Input() ativo: string;

  constructor(
  ) { }

  ngOnInit() {
  }

}
