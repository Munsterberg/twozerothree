import _ from 'lodash';
import {Router} from 'express';
import Fighter from '../../models/Fighter';

const fightersRouter = Router();

fightersRouter.route('/fighters')
  .get((req, res) => {
    res.json({id: 1, name: 'Stipe Miocic'});
  })
  .post((req, res) => {
    const newFighter = _.pick(req.body, 'name', 'age');

    Fighter.create(newFighter).then((fighter) => {
      res.json(fighter);
    }, (err) => {
      res.status(400).send(err);
    });
  });

export default fightersRouter;
