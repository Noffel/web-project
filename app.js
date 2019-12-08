require ('./config/config.js');
require ('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const rtsIndex = require('./routes/index.router');  //     can use this constant to configure middleware  


var app = express();

//  middleware 
app.use(bodyParser.json());
app.use(cors());    //  to communicate b/w server(node js) and client (angular7) on different port numbers
app.use('/api', rtsIndex);


// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    
});


//  initiating server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));    /// port = 3000 for dev and 80 for prod.
