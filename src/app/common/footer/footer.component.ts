import { Component, OnInit } from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {
  currentDate: Date = new Date();
  corporateName = 'Acme';
  businessUnitName = 'Studio Developer team';
  constructor() { }



}
