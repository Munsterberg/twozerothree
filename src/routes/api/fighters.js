import {Router} from 'express';

const fightersRouter = Router();

fightersRouter.route('/fighters')
  .get((req, res) => {
    res.json({id: 1, name: 'Stipe Miocic'});
  });

export default fightersRouter;
