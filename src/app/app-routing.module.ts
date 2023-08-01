import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyConverterComponent } from './currencyConverter/currencyConverter.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';

const routes: Routes = [
  { path: 'CurrencyExchnage', component: CurrencyConverterComponent },
  { path: '', redirectTo: 'CurrencyExchnage', pathMatch: 'full' }, // redirect to CurrencyExchnage
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
