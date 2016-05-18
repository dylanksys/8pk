var express = require ('express');

var steroids = require('../routers/steroids');

var app = express();

app.use('/', steroids);

app.listen(9000, function () {
  console.log('cartman'sabs listening on port 9000');
};
