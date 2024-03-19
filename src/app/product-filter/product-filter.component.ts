import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../model';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {

  @Output() onSubmitCheck: EventEmitter<IProduct[]> = new EventEmitter();
  max: number;
  min: number;
  @Input() products: IProduct[] = [];

  constructor() { }


  ngOnInit() { }

  onSubmit() {
    if (!this.max && !this.min) {
      alert("Make sure values aren't empty!");
      return;
    }
    const filterData = this.products.filter((product) => { return (product.price >= this.min && product.price <= this.max)});
    console.log(filterData);
    this.onSubmitCheck.emit(filterData);
  }

}
