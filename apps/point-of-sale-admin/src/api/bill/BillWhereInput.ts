import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { VendorWhereUniqueInput } from "../vendor/VendorWhereUniqueInput";

export type BillWhereInput = {
  amount?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  vendor?: VendorWhereUniqueInput;
};
