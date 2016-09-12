/* eslint-disable */

import app from '../src/app';
import {expect} from 'chai';
import request from 'supertest';
import mongoose from 'mongoose';
import Fighter from '../src/models/Fighter';

beforeEach((done) => {
  mongoose.createConnection(process.env.DB, (err) => {
    if (err) console.log(err);
    console.log('connected to mongo');
  });
  done();
});

afterEach((done) => {
  Fighter.remove({}, (err) => {
    if(err) throw err;
    done();
  });
});

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
  });

  describe('POST a fighter', () => {
    it('should post a fighter to the database', (done) => {
      request(app)
        .post('/api/fighters')
        .set('Accept', 'application/json')
        .send({
          name: 'Jake',
          age: 23
        })
        .expect(200)
        .end((err, res) => {
          expect(res.body.name).to.equal('Jake');
          expect(res.body.age).to.equal(23);
          done();
        });
    });
  });
});
