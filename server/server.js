const express = require('express')
const cors = require('cors')
const connection = require('./database');
const app = express()

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: true
}

app.get("/", cors(corsOptions), (req, res) => {
    res.json({ "message": "hello world" });
});

app.get("/roles", cors(corsOptions), (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree", "userFour"], "admins": ["adminOne", "adminTwo", "adminThree", "adminFour"] });
});

const users = [
    { id: 1, name: 'user1' },
    { id: 2, name: 'user2' },
    { id: 3, name: 'user3' },
];

app.get("/users", cors(corsOptions), (req, res) => {
    res.send(users);
});

app.get("/users/:id", cors(corsOptions), (req, res) => {
    const user = users.find(c => c.id === parseInt(req.params.id));
    if (!user) res.status(404).send('The user with the given ID was not found');
    res.send(user);
});

app.get("/login", cors(corsOptions), (req, res) => {
    console.log(req);
    console.log("req")
    var first = 5;
    var second = 10;
    
    var result = first + second;
    
    res.json({"first": 5, "second": 10, "result": result})
});

app.post("/login", cors(corsOptions), (req, res) => {
    res.json({"alo": 1 });
});

app.get('/data', cors(corsOptions),function(req,res){
    let sql="SELECT * FROM df_docutype";
    connection.query(sql,function(err,results){
        if(err)throw err;
        res.send(results);
    });
 });

 // 
 app.listen(5000,function(){
    console.log('App Listening on port 5000');
    connection.connect(function(err){
        if(err)throw err;
        console.log('Database connected!');
   })
});

module.exports = app;