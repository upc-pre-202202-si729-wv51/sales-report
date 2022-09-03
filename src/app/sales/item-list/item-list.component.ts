import { Component, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  title = 'Item List';
  date: Date = new Date();
  simpleDate!: string | null;
  discount = 20;
  items: any[] = [
    { id: 1, name: 'iPhone 12', desc: 'Refurbished iPhone 12', price: 1099},
    { id: 2, name: 'Samsung S22', desc: 'A great Samsung Galaxy S series smartphone', price: 869},
    { id: 3, name: 'Asus ROG Phone 5S', desc: 'Asus world-beating gaming phone', price: 1199}
  ];

  constructor(private datePipe: DatePipe) { }

  updateDate(): void {
    this.date = new Date();
    this.simpleDate = this.datePipe.transform(this.date, 'short');
  }
}
