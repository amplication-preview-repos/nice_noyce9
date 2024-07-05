import { VendorWhereUniqueInput } from "../vendor/VendorWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  date?: Date | null;
  vendor?: VendorWhereUniqueInput | null;
};
