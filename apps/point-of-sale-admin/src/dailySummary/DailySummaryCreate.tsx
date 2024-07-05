import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const DailySummaryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <NumberInput label="totalBills" source="totalBills" />
        <NumberInput label="totalPayments" source="totalPayments" />
      </SimpleForm>
    </Create>
  );
};
