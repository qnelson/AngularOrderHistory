var express = require('express');
var router = express.Router();
var pg = require('pg');

var connectionString = 'postgres://localhost:5432/mu';

router.get('/', function (req, res) {
  pg.connect(connectionString, function (err, client, done) {
    if (err) {
      res.sendStatus(500);
    }

    client.query('SELECT * FROM customers',
  function (err, result) {
      if (err) {
        console.log(err);
        }
      done();

      res.send(result.rows);
      console.log(result.rows);
    });
  });
});

module.exports = router;
