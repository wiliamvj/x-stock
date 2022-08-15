import { Request, Response } from 'express';

import { searchHistoryQuote } from '../../utils/searchHistoryQuote';
import { IHistoryData, IHistoryAlpha } from './interfaces/IHistoryData';

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

    const objectForDate = historyData.data['Time Series (60min)'];

    const itemStock = Object.values(objectForDate) as IHistoryAlpha[];

    const allItems = [] as IHistoryData[];

    for (let i = 0; i < itemStock.length; i++) {
      const result = {
        opening: Number(itemStock[i]['1. open']),
        low: Number(itemStock[i]['3. low']),
        high: Number(itemStock[i]['2. high']),
        closing: Number(itemStock[i]['4. close']),
        pricedAt: Date.now(),
        volume: Number(itemStock[i]['5. volume']),
      };

      allItems.push(result);
    }

    const result = {
      name: stockName,
      timezone: objectForDate['6. Time Zone'],
      prices: allItems,
    };

    res.json(result);
  }
}

export { StockHistoryController };
