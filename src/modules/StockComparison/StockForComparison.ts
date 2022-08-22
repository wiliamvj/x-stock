import { Request, Response } from 'express';
import moment from 'moment';

import { searchHistoryQuote } from '../../utils/searchHistoryQuote';

interface IComparison {
  stockName: string;
  stocksToCompare: string;
}

interface IHistoryData {
  name: string;
  lastPrice: number;
  pricedAt: string;
}

class StockForComparison {
  async handle(req: Request, res: Response) {
    const { stockName } = req.params as unknown as IComparison;
    const { stocksToCompare } = req.query as unknown as IComparison;

    if (!stocksToCompare) {
      throw new Error('stocksToCompare  is required!');
    }

    const { data: dataAPI } = await searchHistoryQuote({
      symbols: `${stockName},${stocksToCompare}`,
      date_from: moment().subtract(5, 'days').format('YYYY-MM-DD'),
      date_to: moment().format('YYYY-MM-DD'),
    });

    console.log(dataAPI);

    const allItems = [] as IHistoryData[];

    dataAPI.data.forEach((item) => {
      const result = {
        name: item.symbol,
        lastPrice: item.open,
        pricedAt: moment().format('YYYY-MM-DD'),
      };

      allItems.push(result);
    });

    const result = {
      lastPrices: allItems,
    };

    res.json(result);
  }
}

export { StockForComparison };
