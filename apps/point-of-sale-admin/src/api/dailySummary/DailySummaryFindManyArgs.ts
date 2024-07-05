import { DailySummaryWhereInput } from "./DailySummaryWhereInput";
import { DailySummaryOrderByInput } from "./DailySummaryOrderByInput";

export type DailySummaryFindManyArgs = {
  where?: DailySummaryWhereInput;
  orderBy?: Array<DailySummaryOrderByInput>;
  skip?: number;
  take?: number;
};
