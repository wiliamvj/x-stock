import { Request, Response } from 'express';

interface IHistory {
  stockName: string;
  from: string;
  to: string;
}

class StockHistoryController {
  async handle(req: Request, res: Response) {
    const { stockName } = req.params as unknown as IHistory;
    const { from, to } = req.query as unknown as IHistory;

    const data = {
      name: 'ok',
      prices: [
        {
          opening: 10,
          low: 5,
          high: 12,
          closing: 12,
          pricedAt: Date.now(),
          volume: 90,
        },
        {
          opening: 10,
          low: 5,
          high: 12,
          closing: 12,
          pricedAt: Date.now(),
          volume: 90,
        },
        {
          opening: 10,
          low: 5,
          high: 12,
          closing: 12,
          pricedAt: Date.now(),
          volume: 90,
        },
      ],
    };

    res.json(data);
  }
}

export { StockHistoryController };
