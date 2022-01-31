import { Card, CardContent, Typography } from '@mui/material';
import { RouteComponentProps } from 'react-router-dom';
import './orders-order-detail.module.scss';

type TParams = {
  id: string;
};

export type OrdersOrderDetailProps = RouteComponentProps<TParams>;

export function OrdersOrderDetail(props: OrdersOrderDetailProps) {
  return (
    <div className="conainer">
      <Card>
        <CardContent>
          <Typography>{props.match.params.id}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default OrdersOrderDetail;
