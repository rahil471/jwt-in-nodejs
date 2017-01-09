let express = require('express');
let app = express();
let bodyParser  = require('body-parser');
let mongoose    = require('mongoose');
global.config = require('./config/config');

let jwt    = require('jsonwebtoken');
let User   = require('./models/user');

mongoose.connect("mongodb://localhost/demo");
let jwt_secret = "shhh";
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('hello world');
});

app.use(require('./controllers'));

app.listen(3000, function(){
    console.log('App running on 3000');
});