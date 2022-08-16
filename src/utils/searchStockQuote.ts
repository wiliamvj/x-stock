import axios, { AxiosResponse } from 'axios';
import { IDataMarket } from '../modules/StockQuote/interfaces/IDataMarket';

interface IQuery {
  symbols: string;
  date_from: string;
  date_to: string;
}

async function searchStockQuote({
  symbols,
  date_from,
  date_to,
}: IQuery): Promise<AxiosResponse<IDataMarket>> {
  console.log({ symbols, date_from, date_to });
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
