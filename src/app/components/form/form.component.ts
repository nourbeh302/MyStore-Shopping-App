import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Order } from 'src/app/models/Order';

import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  @Output() clearCartEvent: EventEmitter<void> = new EventEmitter()
  @Input() order: Order = {
    name: '',
    address: '',
    totalPrice: 0,
    cardNumber: ''
  }

  nameIsInvalid: boolean = false
  addressIsInvalid: boolean = false
  creditCardIsInvalid: boolean = false

  constructor(private route: Router, private cartService: CartService) { }

  ngOnInit(): void { }

  validateName(value: string): void {
    this.nameIsInvalid = value.length < 3 && value.length > 0
  }

  validateAddress(value: string): void {
    this.addressIsInvalid = value.length < 6 && value.length > 0
  }

  validateCreditCardNumber(value: string): void {
    this.creditCardIsInvalid = value.length < 16 && value.length > 0 || isNaN(+value)
  }

  emitClearCart(): void {
    this.clearCartEvent.emit()
  }

  checkout(): void {
    if (!this.creditCardIsInvalid) {
      this.cartService.setOrder(this.order)

      this.route.navigateByUrl('/confirmation')
      this.cartService.clearCart()
    }
  }
}