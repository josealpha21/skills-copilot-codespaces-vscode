// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname, 'comments.json');

// Load comments from json file
var comments = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Set up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up server
app.listen(3000, function() {
  console.log('Server listening on port 3000');
});

// Set up get request
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Set up post request
app.post('/comments', function(req, res) {
  // Get new comment from request
  var newComment = req.body;

  // Add new comment to comments array
  comments.push(newComment);

  // Write new comments array to json file
  fs.writeFile(filePath, JSON.stringify(comments, null, 2), function(err) {
    if (err) {
      console.log('Error writing to comments.json');
    } else {
      console.log('New comment added');
    }
  });

  // Send status code 200
  res.sendStatus(200);
});