var express = require('express');
var app = express();
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

app.get('/:timein', function (req, res) {
	jsonRes = {"unix":null,"natural":null};
	var timeParse = new Date(req.params.timein);

	if (!(isNaN(timeParse) || timeParse == 'Invalid Date')){
		jsonRes.unix=timeParse.getTime();
		jsonRes.natural=months[timeParse.getMonth()]+' '+timeParse.getDate()+', '+timeParse.getFullYear();
	}
	else if (!(isNaN(Number(String(req.params.timein))))){
		timeParse = new Date(parseInt(req.params.timein));
		if (!(timeParse == 'Invalid Date')){
			jsonRes.unix=timeParse.getTime();
			jsonRes.natural=months[timeParse.getMonth()]+' '+timeParse.getDate()+', '+timeParse.getFullYear();
		}
	}
	res.end(JSON.stringify(jsonRes));	
});

app.listen(8080, function () {
  console.log('Timestamp Microservice listening on port 8080!');
});

