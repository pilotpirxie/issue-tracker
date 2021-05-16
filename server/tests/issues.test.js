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

describe('Check issues', () => {
  const boardKey = 'CdlCRiivNkGBtIanz3kb6h4S73vfutch';
  let boardId = 0;
  let issueId = 0;

  it('create new board', async () => {
    await request(app)
      .post('/boards/')
      .send({ key: boardKey })
      .expect(200)
      .then((res) => {
        expect(res.body.key).toBe(boardKey);
        boardId = res.body.id;
      });
  });

  it('create new issue in board', async () => {
    await request(app)
      .post('/issues')
      .send({
        boardId,
        boardKey,
        title: 'Sample issue',
        description: 'Lorem ipsum',
      })
      .expect(200)
      .then((res) => {
        expect(res.body.title).toBe('Sample issue');
        expect(res.body.description).toBe('Lorem ipsum');
        expect(res.body.id).not.toBe(0);

        issueId = res.body.id;
      });
  });

  it('missing data', async () => {
    await request(app)
      .post('/issues')
      .send({
        boardId,
        title: 'Sample issue',
        description: 'Lorem ipsum',
      })
      .expect(400);
  });

  it('invalid data', async () => {
    await request(app)
      .post('/issues')
      .send({
        boardId,
        boardKey,
        title: '',
        description: '',
      })
      .expect(400);
  });

  it('update issue status to pending', async () => {
    await request(app)
      .put(`/issues/${issueId}`)
      .send({
        boardId,
        boardKey,
        status: 1,
      })
      .expect(200);
  });

  it('update issue status to done', async () => {
    await request(app)
      .put(`/issues/${issueId}`)
      .send({
        boardId,
        boardKey,
        status: 2,
      })
      .expect(200);
  });

  it('get single issue', async () => {
    await request(app)
      .get(`/issues/${issueId}`)
      .expect(200)
      .then((res) => {
        expect(res.body.title).toBe('Sample issue');
        expect(res.body.description).toBe('Lorem ipsum');
        expect(res.body.id).toBe(issueId);
        expect(res.body.status).toBe(2);
      });
  });
});
