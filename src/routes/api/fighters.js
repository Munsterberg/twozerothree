import {Router} from 'express';

const router = Router();

router.get('/fighters', (req, res) => {
  res.send('/fighters');
});

export default router;
