import { Request, Response } from 'express';
import moment from 'moment';

import { searchStockQuote } from '../../utils/searchStockQuote';

class SearchStockQuoteController {
  async handle(req: Request<{ stockName: string }>, res: Response) {
    const { stockName } = req.params;

    const { data } = await searchStockQuote({
      symbols: stockName,
      date_from: moment().format('YYYY-MM-DD'),
      date_to: moment().format('YYYY-MM-DD'),
    });

    const result = {
      name: stockName,
      lastPrice: data.data[0].open,
      pricedAt: moment().format('YYYY-MM-DD'),
    };

    res.json(result);
  }
}
export { SearchStockQuoteController };
