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

describe('Search today quote', () => {
  it('I hope the user receives a quote today', async () => {
    const res = await request(app)
      .get(`/stock/ibm/quote`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('name');
    expect(res.body).toHaveProperty('lastPrice');
    expect(res.body).toHaveProperty('pricedAt');
  });
});
