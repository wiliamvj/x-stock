import { Request, Response } from 'express';

import { searchHistoryQuote } from '../../utils/searchHistoryQuote';
import { IHistoryData, IHistoryAlpha } from './interfaces/IHistoryData';

interface IHistory {
  stockName: string;
  date_from: string;
  date_to: string;
}

class StockHistoryController {
  async handle(req: Request, res: Response) {
    const { stockName } = req.params as unknown as IHistory;
    const { date_from, date_to } = req.query as unknown as IHistory;

    const { data: dataAPI } = await searchHistoryQuote({
      symbols: stockName,
      date_from,
      date_to,
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
