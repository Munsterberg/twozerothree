/* eslint-disable */

import app from '../src/app';
import {expect} from 'chai';
import request from 'supertest';

describe('GET all fighters', () => {
  it('should return all fighters', (done) => {
    request(app)
      .get('/api/fighters')
      .expect(200)
      .expect('Content-Type', /application\/json/, done)
  });
});
