import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DailySummaryService } from "./dailySummary.service";
import { DailySummaryControllerBase } from "./base/dailySummary.controller.base";

@swagger.ApiTags("dailySummaries")
@common.Controller("dailySummaries")
export class DailySummaryController extends DailySummaryControllerBase {
  constructor(
    protected readonly service: DailySummaryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
