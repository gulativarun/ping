var path      = require('path');
var express   = require('express');
var app       = express();


var publicPath = path.join(__dirname, '../public');
var port = process.env.PORT || 7001; 
console.log( process.env.PORT);

app.use(express.static(publicPath));

app.listen(port, () => {
	console.log(`On port ${port}`);
})