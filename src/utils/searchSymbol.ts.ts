import axios from 'axios';

async function searchSymbol(company: string) {
  try {
    const response = await axios({
      method: 'get',
      url: `https://www.alphavantage.co/query?function=SYMBOL_SEARCH`,
      params: {
        keywords: company,
        apikey: process.env.TOKEN_ALPHA_VANTAGE,
      },
    });

    return response;
  } catch {
    throw new Error('Error to search company Symbol');
  }
}

export { searchSymbol };
