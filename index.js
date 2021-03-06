import bodyParser from 'body-parser';
import express from 'express';
import routes from './routes';

const port = process.env.PORT || 8000;

const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());
app.use('/', routes);

const server = app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

// For testing
module.exports = app;
module.exports.stop = () => {
  server.close();
};
