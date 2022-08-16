import { Request, Response } from 'express';

interface IComparison {
  stockName: string;
}

class StockForComparison {
  async handle(req: Request, res: Response) {
    const { stockName } = req.params as unknown as IComparison;

    res.json({ message: stockName });
  }
}

export { StockForComparison };
