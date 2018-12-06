import express from 'express';
import path from 'path';

const port = process.env.PORT || 8000;

const app = express()
  .use('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/checkout.html'));
  })
  .listen(port, (err) => {
    console.log(`Server running on ${port}`);
  });
