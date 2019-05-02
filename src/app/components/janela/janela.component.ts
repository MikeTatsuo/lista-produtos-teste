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

  private currentType: string;
  private types: Type[];
  private products: Product[];
  private stores: Store[];

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

  private buscaTipos():void {
    this.typesService.getTypes().subscribe((respTypes: Type[]) => {
      this.types = respTypes;
      this.currentType = respTypes[0].short;
    })
  }

  private buscaProdutos():void {
    this.productsService.getProducts().subscribe((respProducts:Product[]) => {
      this.products = respProducts;
      this.buscaMercados(respProducts[0].id)
    })
  }

  public buscaMercados(id: number):void {
    this.productsService.getProductStores(id).subscribe((respStores:Store[]) => {
      this.stores = respStores;
    })
  }
}
