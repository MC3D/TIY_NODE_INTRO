const express = require('express');
const path = require('path');
const app = express();

app.use('/files', express.static('files'));

app.get('/', function (req, res) {
  //serve 'index.html'
  res.sendFile(path.join(__dirname + '/index.html'));
  //__dirname: resolves to  project folder.
});

app.listen(3000, function () {
  // console.log(path.join(__dirname + '/index.html'));
  console.log('Successfully started express application!');
});
