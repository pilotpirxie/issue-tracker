const request = require('supertest');
const app = require('../app');
const sql = require('../config/sequelize');

beforeEach(() => {
  console.log = jest.fn();
  console.info = jest.fn();
  console.error = jest.fn();
  console.warn = jest.fn();
});

afterAll(async () => {
  await sql.connection.close();
});

describe('Check boards', () => {
  const key = 'CdlCRiivNkGBtIanz3kb6h4S73vfutch';
  let id = 0;

  it('board doesn\'t exists', async () => {
    await request(app)
      .get('/boards/-1')
      .expect(404);
  });

  it('create new board', async () => {
    await request(app)
      .post('/boards/')
      .send({ key })
      .expect(200)
      .then((res) => {
        expect(res.body.key).toBe(key);
        id = res.body.id;
      });
  });

  it('board exists', async () => {
    await request(app)
      .get(`/boards/${id}/${key}`)
      .expect(200)
      .then((res) => {
        expect(res.body.key).toBe(key);
        expect(res.body.id).toBe(id);
      });
  });
});
