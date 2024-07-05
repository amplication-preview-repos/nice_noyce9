import { VendorWhereUniqueInput } from "../vendor/VendorWhereUniqueInput";

export type BillCreateInput = {
  amount?: number | null;
  date?: Date | null;
  vendor?: VendorWhereUniqueInput | null;
};
