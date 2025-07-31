// backend/tests/auth.test.js
const request = require('supertest');
const app = require('../index'); // si exportas app desde index.js

describe('Auth', () => {
  it('Debería responder con 404 en GET /api/auth/login (sólo prueba de estructura)', async () => {
    const res = await request(app).get('/api/auth/login');
    expect(res.statusCode).toBe(404);
  });
});
