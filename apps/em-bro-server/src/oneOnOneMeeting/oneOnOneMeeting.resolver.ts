import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OneOnOneMeetingResolverBase } from "./base/oneOnOneMeeting.resolver.base";
import { OneOnOneMeeting } from "./base/OneOnOneMeeting";
import { OneOnOneMeetingService } from "./oneOnOneMeeting.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OneOnOneMeeting)
export class OneOnOneMeetingResolver extends OneOnOneMeetingResolverBase {
  constructor(
    protected readonly service: OneOnOneMeetingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
