import express from 'express';
import routes from './routes';

const port = process.env.PORT || 8000;

const app = express();

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
