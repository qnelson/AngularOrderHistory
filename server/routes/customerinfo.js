var express = require('express');
var router = express.Router();
var pg = require('pg');

var connectionString = 'postgres://localhost:5432/mu';

router.post('/', function (req, res) {
 pg.connect(connectionString, function (err, client, done) {
   if (err) {
     res.sendStatus(500);
   }
console.log('Currently testing', req.body);
   client.query('SELECT customers.first_name, customers.last_name, orders.id, addresses.street, addresses.city, addresses.state, addresses.zip, products.description, line_items.unit_price, line_items.quantity, orders.order_date ' + 'FROM customers ' +
   'JOIN addresses ON customers.id = addresses.customer_id ' +
   'JOIN orders ON orders.address_id = addresses.id ' +
   'JOIN line_items ON orders.id = line_items.order_id ' +
   'JOIN products ON line_items.product_id = products.id ' + 'ORDER BY orders.order_date ASC ', +
   'WHERE customers.id = ' + req.body.customerId, function (err, result) {
     done();

     res.send(result.rows);
   });
 });
});

module.exports=router;
