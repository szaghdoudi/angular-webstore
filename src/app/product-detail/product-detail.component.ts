import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { Category } from '../category';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;
  @Input() categories: Category[];
  categorieName: string;

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

	    		if( this.categories){
//		    		this.product.cat = 
	    			this.categorieName = 
		    			this
		    			.categories
		    			.filter(item => item.id == this.product.idCat)[0].name;
	    		}
	    	}, error => {
	    		console.error(error);
	    		this.router.navigate(['/produits']);
	   	});
   	}
  }

  getCategories(): void {
    this
    	.productService
    	.getCategories()
    	.subscribe( data => {
    		this.categories = data;

			if( this.product){
//	    		this.product.cat = 
	    		this.categorieName = 
	    			this
	    			.categories
	    			.filter(item => item.id == this.product.idCat)[0].name
	    	}
    	});
  }

  ngOnInit() {
  	this.getCategories();
  	this.getProduct();
  }

}
