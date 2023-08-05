import { Component, OnInit } from '@angular/core';
import { CurrencyConverterService } from './currencyConverter.service';
import { FixerApiResponse } from '../Models/fixerApiResponse';

@Component({
  selector: 'app-currencyConverter',
  templateUrl: './currencyConverter.component.html',
  styleUrls: ['./currencyConverter.component.css'],
})
export class CurrencyConverterComponent implements OnInit {
  constructor(private _currencyService: CurrencyConverterService) {}
  CurrencyRates: any;
  fromCurrency = 'USD';
  toCurrency = 'AED';
  amount = 0;
  convertedAmount = 0;
  ngOnInit() {}

  checkRatesValid = () => {
    return (
      this.CurrencyRates &&
      new Date(this.CurrencyRates.date).getTime() < new Date().getTime()
    );
  };

  convertCurrency = () => {
    if (!this.checkRatesValid()) {
      this._currencyService.getCurrencyRateList().subscribe((data) => {
        this.CurrencyRates = data;
        this.convertedAmount =
          this.amount * this.CurrencyRates.rates[this.toCurrency];
      });
    } else {
      this.convertedAmount =
        this.amount * this.CurrencyRates.rates[this.toCurrency];
    }
  };
}
