import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductsComponent,
    ProductFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
