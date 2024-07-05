import { SortOrder } from "../../util/SortOrder";

export type BillOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  vendorId?: SortOrder;
};
