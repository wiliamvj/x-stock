import { app } from '../../../app';
import request from 'supertest';
import moment from 'moment';

let token = '';

beforeAll(async () => {
  const res = await request(app).post('/create/token').send({
    name: 'Wiliam V. Joaquim',
    email: 'wiliamjoaquim@gmail.com',
  });

  token = res.body.token;
});

describe('Search gains quote', () => {
  it('I hope the user receives a gains quotes', async () => {
    const res = await request(app)
      .get(`/stocks/ibm/gains`)
      .set('Authorization', `Bearer ${token}`)
      .query({
        purchasedAt: moment().subtract(5, 'days').format('YYYY-MM-DD'),
        purchasedAmount: 5,
      });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('name');
    expect(res.body).toHaveProperty('lastPrice');
    expect(res.body).toHaveProperty('priceAtDate');
    expect(res.body).toHaveProperty('purchasedAmount');
    expect(res.body).toHaveProperty('purchasedAt');
    expect(res.body).toHaveProperty('capitalGains');
  });
});
