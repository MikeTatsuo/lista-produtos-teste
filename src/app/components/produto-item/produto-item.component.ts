import { Component, OnInit, Input } from '@angular/core';

// models
import { Product } from "../../models/Product";

@Component({
  selector: 'produto-item',
  templateUrl: './produto-item.component.html',
  styleUrls: ['./produto-item.component.scss']
})
export class ProdutoItemComponent implements OnInit {

@Input() produto: Product;

  constructor() { }

  ngOnInit() {
  }

}
