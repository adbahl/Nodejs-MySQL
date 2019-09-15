/*
TableCreation.js : Code to create a create a MySQL databse Table using Node.js.
Created by Arvind Bahl
*/

var mysql = require('mysql')
var con = mysql.createConnection({
	host: "localhost",
	user : "root",
	password : "****************",
	database : "firstdb"
	
});

con.connect(function(err){
	if (err) throw err;
	console.log("Connected !");	
	var sql = "CREATE TABLE customers(name VARCHAR(255), address VARCHAR(255))"
	con.query(sql, function (err, result){
		if (err) throw err;
		console.log("Table Created");	
	});
});

