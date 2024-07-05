import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DailySummaryModuleBase } from "./base/dailySummary.module.base";
import { DailySummaryService } from "./dailySummary.service";
import { DailySummaryController } from "./dailySummary.controller";
import { DailySummaryResolver } from "./dailySummary.resolver";

@Module({
  imports: [DailySummaryModuleBase, forwardRef(() => AuthModule)],
  controllers: [DailySummaryController],
  providers: [DailySummaryService, DailySummaryResolver],
  exports: [DailySummaryService],
})
export class DailySummaryModule {}
