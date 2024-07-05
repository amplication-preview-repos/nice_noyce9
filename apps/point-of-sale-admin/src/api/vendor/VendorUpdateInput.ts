import { BillUpdateManyWithoutVendorsInput } from "./BillUpdateManyWithoutVendorsInput";
import { PaymentUpdateManyWithoutVendorsInput } from "./PaymentUpdateManyWithoutVendorsInput";

export type VendorUpdateInput = {
  address?: string | null;
  bills?: BillUpdateManyWithoutVendorsInput;
  email?: string | null;
  name?: string | null;
  payments?: PaymentUpdateManyWithoutVendorsInput;
  phoneNumber?: string | null;
};
