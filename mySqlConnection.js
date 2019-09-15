/*
mySqlConnection.js : Code to initiate a connection between node.js and mysql database
Created by Arvind Bahl
*/

var mysql = require('mysql')
var con = mysql.createConnection({
	host: "localhost",
	user : "root",
	password : "****************"
});

con.connect(function(err){
	if (err) throw err;
	console.log("Connected !");	
});