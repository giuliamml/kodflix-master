const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3002;
const getShows = require('./shows');

app.get('/rest/shows', (req, res) => res.send(getShows()));

app.listen(port, () => {
console.log(`App listening on port ${port}!`);
});

app.use(express.static(path.join(__dirname, '../../build')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});