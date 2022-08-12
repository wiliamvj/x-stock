import axios from 'axios';

async function searchStockQuote(symbol: string) {
  const response = await axios({
    method: 'get',
    url: `https://www.alphavantage.co/query?function=GLOBAL_QUOTE`,
    params: {
      symbol,
      apikey: process.env.TOKEN_ALPHA_VANTAGE,
    },
  });

  if (response.data['Global Quote']['01. symbol'] === undefined) {
    throw new Error('Name is not found!');
  }

  return response;
}

export { searchStockQuote };
