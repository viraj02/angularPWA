import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderListModule } from 'primeng/orderlist';



@NgModule({
  declarations: [OrderListComponent,
  ],
  imports: [
    CommonModule,
    OrderListModule
  ],
  exports: [
    OrderListComponent,
  ]
})
export class SharedModule { }
