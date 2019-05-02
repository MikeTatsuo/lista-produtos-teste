import { Component, OnInit, Input } from '@angular/core';

import { JanelaComponent } from "../janela/janela.component"

// models
import { Type } from "../../models/Type";

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() tipos: Type[];
  @Input() ativo: string;

  constructor(
    private janela: JanelaComponent
  ) { }

  ngOnInit() {
  }

  filter(type: string): void {
    this.janela.filterProducts(type);
  }
}
