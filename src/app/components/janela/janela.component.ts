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
  currentProductId: number;
  stores: Store[];

  constructor(
    private productsService: ProductsService,
    private typesService: TypesService
  ) { }

  ngOnInit() {

    // busca tipos de produtos
    this.typesService.getTypes().subscribe((respTypes: Type[]) => {
      this.types = respTypes;
      this.currentType = respTypes[0].short;
    })

    // busca produtos
    this.productsService.getProducts().subscribe((respProducts:Product[]) => {
      this.products = respProducts;

      // busca lojas com o primeiro item do array de produtos
      this.productsService.getProductStores(respProducts[0].id).subscribe((respStores:Store[]) => {
        this.stores = respStores;
      })
    })
  }

}
