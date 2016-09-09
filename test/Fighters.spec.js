/* eslint-disable */

import app from '../src/app';
import {expect} from 'chai';
import request from 'supertest';

describe('Fighters spec', () => {
  describe('GET all fighters', () => {
    it('should return all fighters', (done) => {
      request(app)
        .get('/api/fighters')
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /application\/json/)
        .end((err, res) => {
          expect(res.body.id).to.not.equal(null);
          expect(res.body).to.have.property('name');
          expect(res.body.name).to.not.equal(null);
          expect(res.body.id).to.be.above(0);
          done();
        });
    });
  })
});
