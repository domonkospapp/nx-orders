/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { getAllOrders, getOrder } from './app/order.repository';

const app = express();

app.get('/api/orders', (req, res) => {
  res.send(getAllOrders());
});

app.get('/api/orders/:id', (req, res) => {
  res.send(getOrder(parseInt(req.params.id)));
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
