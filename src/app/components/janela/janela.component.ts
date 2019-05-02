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
  allProducts: Product[];
  stores: Store[];
  currentProducts: Product[];
  currentProduct: number;
  loadingMercados: boolean = false;
  loadingProdutos: boolean = false;

  isCollapsed: boolean = false;

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

  private buscaTipos(): void {
    this.typesService.getTypes().subscribe((respTypes: Type[]) => {
      this.types = respTypes;
      this.currentType = respTypes[0].short;
    })
  }

  private buscaProdutos(): void {
    this.currentProducts = [];
    this.loadingProdutos = true;
    this.productsService.getProducts().subscribe((respProducts: Product[]) => {
      this.allProducts = respProducts;
      this.currentProducts = respProducts;
      this.loadingProdutos = false;
      this.buscaMercados(respProducts[0].id);
    })
  }

  public buscaMercados(id: number): void {
    this.stores = [];
    this.loadingMercados = true;
    this.productsService.getProductStores(id).subscribe((respStores: Store[]) => {
      this.stores = respStores;
      this.currentProduct = id;
      this.loadingMercados = false;
    })
  }

  public toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  public filterProducts(type: string): void {
    this.currentProducts = [];
    this.currentProducts = type === "all" ? this.allProducts : this.allProducts.filter((prod: Product) => {
      return prod.product_type === type.toUpperCase();
    })
    this.currentType = type;
    if (this.currentProducts.length) {
      this.buscaMercados(this.currentProducts[0].id);
    } else {
      this.stores = [];
    }
  }
}
