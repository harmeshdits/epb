import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Custom Modules */
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app.routing';

/* Components */
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
