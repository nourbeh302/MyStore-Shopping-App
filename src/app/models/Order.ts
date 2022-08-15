export class Order {
  id?: number
  name: string;
  totalPrice: number;
  address: string;
  cardNumber: string

  constructor() {
    this.id = 0
    this.name = ''
    this.totalPrice = 0
    this.address = ''
    this.cardNumber = ''
  }
}