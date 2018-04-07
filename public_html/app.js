var app = require('express')();
var bodyParser = require('body-parser');
var path = require('path');

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "motuBday"
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'wish.html'));
});

app.post('/data', function(req, res) {
    console.log(req.body.name);
    console.log(req.body.message);
    // Add these values to your MySQL database here
	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	  var sql = "INSERT INTO wishes (name, message) VALUES ('" + req.body.name + "', '" + req.body.message + "')";
	  con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("1 record inserted");
	  });
	  
		
	});
	
	const mysql = require('mysql');

	const pool = mysql.createPool({
	  host: 'localhost',
	  user: 'root',
	  password: '',
	  database: 'motuBday',
	  charset: 'utf8'
	});

	let sql1 ='SELECT * FROM wishes';

	pool.query(sql1, (err, res, cols)=>{
	  if(err) throw err;
	  console.log(res);
	});
	
});
	
	
	

app.listen(8080);