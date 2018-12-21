const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

goose.connect('mongodb://localhost/dbuser', { useNewUrlParser: true})
var db = goose.connection;

const rtsIndex = require('./routes/index.router');

//BP MIDDLEWARE
var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api', rtsIndex);
app.use(passport.initialize());
app.use(passport.session());



app.use(session({
secret: 'secret',
saveUninitialized: true,
resave: true

}));

app.use((err, req, res, next) => {

  i
})