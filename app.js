// app.js

const express = require('express');
const app = express();
const port = 4200;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
//Mongoose connection with mongodb
mongoose.Promise = require ('bluebird');
mongoose.connect('mongodb://admin:1234@ds141175.mlab.com:41175/forms')
    .then(() => { // if all is ok we will be here
    console.log('Start');
})
.catch(err => { // if error we will be here
    console.error('App starting error:', err.stack);
process.exit(1);
});

// Required application specific custom router module
const itemRouter = require('./src/routes/itemRoutes');

// Use middlewares to set view engine and post json data to the server
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/items', itemRouter);

// Start the server
app.listen(port, function(){
    console.log('Server is running on Port: ',port);
});
