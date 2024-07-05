export type DailySummary = {
  createdAt: Date;
  date: Date | null;
  id: string;
  totalBills: number | null;
  totalPayments: number | null;
  updatedAt: Date;
};
