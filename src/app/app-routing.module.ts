import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent }   from './welcome/welcome.component';
import { ContactComponent }   from './contact/contact.component';
import { HelpComponent }   from './help.component';
import { ProductDetailComponent }   from './product-detail/product-detail.component';
import { ProductFormComponent }   from './product-form/product-form.component';
import { ProductsComponent }   from './products/products.component';



const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: WelcomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'aide', component: HelpComponent },
  { path: 'fiche-produit/:id', component: ProductDetailComponent },
  { path: 'form-produit/:id', component: ProductFormComponent },
  { path: 'categories/:idCat', component: ProductsComponent },
  { path: 'produits', component: ProductsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
