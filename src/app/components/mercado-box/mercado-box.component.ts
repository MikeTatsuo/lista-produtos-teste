import { Component, OnInit, Input } from '@angular/core';

// models
import { Store } from "../../models/Store";

@Component({
  selector: 'mercado-box',
  templateUrl: './mercado-box.component.html',
  styleUrls: ['./mercado-box.component.scss']
})
export class MercadoBoxComponent implements OnInit {

  @Input() lojas: Store[];
  @Input() spinnerMercados: boolean;

  constructor() { }

  ngOnInit() {
  }

}
