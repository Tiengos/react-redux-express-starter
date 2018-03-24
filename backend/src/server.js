var express = require('express');
var app = express();

app.get('/api/v1/hello', function (req, res) {
  res.json([{
  	'message': 'Hello world!'
  }])  
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});