import { Request, Response } from 'express';

class CalculateStockGains {
  async handle(req: Request, res: Response) {
    const result = {
      name: 'ibm',
      lastPrice: 199.9,
      priceAtDate: 18.9,
      purchasedAmount: 2,
      purchasedAt: '2022-09-10',
      capitalGains: 220.9,
    };

    res.json(result);
  }
}

export { CalculateStockGains };
