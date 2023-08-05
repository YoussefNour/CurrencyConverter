export interface FixerLatestApiResponse {
  success: boolean;
  timestamp: Date;
  base: string;
  date: Date;
  rates: any;
}

export interface FixerSymbolsApiResponse {
  success: true;
  symbols: any;
}
