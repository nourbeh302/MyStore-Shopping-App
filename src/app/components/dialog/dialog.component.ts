import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @Input() message: string
  @Input() isSuccessful: boolean

  constructor() {
    this.message = ''
    this.isSuccessful = false
  }

  ngOnInit(): void { }

}