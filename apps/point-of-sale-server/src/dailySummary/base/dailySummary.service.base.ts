/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, DailySummary as PrismaDailySummary } from "@prisma/client";

export class DailySummaryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DailySummaryCountArgs, "select">
  ): Promise<number> {
    return this.prisma.dailySummary.count(args);
  }

  async dailySummaries(
    args: Prisma.DailySummaryFindManyArgs
  ): Promise<PrismaDailySummary[]> {
    return this.prisma.dailySummary.findMany(args);
  }
  async dailySummary(
    args: Prisma.DailySummaryFindUniqueArgs
  ): Promise<PrismaDailySummary | null> {
    return this.prisma.dailySummary.findUnique(args);
  }
  async createDailySummary(
    args: Prisma.DailySummaryCreateArgs
  ): Promise<PrismaDailySummary> {
    return this.prisma.dailySummary.create(args);
  }
  async updateDailySummary(
    args: Prisma.DailySummaryUpdateArgs
  ): Promise<PrismaDailySummary> {
    return this.prisma.dailySummary.update(args);
  }
  async deleteDailySummary(
    args: Prisma.DailySummaryDeleteArgs
  ): Promise<PrismaDailySummary> {
    return this.prisma.dailySummary.delete(args);
  }
}