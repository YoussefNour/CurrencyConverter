import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FixerApiResponse } from '../Models/fixerApiResponse';

@Injectable({
  providedIn: 'root',
})
export class CurrencyConverterService {
  private baseUrl = `${environment.baseUrl}/latest?access_key=${environment.apiKey}`;
  constructor(private _http: HttpClient) {}
  getCurrencyRateList = (
    baseCurrency = 'USD'
  ): Observable<FixerApiResponse> => {
    console.log(`${this.baseUrl}`);

    return this._http.get<FixerApiResponse>(`${this.baseUrl}`);
  };
}
