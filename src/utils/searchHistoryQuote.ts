import axios from 'axios';

import { IQuery } from './interfaces/IQuery';

async function searchHistoryQuote(symbol: string) {
  const response = await axios({
    method: 'get',
    url: `https://api.marketstack.com/v1/eod`,
    params: {
      symbol,
      apikey: process.env.TOKEN_ALPHA_VANTAGE,
    },
  });

  if (response.data['Meta Data']['1. Information'] === undefined) {
    throw new Error('History is not found!');
  }

  return response;
}

export { searchHistoryQuote };
