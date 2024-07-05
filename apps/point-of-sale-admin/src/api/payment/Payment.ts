import { Vendor } from "../vendor/Vendor";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  updatedAt: Date;
  vendor?: Vendor | null;
};
