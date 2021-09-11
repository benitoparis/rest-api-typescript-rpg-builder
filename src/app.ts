import express from 'express';

const app = express();
const port = 3000;

app.get('/player', (req, res) => {
  res.send('Les joueurs');
});

app.get('/team', (req, res) => {
  res.send('Les équipes!!');
});

app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope.');
});


app.listen(port, () => {

  return console.log(`server is listening on ${port}`);
});