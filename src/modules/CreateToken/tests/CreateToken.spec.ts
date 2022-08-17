import { app } from '../../../app';
import request from 'supertest';

describe('Create user Token', () => {
  it('I hope the receive a new user token', async () => {
    const res = await request(app).post(`/create/token`).send({
      name: 'Wiliam V. Joaquim',
      email: 'wiliamjoaquim@gmail.com',
    });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('token');
  });
});
