import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LayoutModule } from './layout/layout.module';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    AutocompleteLibModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    AutocompleteLibModule
  ]
})
export class SharedModule { }
