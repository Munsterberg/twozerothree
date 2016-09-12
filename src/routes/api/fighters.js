import _ from 'lodash';
import {Router} from 'express';
import Fighter from '../../models/Fighter';

const fightersRouter = Router(); // eslint-disable-line

fightersRouter.route('/fighters')
  .get((req, res) => {
    Fighter.find({}, (err, fighters) => {
      if (err) throw err;
      res.json(fighters);
    });
  })
  .post((req, res) => {
    const newFighter = _.pick(req.body, 'name', 'age');

    Fighter.create(newFighter).then((fighter) => {
      res.json(fighter);
    }, (err) => {
      res.status(400).send(err);
    });
  });

fightersRouter.get('/fighters/:id', (req, res) => {
  const fighterId = req.params.id;

  Fighter.findById(fighterId, (err, fighter) => {
    if (err) res.status(400).send();
    res.json(fighter.toJSON());
  });
});

fightersRouter.put('/fighters/:id', (req, res) => {
  const fighterId = req.params.id;
  const updatedFighter = _.pick(req.body, 'name', 'age');

  Fighter.findByIdAndUpdate(fighterId, updatedFighter, (err) => {
    if (err) throw err;
    res.json(updatedFighter);
  });
});

fightersRouter.delete('/fighters/:id', (req, res) => {
  const fighterId = req.params.id;

  Fighter.findByIdAndRemove(fighterId, (err, deletedFighter) => {
    if (err) throw err;
    res.json(deletedFighter);
  });
});

export default fightersRouter;
