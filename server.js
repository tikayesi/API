var express = require('express');
var bodyParser = require ('body-parser')
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.json({message: "welcome to the jungle"});
})

app.post('/', function(req, res){
	var message = req.body.message;
	message == "user...";
	res.json({message: message});
})

app.listen(3000);
console.log("aplikasi sedang berjalan di port 3000");