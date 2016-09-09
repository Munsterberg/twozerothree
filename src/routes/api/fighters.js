import {Router} from 'express';

const fightersRouter = Router();

fightersRouter.route('/fighters')
  .get((req, res) => {
    res.send('/fighters');
  });

export default fightersRouter;
