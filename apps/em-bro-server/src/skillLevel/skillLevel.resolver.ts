import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SkillLevelResolverBase } from "./base/skillLevel.resolver.base";
import { SkillLevel } from "./base/SkillLevel";
import { SkillLevelService } from "./skillLevel.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SkillLevel)
export class SkillLevelResolver extends SkillLevelResolverBase {
  constructor(
    protected readonly service: SkillLevelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
