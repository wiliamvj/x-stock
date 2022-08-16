export interface IHistoryMarket {
  pagination: {
    limit: number;
    offset: number;
    count: number;
    total: number;
  };
  data: [
    {
      open: number;
      high: number;
      low: number;
      close: number;
      volume: number;
      adj_high: string;
      adj_low: string;
      adj_close: number;
      adj_open: string;
      adj_volume: string;
      split_factor: number;
      dividend: number;
      symbol: string;
      exchange: string;
      date: string;
    }
  ];
}
