import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type DailySummaryWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  totalBills?: FloatNullableFilter;
  totalPayments?: FloatNullableFilter;
};
