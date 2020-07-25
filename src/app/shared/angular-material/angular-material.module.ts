import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [NavigationComponent, HeaderComponent, SidenavListComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
  ],
  exports: [NavigationComponent,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    HeaderComponent,
    SidenavListComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class AngularMaterialModule { }
