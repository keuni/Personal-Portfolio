const express = require('express');
const app = express();
const PORT = 4000;
const bodyParser = require('body-parser');
const participantsRouter = require('./routes/participants');
const cors = require('cors');

app.use((req, res, next) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  next();
});

app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    origin: 'http://keuni-portfolio.s3-website.ap-northeast-2.amazonaws.com',
    // [
    //   'http://keuni.github.io',
    //   'https://keuni.github.io',
    //   'http://localhost:3000',
    //   'http://keuni-portfolio.s3-website.ap-northeast-2.amazonaws.com',
    // ]
    method: ['GET', 'POST'],
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.use('/', participantsRouter);

app.listen(PORT, () => {
  console.log(`server listen on ${PORT}`);
});
