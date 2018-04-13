import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './product.service';
import { ProductFormComponent } from './product-form/product-form.component';
import { AppRoutingModule } from './/app-routing.module';
import { HelpComponent } from './help.component';
import { ContactComponent } from './contact/contact.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ContactService } from './contact.service';

 import { registerLocaleData } from '@angular/common';
 import localeFr from '@angular/common/locales/fr';
 import localeFrExtra from '@angular/common/locales/extra/fr';

 registerLocaleData(localeFr, 'fr-CM', localeFrExtra);

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductFormComponent,
    HelpComponent,
    ContactComponent,
    WelcomeComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , HttpClientModule, AppRoutingModule
  ],
  providers: [ ContactService, ProductService, { provide: LOCALE_ID, useValue: 'fr-CM' }],
//  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
