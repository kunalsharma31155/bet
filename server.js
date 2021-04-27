const express = require('express');
const app = express();
const path = require('path');
require('./config/config');
require('./startup/prod') (app);
require('./models/db');

require('./startup/routes') (app);
app.use(express.static(path.join(__dirname, 'client')))
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'index.html'))
})
var PORT = process.env.PORT || 5000;
app.listen( process.env.PORT || 3000, process.env.HOST || '::',err=>{
    if(err){console.log(err);}
    console.log(`Server Started On Port : ${process.env.PORT}`);
})