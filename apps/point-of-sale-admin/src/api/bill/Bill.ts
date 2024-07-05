import { Vendor } from "../vendor/Vendor";

export type Bill = {
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  updatedAt: Date;
  vendor?: Vendor | null;
};
