'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/delayed-queue.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/delayed-queue-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, delayedQueue')
      .expect(200);
  });
});
