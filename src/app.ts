import express from 'express';
import * as bodyParser from 'body-parser';
import itemsRouter from './routes/items-routes';

const app = express();
app.use(bodyParser.json());

const port = 3000;

app.use('/items', itemsRouter);

app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope..');
});


app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});