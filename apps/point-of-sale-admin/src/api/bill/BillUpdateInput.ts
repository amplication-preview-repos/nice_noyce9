import { VendorWhereUniqueInput } from "../vendor/VendorWhereUniqueInput";

export type BillUpdateInput = {
  amount?: number | null;
  date?: Date | null;
  vendor?: VendorWhereUniqueInput | null;
};
