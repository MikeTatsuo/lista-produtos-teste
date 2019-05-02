import { Component, OnInit } from '@angular/core';
import { JanelaComponent } from "../janela/janela.component";

@Component({
  selector: 'title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {

  chevron:string = "fa-chevron-up";

  constructor(
    private janela: JanelaComponent
  ) { }

  ngOnInit() {
  }

  collapse(){
    this.chevron = this.chevron === "fa-chevron-up" ? "fa-chevron-down" : "fa-chevron-up";
    this.janela.toggleCollapse();
  }

}
