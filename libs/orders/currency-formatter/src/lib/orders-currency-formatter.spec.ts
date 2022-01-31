import { ordersCurrencyFormatter } from './orders-currency-formatter';

describe('ordersCurrencyFormatter', () => {
  it('round correctly', () => {
    expect(ordersCurrencyFormatter(5.125, 'USD')).toEqual('$5.13');
  });
});
