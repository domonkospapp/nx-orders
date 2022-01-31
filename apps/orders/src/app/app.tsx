import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from '@mui/material';
import { ordersCurrencyFormatter } from '@nx-orders/orders/currency-formatter';
import { Header } from '@nx-orders/orders/ui';
import { getAllOrders } from '../fake-api';
import './app.module.scss';

import { Route, useHistory } from 'react-router-dom';

import { OrdersOrderDetail } from '@nx-orders/orders/order-detail';

export function App() {
  const history = useHistory();
  return (
    <>
      <Header />
      <Grid container spacing={2}>
        {getAllOrders().map((o) => (
          <Grid key={o.id} item xs={8} margin={2}>
            <Card className="orderCard">
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {o.ticker}
                </Typography>
                <Typography variant="h5" component="div">
                  {o.amount} p
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {o.date}
                </Typography>
                <Typography variant="body2">
                  {ordersCurrencyFormatter(o.price, o.currency)}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => history.push(`/orders/${o.id}`)}
                >
                  Open Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Route path="/orders/:id" component={OrdersOrderDetail} />
    </>
  );
}

export default App;
