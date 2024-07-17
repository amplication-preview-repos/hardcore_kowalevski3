import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CollaboratorResolverBase } from "./base/collaborator.resolver.base";
import { Collaborator } from "./base/Collaborator";
import { CollaboratorService } from "./collaborator.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Collaborator)
export class CollaboratorResolver extends CollaboratorResolverBase {
  constructor(
    protected readonly service: CollaboratorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
