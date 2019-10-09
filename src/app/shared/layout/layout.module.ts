import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Layout Components */
import { MainLayoutComponent } from './app-layouts/main-layout.component';

/* Header Component */
import { MainHeaderComponent } from './headers/main-header/main-header.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    MainHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class LayoutModule { }
