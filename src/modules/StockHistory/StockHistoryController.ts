import { Request, Response } from 'express';

import { searchHistoryQuote } from '../../utils/searchHistoryQuote';
import { iHistoryData } from './interfaces/IHistoryData';

interface IHistory {
  stockName: string;
  from: string;
  to: string;
}

class StockHistoryController {
  async handle(req: Request, res: Response) {
    const { stockName } = req.params as unknown as IHistory;
    const { from, to } = req.query as unknown as IHistory;

    const historyData = await searchHistoryQuote(stockName);

    // const data = {
    //   name: stockName,
    //   timezone: '',
    //   prices: [
    //     {
    //       opening: 0,
    //       low: 0,
    //       high: 0,
    //       closing: 0,
    //       pricedAt: '',
    //       volume: 0,
    //     },
    //   ],
    // } as iHistoryData;

    console.log(historyData.data);

    res.json();
  }
}

export { StockHistoryController };
