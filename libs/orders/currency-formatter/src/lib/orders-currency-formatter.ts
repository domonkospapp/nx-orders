export function ordersCurrencyFormatter(
  amount: number,
  currency: string
): string {
  const rounded = Math.round(amount * 100) / 10;
  switch (currency) {
    case 'USD':
      return `$${rounded}`;
    case 'EUR':
      return `€${rounded}`;
    default:
      return `${rounded} ${currency}`;
  }
}
