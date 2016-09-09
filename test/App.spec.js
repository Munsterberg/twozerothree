/* eslint-disable */

import app from '../src/app';
import {expect} from 'chai';
import request from 'supertest';

describe('404 on nonexistent URL', () => {
  it('should return a 404', (done) => {
    request(app)
      .get('/FailOnNoUrl')
      .expect(404)
      .expect('Content-Type', /text\/html/, done)
  });
});

