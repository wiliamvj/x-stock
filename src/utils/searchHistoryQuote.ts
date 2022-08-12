import axios from 'axios';

async function searchHistoryQuote(symbol: string) {
  const response = await axios({
    method: 'get',
    url: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=60min`,
    params: {
      symbol,
      apikey: process.env.TOKEN_ALPHA_VANTAGE,
    },
  });

  if (response.data['Meta Data']['Information'] === undefined) {
    throw new Error('History is not found!');
  }

  return response;
}

export { searchHistoryQuote };
