import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/complete', (req, res) => {
  res.sendFile(path.join(__dirname, 'complete.html'));
});

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'checkout.html'));
});

export default router;
