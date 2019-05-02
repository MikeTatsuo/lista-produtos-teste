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
    // inicia a animação do ProgressBar
    this.animateProgressBar(this.loja.quantity_in_store);
  }

  // anima o Progress Bar e armazena em this.percentage como string
  animateProgressBar(p) {
    let max = Math.round(p * 100);
    let current = 0;
    let animate = setInterval(() => {
      current++;
      this.percentage = current.toString();
      if (current === max) {
        this.stopProgressBar(animate);
      }
    }, 10)
  }

  // interrompe a animação do ProgressBar
  stopProgressBar(progressBar: any) {
    clearInterval(progressBar);
  }

}
