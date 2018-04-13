import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Category } from '../category';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product: Product;
//  product: Product = PRODUCTS[0];
//  products: Product[] = PRODUCTS;
  products: Product[];
  categories: Category[];

  constructor(
	  private route: ActivatedRoute,
	  private productService: ProductService,
	  private location: Location
  ) { }

  getProducts(): void {
  	const idCat = +this.route.snapshot.paramMap.get('idCat');

    this
    	.productService
    	.getProducts(idCat)
    	.subscribe( data => this.products = data);
  }

  getCategories(): void {
    this
    	.productService
    	.getCategories()
    	.subscribe(
    		data => this.categories = data
    		, error => {
    			console.log( error);
    		}
    	);
  }

  ngOnInit() {
  	this.getProducts();
  	this.getCategories();
  }


  onSelectProduct(product: Product) {
  	this.product = product;
  }

}
