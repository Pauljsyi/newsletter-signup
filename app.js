const express = require('express');
const bodyParser = require('body-parser');
const request = require('request')
const app = express();
const https = require('https');

app.get('/', function(req, res){
    res.send('hello world!')
})

app.listen(3000, function(){
    console.log('server is running on port 3000')
})

