import { SortOrder } from "../../util/SortOrder";

export type DailySummaryOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  totalBills?: SortOrder;
  totalPayments?: SortOrder;
  updatedAt?: SortOrder;
};
