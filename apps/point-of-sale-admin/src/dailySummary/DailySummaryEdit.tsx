import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const DailySummaryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <NumberInput label="totalBills" source="totalBills" />
        <NumberInput label="totalPayments" source="totalPayments" />
      </SimpleForm>
    </Edit>
  );
};
