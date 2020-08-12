import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderListModule } from 'primeng/orderlist';
import { ToolbarModule } from 'primeng/toolbar';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogComponent } from './dialog/dialog.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { TableComponent } from './table/table.component';




@NgModule({
  declarations: [OrderListComponent, DialogComponent, DialogContentComponent, TableComponent,
  ],
  imports: [
    CommonModule,
    DynamicDialogModule,
    OrderListModule,
    ToolbarModule
  ],
  exports: [
    OrderListComponent,
    DialogComponent,
    TableComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class SharedModule { }
