import express from 'express';
import path from 'path';

const port = process.env.PORT || 8000;

const app = express()
  .use('/complete', (req, res) => {
    res.sendFile(path.join(__dirname, 'complete.html'));
  })
  .use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'checkout.html'));
  })
  .listen(port, (err) => {
    console.log(`Server running on ${port}`);
  });
