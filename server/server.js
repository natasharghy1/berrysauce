const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose');
const url='https://jsonplaceholder.typicode.com/posts';
//const url = 'mongodb://localhost:27017/users';
var http = new XMLHttpRequest();

mongoose.connect(url,function(err,db) {
	assert.equal(null,err);
	console.log("Connected MongoDB to server.")
})

  var sessionStore = new MongoStore({
        host: '127.0.0.1',
        port: '27017',
        db: 'session',
        url: 'mongodb://localhost:27017/users'
    });
//Open, specify request details
//We want to get the info from mongodb
http.open("GET", url, true);
http.send();
const User = require('./model/user');

http.onreadystatechange = processRequest;
http.addEventListener("onreadystatechange", processthis, false); 

function processthis(err) {
	if(http.readyState == 4 & http.status == 200) {
      console.log("Process complete and status 200 :)")
	  var resp = JSON.parse(http.responseText);
	  alert(response.User);
	}

}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))
app.use(express.static('public'));

app.post('/api/user/login', (req, res) => {
	mongoose.connect(url,{ useMongoClient: true }, function(err){
		if(err) throw err;
		User.find({
			username : req.body.username, password : req.body.password
		}, function(err, user){
			if(err) throw err;
			if(user.length === 1){	
				return res.status(200).json({
					status: 'success',
					data: user
				})
			} else {
				return res.status(200).json({
					status: 'fail',
					message: 'Login Failed'
				})
			}
			
		})
	});
})

app.post('/api/user/create', (req, res) => {
	mongoose.connect(url, function(err){
		if(err) throw err;
		const user = new User({
			username: req.body.username,
			password: req.body.password
		})
		user.save((err, res) => {
			if(err) throw err;
			return res.status(200).json({
				status: 'success',
				data: res
			})
		})
	});
})

app.listen(3000, () => console.log('Blog server running on port 3000!'))