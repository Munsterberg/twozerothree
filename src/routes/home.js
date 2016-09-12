import {Router} from 'express';

const router = Router(); // eslint-disable-line

router.get('/', (req, res) => {
  res.send('Hola');
});

export default router;
