// import { Request, Response } from 'express';
// import moment from 'moment';

// import { searchForComparison } from '../../utils/searchForComparison';
// interface IHistoryData {
//   name: string;
//   lastPrice: number;
//   pricedAt: string;
// }

// interface IComparison {
//   stockName: string;
//   stocksToCompare: string[];
// }

// class StockForComparison {
//   async handle(req: Request, res: Response) {
//     const { stocksToCompare } = req.query as unknown as IComparison;

//     const allItems = [] as IHistoryData[];

//     const teste1 = await searchForComparison({
//       symbols: stocksToCompare,
//       date_from: '2022-08-15',
//       date_to: '2022-08-16',
//     });

//     console.log(teste1.data);

//     const result1 = {
//       name: 'teste',
//       lastPrice: 199.9,
//       pricedAt: '1',
//     };

//     allItems.push(result1);

//     const result = {
//       lastPrices: [
//         {
//           name: 'Teste',
//           lastPrice: 199.9,
//           pricedAt: moment().format('YYYY-MM-DD'),
//         },
//         {
//           name: 'Teste',
//           lastPrice: 199.9,
//           pricedAt: 278.99,
//         },
//         {
//           name: 'Teste',
//           lastPrice: 199.9,
//           pricedAt: 278.99,
//         },
//       ],
//     };

//     res.json(result);
//   }
// }

// export { StockForComparison };

import { Request, Response } from 'express';
import moment from 'moment';

import { searchForComparison } from '../../utils/searchForComparison';

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

    const { data: dataAPI } = await searchForComparison({
      symbols: `${stockName},${stocksToCompare}`,
      date_from: moment().subtract(1, 'days').format('YYYY-MM-DD'),
      date_to: moment().format('YYYY-MM-DD'),
    });

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
