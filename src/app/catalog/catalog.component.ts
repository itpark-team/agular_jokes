import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public products: string[] = [];
  tempProduct: string = '';
  tempIndex: number = 0;

  constructor() {
    this.products.push('кино', 'вино', 'домино');
  }

  ngOnInit(): void {
  }

  addProduct(): void {
    if (this.tempProduct === '') {
      alert('Ошибка. Введите название продукта');
      return;
    }
    this.products.push(this.tempProduct);
    this.tempProduct = '';
  }

  deleteProduct(): void {
    this.products.splice(this.tempIndex, 1);
  }

  updateProduct(): void {
    this.products[this.tempIndex] = this.tempProduct;
  }
}
