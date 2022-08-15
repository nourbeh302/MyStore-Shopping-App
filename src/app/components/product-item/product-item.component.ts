import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product
  @Output() addToCartEvent: EventEmitter<Product> = new EventEmitter<Product>()

  constructor() { 
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      amount: 0
    }
  }

  ngOnInit(): void {
  }

  emitAddToCart(product: Product) {
    this.addToCartEvent.emit(product)
  }

}
