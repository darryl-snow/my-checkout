import express from 'express';
import path from 'path';

const app = express()
  .use('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/checkout.html'));
  })
  .listen(8000, (err) => {
    console.log('Server running');
  });
