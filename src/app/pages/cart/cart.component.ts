import { Component, OnInit } from '@angular/core';

import { Order } from 'src/app/models/Order';
import { Product } from 'src/app/models/Product';

import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts: Product[] = []
  order: Order = {
    name: '',
    totalPrice: 0,
    address: '',
    cardNumber: ''
  }

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    // Getting cart products
    this.cartProducts = this.cartService.getCart()

    // Getting total price
    this.getTotalPrice(this.cartProducts)
  }

  removeFromCart(product: Product): void {
    this.cartProducts = this.cartService.removeFromCart(product)
  }

  clearCart(): void {
    this.cartProducts = this.cartService.clearCart()
  }

  getTotalPrice(products: Product[]): number {
    return this.order.totalPrice = products.reduce((total, p) => total + (p.amount * p.price), 0)
  }
}