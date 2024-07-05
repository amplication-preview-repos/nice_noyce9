import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DailySummaryResolverBase } from "./base/dailySummary.resolver.base";
import { DailySummary } from "./base/DailySummary";
import { DailySummaryService } from "./dailySummary.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DailySummary)
export class DailySummaryResolver extends DailySummaryResolverBase {
  constructor(
    protected readonly service: DailySummaryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
