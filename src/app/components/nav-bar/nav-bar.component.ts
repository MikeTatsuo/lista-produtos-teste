import { Component, OnInit, Input } from '@angular/core';

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
  ) { }

  ngOnInit() {
  }

}
