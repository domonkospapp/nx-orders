import { Order } from '@nx-orders/api/interfaces';

const orders: Order[] = [
  {
    id: 1,
    ticker: 'TSLA',
    amount: 5,
    price: 835.2,
    fee: 13,
    currency: 'USD',
    marketPlace: 'Frankfurt',
    date: '2022.01.29',
    created: '2022.01.29',
  },
  {
    id: 2,
    ticker: 'PLTR',
    amount: 85,
    price: 11.25,
    fee: 13,
    currency: 'USD',
    marketPlace: 'Frankfurt',
    date: '2022.01.25',
    created: '2022.01.25',
  },
  {
    id: 3,
    ticker: 'DBX',
    amount: 30,
    price: 22.0,
    fee: 13,
    currency: 'USD',
    marketPlace: 'NASDAQ',
    date: '2022.01.22',
    created: '2022.01.22',
  },
];
export const getAllOrders = () => orders;
export const getOrder = (id: number) => orders.find((order) => order.id === id);
