import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    LayoutModule
  ]
})
export class SharedModule { }
