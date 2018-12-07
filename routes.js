import express from 'express';
import path from 'path';
import request from 'request';
import config from './config';

const router = express.Router();

// API

router.post('/api/create-payment', (req, res) => {
  // 2. Call /v1/payments/payment to set up the payment
  request.post(`${config.PAYPAL_API}/v1/payments/payment`,
    {
      auth:
      {
        user: config.CLIENT,
        pass: config.SECRET,
      },
      body:
      {
        intent: 'sale',
        payer:
        {
          payment_method: 'paypal',
        },
        transactions: [
          {
            amount:
              {
                total: '65.00',
                currency: 'SGD',
              },
          }],
        redirect_urls:
        {
          return_url: 'https://www.mysite.com',
          cancel_url: '/',
        },
      },
      json: true,
    }, (err, response) => {
      if (err) {
        console.error(err);
        return res.sendStatus(500);
      }
      // 3. Return the payment ID to the client
      res.json(
        {
          id: response.body.id,
        },
      );
      return null;
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
