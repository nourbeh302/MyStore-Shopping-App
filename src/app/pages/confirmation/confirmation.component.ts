import { Component, OnInit } from '@angular/core';

import { Order } from 'src/app/models/Order';

import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  order: Order = {
    name: '',
    totalPrice: 0,
    address: '',
    cardNumber: ''
  }
  
  constructor(private cartService: CartService) {}

  ngOnInit(): void { this.order = this.cartService.getOrder() }

}