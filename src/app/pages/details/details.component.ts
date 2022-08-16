import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/models/Product';
import { Feedback } from 'src/app/models/Feedback';

import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  product: Product
  dialog: Feedback = { isSuccessful: false, message: '' }

  constructor(
    private productService: ProductService,
    private cartService: CartService,
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

  /**
  * When the component renders, it gets a single product based on the url params 
  */
  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>
      this.productService.getProducts().subscribe(res => this.product = res[params['id'] - 1])
    )
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
    
    this.dialog = { isSuccessful: true, message: `Added ${product.amount} ${product.name.toLowerCase()}(s) to the cart` }
    setTimeout(() => this.dialog.isSuccessful = false, 1000);
  }

}