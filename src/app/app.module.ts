import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyConverterComponent } from './currencyConverter/currencyConverter.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';

@NgModule({
  declarations: [		
    AppComponent,
      CurrencyConverterComponent,
      PageNotFoundComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
