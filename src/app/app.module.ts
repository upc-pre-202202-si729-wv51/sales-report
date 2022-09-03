import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatePipe } from "@angular/common";
import { ReportComponent } from './sales/report/report.component';
import { ItemListComponent } from './sales/item-list/item-list.component';
import { FooterComponent } from './common/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    ItemListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
