const express = require('express');
const dbConnect = require('./mongoose');
var cors = require('cors');

const app = express();

app.use(cors());

app.get('/', async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
  res.send(data);
});

app.use(function (req, res, next) {
  res.setHeader(
    'Content-Security-Policy',
    "script-src 'self' https://localhost:3000"
  );
  return next();
});

app.listen(3000);
