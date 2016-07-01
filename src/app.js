'use strict';

var express = require('express'),
posts = require('./mock/posts.json');

var app = express();

app.use(express.static(__dirname + '/public')) // middleware

app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');

app.get('/', function(req, res){
	res.render('index');
});

app.get('/blog/:title?', function(req,res){
	var title = req.params.title;
	if (title === undefined){
		res.status(503);
		res.send("Page Under Construction.");
	} else {
		var post = posts[title] || {};
		//res.send(post);
		res.render('post', {post: post});
	}
	
})


app.listen(3000, function(){
	console.log("The frontend server is running on port 3000")
});

