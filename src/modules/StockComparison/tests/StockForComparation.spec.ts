import { app } from '../../../app';
import request from 'supertest';

let token = '';

beforeAll(async () => {
  const res = await request(app).post('/create/token').send({
    name: 'Wiliam V. Joaquim',
    email: 'wiliamjoaquim@gmail.com',
  });

  token = res.body.token;
});

describe('Search comparaison quote', () => {
  const expectedArray = ['name', 'lastPrice', 'pricedAt'];

  it('I hope the user receives a comparison quotes', async () => {
    const res = await request(app)
      .get(`/stocks/ibm/compare`)
      .set('Authorization', `Bearer ${token}`)
      .query({
        stocksToCompare: 'AAPL,PYPL',
      });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('lastPrices');
    expect(['name', 'lastPrice', 'pricedAt']).toEqual(
      expect.arrayContaining(expectedArray)
    );
  });
});
