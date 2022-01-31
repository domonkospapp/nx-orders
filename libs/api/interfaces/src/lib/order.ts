export interface Order {
  id: number;
  ticker: string;
  amount: number;
  price: number;
  fee: number;
  currency: string;
  marketPlace: string;
  date: string;
  created: string;
}
