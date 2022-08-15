import axios from 'axios';

async function searchSymbol(company: string) {
  try {
    const response = await axios({
      method: 'get',
      url: `https://finnhub.io//api/v1/search`,
      params: {
        q: company,
        token: process.env.TOKEN_ALPHA_VANTAGE,
      },
    });

    return response;
  } catch {
    throw new Error('Error to search company Symbol');
  }
}

export { searchSymbol };
