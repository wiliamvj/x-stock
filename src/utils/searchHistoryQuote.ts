import axios, { AxiosResponse } from 'axios';

import { IQuery } from './interfaces/IQuery';
import { IHistoryMarket } from './interfaces/IHistoryMarket';

async function searchHistoryQuote({
  symbols,
  date_from,
  date_to,
}: IQuery): Promise<AxiosResponse<IHistoryMarket>> {
  const response = await axios({
    method: 'get',
    url: `http://api.marketstack.com/v1/eod`,
    params: {
      symbols,
      access_key: process.env.TOKEN_ALPHA_VANTAGE,
      date_from,
      date_to,
    },
  });

  console.log(response.data);

  return response;
}

export { searchHistoryQuote };
