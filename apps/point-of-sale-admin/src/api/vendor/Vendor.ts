import { Bill } from "../bill/Bill";
import { Payment } from "../payment/Payment";

export type Vendor = {
  address: string | null;
  bills?: Array<Bill>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  payments?: Array<Payment>;
  phoneNumber: string | null;
  updatedAt: Date;
};
