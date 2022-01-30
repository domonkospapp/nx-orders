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

export function App() {
  return (
    <>
      <Header />
      <Grid container spacing={2}>
        {getAllOrders().map((o) => (
          <Grid item xs={8} margin={2}>
            <Card key={o.id} className="orderCard">
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
                <Button size="small">Open Details</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default App;
