export interface IDataMarket {
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
      last: string;
      close: string;
      volume: string;
      date: string;
      symbol: string;
      exchange: string;
    }
  ];
}
