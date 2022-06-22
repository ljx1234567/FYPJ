const mysql = require("mysql");

// Local server
var connection = mysql.createConnection({
    host: 'localhost',
    database:'docufile',
    user: 'root',
    password: 'password'
})

// AWS server
// var connection = mysql.createConnection({
//     host: 'docufile.cxljlbpdqrxq.ap-southeast-1.rds.amazonaws.com',
//     database:'docufiledb',
//     user: 'admin',
//     password: 'NypCiti2022'
// })

module.exports = connection;