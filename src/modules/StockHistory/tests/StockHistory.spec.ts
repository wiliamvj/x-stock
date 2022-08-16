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

describe('Search history quote', () => {
  const expectedArray = [
    'opening',
    'low',
    'high',
    'closing',
    'pricedAt',
    'volume',
  ];

  it('I hope the user receives a history quotes', async () => {
    const res = await request(app)
      .get(`/stocks/ibm/history`)
      .set('Authorization', `Bearer ${token}`)
      .query({
        from: moment().subtract(1, 'days').format('YYYY-MM-DD'),
        to: moment().format('YYYY-MM-DD'),
      });

    expect(res.status).toBe(200);
    expect(['opening', 'low', 'high', 'closing', 'pricedAt', 'volume']).toEqual(
      expect.arrayContaining(expectedArray)
    );
    expect(res.body.prices);
  });
});
