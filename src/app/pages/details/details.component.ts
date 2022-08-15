import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/models/Product';
import { Feedback } from 'src/app/models/Feedback';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  product: Product
  dialog: Feedback = { isSuccessful: false, message: '' }

  constructor(
    private route: ActivatedRoute
  ) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      amount: 1
    }
  }

  ngOnInit(): void {
    this.product = {
      id: 5,
      name: 'Cup',
      price: 4.99,
      url: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Drink anything with it!',
      amount: 1
    }
  }

  addToCart(product: Product) {
    this.dialog = { isSuccessful: true, message: `Added ${product.amount} ${product.name.toLowerCase()}(s) to the cart` }
    setTimeout(() => this.dialog.isSuccessful = false, 1000);
  }

}