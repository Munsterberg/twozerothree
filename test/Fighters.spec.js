/* eslint-disable */

import app from '../src/app';
import {expect} from 'chai';
import request from 'supertest';
import mongoose from 'mongoose';
import Fighter from '../src/models/Fighter';

let fighterId;

before((done) => {
  mongoose.createConnection(process.env.DB, (err) => {
    if (err) console.log(err);
    console.log('connected to mongo');
  });
  Fighter.create({name: 'Conor', age: 29}, (err, newFighter) => {
    if (err) throw err;
    fighterId = newFighter._id;
  });
  done();
});

after((done) => {
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
        .expect('Content-Type', 'application/json/')
        .end((err, res) => {
          let body = res.body[0];
          expect(body._id).to.not.equal(null);
          expect(body).to.have.property('name');
          expect(body.name).to.not.equal(null);
          expect(body.age).to.not.equal(null);
          expect(body.age).to.be.above(0);
          expect(body._id).to.have.length.above(1);
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

  describe('GET a fighter', () => {
    it('should return a single fighter by id', (done) => {
      request(app)
        .get('/api/fighters/' + fighterId)
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', 'application/json/')
        .end((err, res) => {
          expect(res.body.name).to.equal('Conor');
          expect(res.body.age).to.equal(29);
          expect(res.body._id).to.have.length.above(1);
          done();
        });
    });
  });

  describe('PUT a fighter', () => {
    it('should update a single fighter in the databse', (done) => {
      request(app)
        .put('/api/fighters/' + fighterId)
        .set('Accept', 'application/json')
        .send({
          name: 'Nate',
          age: 32
        })
        .expect(200)
        .expect('Content-Type', 'application/json')
        .end((err, res) => {
          expect(res.body.name).to.equal('Nate');
          expect(res.body.age).to.equal(32);
          done();
        });
    });
  });
});
