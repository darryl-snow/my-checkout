import express from 'express';
import path from 'path';

const router = express.Router();

// API

router.post('/api/create-payment', (req, res) => {
  res.status(200).json({
    message: 'OK',
  });
});

router.post('/api/execute-payment', (req, res) => {
  res.status(200).json({
    message: 'OK',
  });
});

// Pages

router.get('/complete', (req, res) => {
  res.sendFile(path.join(__dirname, 'complete.html'));
});

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'checkout.html'));
});

export default router;
