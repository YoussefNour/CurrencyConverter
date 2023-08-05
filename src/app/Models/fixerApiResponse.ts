export interface FixerApiResponse {
  success: boolean;
  timestamp: Date;
  base: string;
  date: Date;
  rates: any;
}
