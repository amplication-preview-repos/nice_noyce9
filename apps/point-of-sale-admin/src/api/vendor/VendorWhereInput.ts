import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BillListRelationFilter } from "../bill/BillListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type VendorWhereInput = {
  address?: StringNullableFilter;
  bills?: BillListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  payments?: PaymentListRelationFilter;
  phoneNumber?: StringNullableFilter;
};
