const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public')); // http://localhost:3000/ironyardlogo.png
// app.use('/static', express.static('public')); // http://localhost:3000/static/ironyardlogo.png
// app.use('/files', express.static(path.join(__dirname, 'public'))); //http://localhost:3000/files/video.mp4

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Successfully started express application!')
});
