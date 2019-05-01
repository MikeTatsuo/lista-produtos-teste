import { Component, OnInit, Input } from '@angular/core';

// models
import { Store } from "../../models/Store";

@Component({
  selector: 'mercado-item',
  templateUrl: './mercado-item.component.html',
  styleUrls: ['./mercado-item.component.scss']
})
export class MercadoItemComponent implements OnInit {

  @Input() loja: Store;
  percentage: string;

  constructor() { }

  ngOnInit() {

    // transforma em número inteiro e string
    this.percentage = Math.round(this.loja.quantity_in_store * 100).toString();
  }
}
