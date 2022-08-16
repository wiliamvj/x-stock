import { Request, Response } from 'express';

import { searchSymbol } from '../../utils/searchSymbol.ts';
import { ICompany } from './interfaces/ICompany';
import { ISocksCountries } from './interfaces/ISocksCountries';

class StockSearchSymbolController {
  async symbol(req: Request<{}, {}, ICompany>, res: Response) {
    const { company } = req.body;

    const searchCompanyInApi = await searchSymbol(company);

    console.log(searchCompanyInApi.data);

    const bestMatches = searchCompanyInApi.data.bestMatches as string[];

    if (bestMatches.length <= 0 && searchCompanyInApi.status === 200) {
      return res.status(404).json({ message: 'No companies found!' });
    }

    const stocksCountries = [] as ISocksCountries[];

    let result = {
      symbol: '',
      name: '',
      type: '',
      region: '',
      marketOpen: '',
      marketClose: '',
      timezone: '',
      currency: '',
      matchScore: '',
    };

    bestMatches.forEach((cyp, i) => {
      result = {
        symbol: cyp['1. symbol'],
        name: cyp['2. name'],
        type: cyp['3. type'],
        region: cyp['4. region'],
        marketOpen: cyp['5. marketOpen'],
        marketClose: cyp['6. marketClose'],
        timezone: cyp['7. timezone'],
        currency: cyp['8. currency'],
        matchScore: cyp['9. matchScore'],
      } as ISocksCountries;

      stocksCountries.push(result);
    });

    res.json(stocksCountries);
  }
}
export { StockSearchSymbolController };
