import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  age?: SortOrder;
  createdAt?: SortOrder;
  gender?: SortOrder;
  id?: SortOrder;
  interests?: SortOrder;
  location?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
