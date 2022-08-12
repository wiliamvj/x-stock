import { Request, Response } from 'express';

import { searchStockQuote } from '../../utils/searchStockQuote';

class SearchStockQuoteController {
  async handle(req: Request<{ stockName: string }>, res: Response) {
    const { stockName } = req.params;

    const { data } = await searchStockQuote(stockName);

    const result = {
      name: data['Global Quote']['01. symbol'],
      lastPrice: Number(data['Global Quote']['05. price']),
      pricedAt: data['Global Quote']['07. latest trading day'],
    };

    res.json(result);
  }
}
export { SearchStockQuoteController };
