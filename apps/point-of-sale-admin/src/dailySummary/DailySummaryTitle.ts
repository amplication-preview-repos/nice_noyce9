import { DailySummary as TDailySummary } from "../api/dailySummary/DailySummary";

export const DAILYSUMMARY_TITLE_FIELD = "id";

export const DailySummaryTitle = (record: TDailySummary): string => {
  return record.id?.toString() || String(record.id);
};
