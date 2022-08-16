import { Request, Response } from 'express';

import { searchHistoryQuote } from '../../utils/searchHistoryQuote';
import { IHistoryData } from './interfaces/IHistoryData';

interface IHistory {
  stockName: string;
  from: string;
  to: string;
}

class StockHistoryController {
  async handle(req: Request, res: Response) {
    const { stockName } = req.params as unknown as IHistory;
    const { from, to } = req.query as unknown as IHistory;

    if (!from || !to) {
      throw new Error('from and to query is required!');
    }

    const { data: dataAPI } = await searchHistoryQuote({
      symbols: stockName,
      date_from: from,
      date_to: to,
    });

    const itemStock = dataAPI.data;

    const allItems = [] as IHistoryData[];

    for (let i = 0; i < itemStock.length; i++) {
      const result = {
        opening: itemStock[i].open,
        low: itemStock[i].low,
        high: itemStock[i].high,
        closing: itemStock[i].close,
        pricedAt: itemStock[i].date,
        volume: itemStock[i].volume,
      };

      allItems.push(result);
    }

    const result = {
      name: stockName,
      prices: allItems,
    };

    res.json(result);
  }
}

export { StockHistoryController };
