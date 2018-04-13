import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Contact } from './contact';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class ContactService {

  private contactsUrl = 'http://localhost:3000/contacts';
/*
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
*/
  postContact(contact:Contact): Observable<Contact> {

    return this
		.http
		.post<Contact>( this.contactsUrl, contact)
		.pipe(
			catchError(
				this.handleError(
					`postContact(${contact})`
					, (new Contact)
				)
			)
		);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.warn(`${operation} => ${error.message}`);
      throw `${operation} => ${error.message}`;
	  };
	}

  constructor(private http: HttpClient) { }

}
