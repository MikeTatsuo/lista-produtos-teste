import { Component, OnInit } from '@angular/core';

// services
import { ProductsService } from "../../services/products.service";
import { TypesService } from "../../services/types.service";

// models
import { Product } from "../../models/Product";
import { Type } from "../../models/Type";
import { Store } from "../../models/Store";

@Component({
  selector: 'janela',
  templateUrl: './janela.component.html',
  styleUrls: ['./janela.component.scss']
})
export class JanelaComponent implements OnInit {

  currentType: string;
  types: Type[];
  products: Product[];
  stores: Store[];

  constructor(
    private productsService: ProductsService,
    private typesService: TypesService
  ) { }

  ngOnInit() {

    // busca tipos de produtos
    this.buscaTipos();

    // busca produtos e mercados
    this.buscaProdutos();
  }

  buscaTipos():void {
    this.typesService.getTypes().subscribe((respTypes: Type[]) => {
      this.types = respTypes;
      this.currentType = respTypes[0].short;
    })
  }

  buscaProdutos():void {
    this.productsService.getProducts().subscribe((respProducts:Product[]) => {
      this.products = respProducts;
      this.buscaMercados(respProducts[0].id)
    })
  }

  buscaMercados(id: number):void {
    this.productsService.getProductStores(id).subscribe((respStores:Store[]) => {
      this.stores = respStores;
    })
  }
}
