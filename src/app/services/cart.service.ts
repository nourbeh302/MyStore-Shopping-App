import { Injectable } from '@angular/core';
import { Order } from '../models/Order';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts: Product[] = []
  order!: Order

  constructor() { }

  addToCart(_product: Product): void {
    const cartProduct = this.cartProducts.find(p => p.id === _product.id)
    
    if (cartProduct?.amount && _product?.amount) cartProduct.amount += _product.amount
    else this.cartProducts.push(_product)
  }

  clearCart(): Product[] {
    return this.cartProducts = []
  }

  removeFromCart(_product: Product): Product[] {
    return this.cartProducts = this.cartProducts.filter(p => p !== _product)
  }

  getCart(): Product[] {
    return this.cartProducts
  }

  setCart(_products: Product[]): void {
    this.cartProducts = _products
  }

  getOrder(): Order {
    return this.order
  }

  setOrder(_order: Order): void {
    this.order = _order
  }
}