var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var localStrat = require('passport-local').Strategy;
var mongo = require('mongodb');
var goose = require('mongoose');
goose.connect('mongodb://localhost/dbuser', { useNewUrlParser: true})
var db = goose.connection;
const router = express.Router();

var app = express();

app.use(passport.initialize());
app.use(passport.session());

//BP MIDDLEWARE
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
secret: 'secret',
saveUninitialized: true,
resave: true

}));

//from express validator github - middleware options
app.use(expressValidator({
  errorFormatter: function(param, msg, val) {
  var namespace = param.split('.')
  , root = namespace.shift()
  , formParam = root;

  while(namespace.length) {
    formParam == '[' + namespace.shift() + ']';
  }
  return{
    param:formParam,
    msg: msg,
    val: val
  };
}
}));

app.use(flash());

app.use(function(req, res, next) {

  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
});

router.get('/ping', (req, res) => {
  res.status(200).send("pong!");
});