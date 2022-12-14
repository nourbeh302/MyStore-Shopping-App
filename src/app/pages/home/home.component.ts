import { Component, OnInit } from '@angular/core';

import { Feedback } from 'src/app/models/Feedback';
import { Product } from 'src/app/models/Product';

import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = 'Explore'
  products: Product[] = []
  dialog: Feedback = {
    isSuccessful: false,
    message: ''
  }

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => this.products = res.map(p => {
      return { ...p, amount: 1 }
    }))
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product)

    this.dialog = { isSuccessful: true, message: `Added ${product.name.toLowerCase()} to the cart` }
    setTimeout(() => this.dialog.isSuccessful = false, 1000);
  }

}
