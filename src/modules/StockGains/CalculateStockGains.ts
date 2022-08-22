import { Request, Response } from 'express';
import moment from 'moment';

import { searchStockQuote } from '../../utils/searchStockQuote';

interface IGains {
  stockName: string;
  purchasedAt: string;
  purchasedAmount: number;
}

class CalculateStockGains {
  async handle(req: Request, res: Response) {
    const { stockName } = req.params as unknown as IGains;
    const { purchasedAt, purchasedAmount } = req.query as unknown as IGains;

    if (!purchasedAt || !purchasedAmount) {
      throw new Error('purchasedAt and purchasedAmount is required!');
    }

    const priceOfToday = await searchStockQuote({
      symbols: stockName,
      date_from: moment().subtract(5, 'days').format('YYYY-MM-DD'),
      date_to: moment().format('YYYY-MM-DD'),
    });

    const purchaseOfDate = await searchStockQuote({
      symbols: stockName,
      date_from: purchasedAt,
      date_to: purchasedAt,
    });

    const gainsOfStock =
      priceOfToday.data.data[0].open - purchaseOfDate.data.data[0].open;

    const result = {
      name: stockName,
      lastPrice: priceOfToday.data.data[0].open,
      priceAtDate: purchaseOfDate.data.data[0].open,
      purchasedAmount: purchasedAmount,
      purchasedAt: purchasedAt,
      capitalGains: gainsOfStock * purchasedAmount,
    };

    res.json(result);
  }
}

export { CalculateStockGains };
