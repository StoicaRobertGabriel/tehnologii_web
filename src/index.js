const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.send('hello world!');
});
app.listen(8080);
