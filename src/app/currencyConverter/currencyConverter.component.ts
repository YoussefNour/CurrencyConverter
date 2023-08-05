import { Component, OnInit } from '@angular/core';
import { CurrencyConverterService } from './currencyConverter.service';
import { FixerLatestApiResponse } from '../Models/fixerApiResponse';

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

  getCurrencyRateList = () => {
    return this._currencyService.getCurrencyRateList();
  };

  checkRatesValid = () => {
    return (
      this.CurrencyRates &&
      new Date(this.CurrencyRates.date).getTime() === new Date().getTime()
    );
  };

  getCurrencyRatioFromBase = (
    toCurrency: string,
    fromCurrency: string,
    Rates: any
  ) => {
    return Rates[toCurrency] / Rates[fromCurrency];
  };

  getConvertedAmount = () => {
    this.convertedAmount =
      this.amount *
      this.getCurrencyRatioFromBase(
        this.toCurrency,
        this.fromCurrency,
        this.CurrencyRates.rates
      );
  };

  convertCurrency = () => {
    if (!this.checkRatesValid()) {
      this.getCurrencyRateList().subscribe((data) => {
        this.CurrencyRates = data;
        this.getConvertedAmount();
      });
    } else {
      this.getConvertedAmount();
    }
  };
}
