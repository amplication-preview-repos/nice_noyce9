import { BillCreateNestedManyWithoutVendorsInput } from "./BillCreateNestedManyWithoutVendorsInput";
import { PaymentCreateNestedManyWithoutVendorsInput } from "./PaymentCreateNestedManyWithoutVendorsInput";

export type VendorCreateInput = {
  address?: string | null;
  bills?: BillCreateNestedManyWithoutVendorsInput;
  email?: string | null;
  name?: string | null;
  payments?: PaymentCreateNestedManyWithoutVendorsInput;
  phoneNumber?: string | null;
};
