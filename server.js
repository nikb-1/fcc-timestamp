var express = require('express');
var app = express();

app.get('/:timein', function (req, res) {
	console.log(req.params.timein);
	res.send(req.params.timein);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

