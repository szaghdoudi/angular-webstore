import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Product } from './product';
import { Category } from './category';
//import { PRODUCTS } from './mock-products';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable()
export class ProductService {

  private productsUrl = 'http://localhost:3000/products';
  private categoriesUrl = 'http://localhost:3000/categories';

  getProducts(idCat:number): Observable<Product[]> {

  	let _url = this.productsUrl;
  	if( idCat) { _url += `?idCat=${idCat}`}

    return this.http.get<Product[]>(_url);
  }

  getProduct(id:number): Observable<Product> {

  	let _url = this.productsUrl;
  	if( id) { _url += `/${id}`}

    return this
		.http
		.get<Product>(_url)
		.pipe(catchError(this.handleError(`getProduct(${id})`, (new Product))));
  }

  deleteProduct(id:number): Observable<any> {

    return this
		.http
		.delete<any>( this.productsUrl + '/' + id)
		.pipe(catchError(this.handleError(`deleteProduct(${id})`, {})));
  }

  putProduct(product:Product): Observable<Product> {

    return this
		.http
		.put<Product>( this.productsUrl + '/' + product.id, product)
		.pipe(catchError(this.handleError(`putProduct(${product})`, (new Product) )));
  }

  postProduct(product:Product): Observable<Product> {

//  	product.id = null;

    return this
		.http
		.post<Product>( this.productsUrl, product)
		.pipe(catchError(this.handleError(`postProduct(${product})`, (new Product) )));
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl);
  }


  constructor(private http: HttpClient) { }

	private handleError<T> (operation = 'operation', result?: T) {
	  return (error: any): Observable<T> => {

	    // TODO: send the error to remote logging infrastructure
//	    console.error(error); // log to console instead

	    // TODO: better job of transforming error for user consumption
	    console.warn(`${operation} => ${error.message}`);
	    throw `${operation} => ${error.message}`;
	    


	    // Let the app keep running by returning an empty result.
//	    return of(result as T);
	  };
	}


}
