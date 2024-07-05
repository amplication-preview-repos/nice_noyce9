import { VendorWhereUniqueInput } from "../vendor/VendorWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  date?: Date | null;
  vendor?: VendorWhereUniqueInput | null;
};
