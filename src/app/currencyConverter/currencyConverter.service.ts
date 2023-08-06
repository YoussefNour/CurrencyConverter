import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  FixerLatestApiResponse,
  FixerSymbolsApiResponse,
} from '../Models/fixerApiResponse';

@Injectable({
  providedIn: 'root',
})
export class CurrencyConverterService {
  private baseUrl = `${environment.baseUrl}`;

  constructor(private _http: HttpClient) {}

  getCurrencyRateList = (): Observable<FixerLatestApiResponse> => {
    return this._http.get<FixerLatestApiResponse>(
      `${this.baseUrl}/latest?access_key=${environment.apiKey}`
    );
  };

  getCurrencyList = (): Observable<FixerSymbolsApiResponse> => {
    return this._http.get<FixerSymbolsApiResponse>(
      `${this.baseUrl}/symbols?access_key=${environment.apiKey}`
    );
  };
}
