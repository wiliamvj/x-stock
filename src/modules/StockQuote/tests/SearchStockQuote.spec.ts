import { app } from '../../../app';
import request from 'supertest';

describe('Search today qupte', () => {
  it('I hope the user receives a quote today', async () => {
    const res = await request(app).get(`/stock/ibm/quote`);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('name');
    expect(res.body).toHaveProperty('lastPrice');
    expect(res.body).toHaveProperty('pricedAt');
  });
});
