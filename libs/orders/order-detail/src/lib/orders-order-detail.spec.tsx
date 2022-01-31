import { render } from '@testing-library/react';

import OrdersOrderDetail from './orders-order-detail';

describe('OrdersOrderDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrdersOrderDetail />);
    expect(baseElement).toBeTruthy();
  });
});
