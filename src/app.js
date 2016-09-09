import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import morgan from 'morgan';
import mongoose from 'mongoose';

import homeRoutes from './routes/home';

import apiFightersRoutes from './routes/api/fighters';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/../public')));
app.use(morgan());

app.use('/', homeRoutes);
app.use('/', apiFightersRoutes);

app.use((err, req, res, next) => {
  console.log('an unhandled application error found:', err);
  res.status(500).send();
});

export default app;
