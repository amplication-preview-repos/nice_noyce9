import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DailySummaryServiceBase } from "./base/dailySummary.service.base";

@Injectable()
export class DailySummaryService extends DailySummaryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
