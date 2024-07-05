import { CustomerUser as TCustomerUser } from "../api/customerUser/CustomerUser";

export const CUSTOMERUSER_TITLE_FIELD = "id";

export const CustomerUserTitle = (record: TCustomerUser): string => {
  return record.id?.toString() || String(record.id);
};
