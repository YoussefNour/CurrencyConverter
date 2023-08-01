import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyConverterComponent } from './currencyConverter/currencyConverter.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [			
    AppComponent,
      CurrencyConverterComponent,
      PageNotFoundComponent,
      HeaderComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
