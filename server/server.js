const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/users';
var http = new XMLHttpRequest();

//establish mongodb connection using mongoose
mongoose.connect(url,function(err,db) {
  assert.equal(null,err);
  console.log("Connected MongoDB to server.")
})

//connection details
var sessionStore = new MongoStore({
  host: '127.0.0.1',
  port: '27017',
  db: 'session',
  url: 'mongodb://localhost:27017/users'
});

//open http request, to get the login details from the system
http.open("GET", url, true);
//send request
http.send();
//acquire user schema
const User = require('./model/user');

//process the request on ready state change = 4
http.onreadystatechange = processRequest;
http.addEventListener("onreadystatechange", processthis, false);

//process this req function, returning an error message
function processthis(err) {
  //if request done and status is ok
  if(http.readyState == 4 & http.status == 200) {
  //success!
  console.log("Process complete and status 200 :)")
  //send a response
  var resp = JSON.parse(http.responseText);
  alert(response.User);
  }

}

//Express middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))
app.use(express.static('public'));

//post data to this opening
app.post('/assets/user/login', (req, res) => {
  //connect to mongodb using the const url, returning req and res
  mongoose.connect(url,
  //using mongoclient to connect
  { useMongoClient: true },

  function(err){
    //create custom error
    if(err) throw err;

    //find the data within the schema
    User.find({
      //request username and password
      username : req.User.username, password : req.User.password
      //define error function
    },

      function(err, user){
        if(err) throw err;
        //if username is true
        if(user.length === 1){
        //return the success status as a json parser
          return res.status(200).json({
          //Success!
          status: 'Success!',
          //data for the user schema
          data: User
          })
        }
   
        else {
          //else username is incorrect
          return res.status(200).json({
          //login error msg
          status: 'Failure!',
          message: 'Login failed'
          })
        } 
    })
	
  });

})

//create new user
app.post('/assets/user/create', (req) => {
  //connect to the mongo url
  mongoose.connect(url,
  //error function
  function(err){
    //if error occurs, run error process
    if(err) throw err;
    //new user, store in specified schema
    const user = new User({
      username: req.User.username,
      password: req.User.password
    })

    //save users, returning response and error
    user.save((err, res) => {
      //if error occurs, throw custom error process
      if(err) throw err;
      //return the success status as a json parser
      return res.status(200).json({
        //success!
        status: 'Success!',
        data: User
      })
    })
  });
})

//testing server
app.listen(3000, () => console.log('Test server running on port 3000...'))