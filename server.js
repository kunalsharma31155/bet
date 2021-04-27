const express = require('express');
const app = express();
const path = require('path');
require('./config/config');
require('./startup/prod') (app);
require('./models/db');

require('./startup/routes') (app);
let port = process.env.PORT || 5000;
app.listen( port,err=>{
    if(err){console.log(err);}
    console.log(`Server Started On Port : ${process.env.PORT}`);
})