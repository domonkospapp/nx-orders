import { Card, CardContent, Typography } from '@mui/material';
import { Order } from '@nx-orders/api/interfaces';
import { ordersCurrencyFormatter } from '@nx-orders/orders/currency-formatter';
import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './orders-order-detail.module.scss';

type TParams = {
  id: string;
};

export type OrdersOrderDetailProps = RouteComponentProps<TParams>;

export function OrdersOrderDetail(props: OrdersOrderDetailProps) {
  const [state, setState] = useState<{
    data: Order | null;
    loadingState: 'success' | 'error' | 'loading';
  }>({
    data: null,
    loadingState: 'success',
  });

  useEffect(() => {
    setState({
      ...state,
      loadingState: 'loading',
    });
    const orderId = props.match.params.id;
    fetch(`api/orders/${orderId}`)
      .then((data) => data.json())
      .then((data) =>
        setState({
          ...state,
          data: data,
          loadingState: 'success',
        })
      )
      .catch((error) =>
        setState({
          ...state,
          loadingState: 'error',
        })
      );
  }, [props.match.params.id]);

  return (
    <div className="conainer">
      {state.loadingState === 'loading' ? (
        'loading...'
      ) : state.loadingState === 'error' ? (
        'Error!'
      ) : (
        <Card>
          <CardContent>
            <Typography>{`TICKER:${state.data?.ticker} PRICE:${
              state.data &&
              ordersCurrencyFormatter(state.data.price, state.data.currency)
            }`}</Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default OrdersOrderDetail;
