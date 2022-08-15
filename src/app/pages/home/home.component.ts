import { Component, OnInit } from '@angular/core';

import { Feedback } from 'src/app/models/Feedback';
import { Product } from 'src/app/models/Product';

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

  constructor() { }

  ngOnInit(): void {
    fetch('../../../assets/data.json')
      .then(res => res.json())
      .then(data => {
        this.products = data.map((p: Product) => {
          return { ...p, amount: 1 }
        })
      })
  }

  addToCart(product: Product): void {
    this.dialog = { isSuccessful: true, message: `Added ${product.name.toLowerCase()} to the cart` }
    setTimeout(() => this.dialog.isSuccessful = false, 1000);
  }

}
