import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { services } from '@app/core/services';
import { throwIfAlreadyLoaded } from './guards/module-import.guard';

@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ...services
  ]
})
export class CoreModule { 
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
