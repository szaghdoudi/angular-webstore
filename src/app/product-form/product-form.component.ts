import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { Category } from '../category';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Input() product: Product;
  @Input() categories: Category[];
  message: string;

  constructor(
	  private route: ActivatedRoute,
	  private productService: ProductService,
	  private location: Location,
	  private router: Router
  ) { }

  getProduct(): void {

  	if( !this.product) {

	  	const id = +this.route.snapshot.paramMap.get('id');

	    this
	    	.productService
	    	.getProduct(id)
	    	.subscribe( data => {
	    		this.product = data;
	    	}, error => {
	    		console.error(error);
	    		this.router.navigate(['/produits']);
	   	});
   	}
  }

  resetProduct(): void {
	this
    	.productService
    	.getProduct(this.product.id)
    	.subscribe( data => this.product = data);
  }

  deleteProduct(): void {
	this
    	.productService
    	.deleteProduct(this.product.id)
    	.subscribe( data => {
    		this.router.navigate(['/produits']);
    	});
  }

  getCategories(): void {
    this
    	.productService
    	.getCategories()
    	.subscribe( data => this.categories = data );
  }

  saveProduct(): void {
  	if( 0 == this.product.id) {
  		//insertion
	    this
	    	.productService
	    	.postProduct(this.product)
	    	.subscribe( data => {
	    		this.product = data;
	    		this.message = `Le produit no "${this.product.id}" à été créé avec succès !`;
	    	});  		

  	} else {
	    this
	    	.productService
	    	.putProduct(this.product)
	    	.subscribe( data => {
	    		this.message = `Le produit "${this.product.name}" à été mis à jour avec succès !`;
	    	});  		
  	}

  }

  newProduct(): void {
  	this.product = new Product();
  	this.product.id = 0;
  }

  ngOnInit() {
  	this.getCategories();
  	this.getProduct();
  }
}
