import { Component } from '@angular/core';
import { IProduct } from './model';
import { products } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-junior-test';
  dataList: IProduct[] = products;
}
