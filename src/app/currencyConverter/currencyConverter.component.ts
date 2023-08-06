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
  currencyRates: any;
  currencyList: any;
  fromCurrency = 'USD';
  toCurrency = 'AED';
  amount = 0;
  convertedAmount = 0;

  ngOnInit() {
    this._currencyService.getCurrencyList().subscribe((data) => {
      this.currencyList = Object.keys(data.symbols);
    });
  }

  getCurrencyRateList = () => {
    return this._currencyService.getCurrencyRateList();
  };

  checkRatesValid = () => {
    return (
      this.currencyRates &&
      new Date(this.currencyRates.date).getUTCDate() === new Date().getUTCDate()
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
        this.currencyRates.rates
      );
  };

  convertCurrency = () => {
    if (!this.checkRatesValid()) {
      this.getCurrencyRateList().subscribe((data) => {
        this.currencyRates = data;
        this.getConvertedAmount();
      });
    } else {
      this.getConvertedAmount();
    }
  };
}
