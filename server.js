var express = require('express');

//Create our app
var app = express();
//Access port environment variables using Node.js object process.env  OR if their is no environemnet use local port 3000
const port = process.env.PORT || 3000;

//Ensure address is using HTTP and not HTTPS (App will not work with HTTPS)
app.use(function (req, response, next) {
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    response.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(port, function() {
    console.log('Express server is up and running on port ' + port);
});
