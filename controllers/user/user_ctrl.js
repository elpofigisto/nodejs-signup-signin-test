/**
 * Created by akozlovskiy on 11/12/2014.
 */
//users_controller.js

var user = require("../../models/user_model");
var mysql = require('mysql'),
    mysqlUtilities = require('mysql-utilities');
//
var connection = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : 'root',
    database    : 'chatio',
    port        : 3306
});
exports.create_user = function(req, res) {
    //connection.query('use chatio');
    if(req.method.toLowerCase() == "post") {
        console.log(checkUserInDB(req.body.email));
        connection.query('INSERT INTO `users` (`username`, `password`, `email`) VALUES ("' + req.body.name + '", "' + req.body.pass + '", "' + req.body.email + '");' ,
            function(err, row) {
                if(err)	{
                    throw err;
                    res.send({
                        success : false
                    });
                } else {
                    res.send({
                        success : true
                    });
                    console.log( row );
                }
            }
    )
    }
    else {
        console.log('GET not allowed');
    }
}


exports.signIn = function(req, res) {
    if(req.method.toLowerCase() == "post") {

        connection.query('SELECT * from users WHERE email="'+ req.body.email + '"' ,
            function(err, row) {
                if(err)	{
                    throw err;
                } else {
                    if (row[0].password == req.body.pass) {
                        res.send({
                            signin: true
                        })
                    } else {
                        res.send({
                            signin: false
                        })
                    }
                }
            }
        )
    }
    else {
        console.log('GET not allowed');
    }
}


checkUserInDB = function(email) {
    var isInBase;
    connection.query('SELECT * from users WHERE email="'+ email + '"' ,
        function(err, row) {
            if(err)	{
                throw err;
            } else {
                console.log(row)
                if(row[0].email == email) {
                   isInBase = true
                } else isInBase = false
            }
        }
    )
    return isInBase
}