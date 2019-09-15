/*
DataBaseCreation.js : Code to create a MySQL database using Node.js
Created by Arvind Bahl
*/

var mysql = require('mysql')
var con = mysql.createConnection({
	host: "localhost",
	user : "root",
	password : "***************"
});

con.connect(function(err){
	if (err) throw err;
	console.log("Connected !");	
	con.query("CREATE DATABASE firstdb", function (err, result){
		if (err) throw err;
		console.log("DataBase Created");	
	});
});

