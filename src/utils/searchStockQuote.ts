import axios from 'axios';

async function searchStockQuote(symbol: string) {
  try {
    const response = await axios({
      method: 'get',
      url: `https://www.alphavantage.co/query?function=GLOBAL_QUOTE`,
      params: {
        symbol,
        apikey: process.env.TOKEN_ALPHA_VANTAGE,
      },
    });

    return response;
  } catch {
    throw new Error('Error to search stock quote');
  }
}

export { searchStockQuote };
