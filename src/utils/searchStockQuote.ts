import axios, { AxiosResponse } from 'axios';
import { IDataMarket } from './interfaces/IDataMarket';

import { IQuery } from './interfaces/IQuery';

async function searchStockQuote({
  symbols,
  date_from,
  date_to,
}: IQuery): Promise<AxiosResponse<IDataMarket>> {
  const response = await axios({
    method: 'get',
    url: `http://api.marketstack.com/v1/intraday`,
    params: {
      symbols,
      access_key: process.env.TOKEN_ALPHA_VANTAGE,
      date_from,
      date_to,
    },
  });

  return response;
}

export { searchStockQuote };
