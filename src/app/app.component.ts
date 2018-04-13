import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebStore from component';
  categories: Category[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
  	this
    	.productService
    	.getCategories()
    	.subscribe( data => this.categories = data);
  }
}
