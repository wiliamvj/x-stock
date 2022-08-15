export interface IHistoryData {
  opening: number;
  low: number;
  high: number;
  closing: number;
  pricedAt: any;
  volume: number;
}

export interface IHistoryAlpha {
  '1. open': string;
  '2. high': string;
  '3. low': string;
  '4. close': string;
  '5. volume': string;
}
