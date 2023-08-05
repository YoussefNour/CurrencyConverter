import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FixerLatestApiResponse } from '../Models/fixerApiResponse';

@Injectable({
  providedIn: 'root',
})
export class CurrencyConverterService {
  private baseUrl = `${environment.baseUrl}/latest?access_key=${environment.apiKey}`;
  constructor(private _http: HttpClient) {}
  getCurrencyRateList = (): Observable<FixerLatestApiResponse> => {
    return this._http.get<FixerLatestApiResponse>(`${this.baseUrl}`);
  };
}
