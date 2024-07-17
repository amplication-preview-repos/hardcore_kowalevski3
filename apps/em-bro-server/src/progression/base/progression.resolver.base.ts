/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Progression } from "./Progression";
import { ProgressionCountArgs } from "./ProgressionCountArgs";
import { ProgressionFindManyArgs } from "./ProgressionFindManyArgs";
import { ProgressionFindUniqueArgs } from "./ProgressionFindUniqueArgs";
import { DeleteProgressionArgs } from "./DeleteProgressionArgs";
import { ProgressionService } from "../progression.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Progression)
export class ProgressionResolverBase {
  constructor(
    protected readonly service: ProgressionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Progression",
    action: "read",
    possession: "any",
  })
  async _progressionsMeta(
    @graphql.Args() args: ProgressionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Progression])
  @nestAccessControl.UseRoles({
    resource: "Progression",
    action: "read",
    possession: "any",
  })
  async progressions(
    @graphql.Args() args: ProgressionFindManyArgs
  ): Promise<Progression[]> {
    return this.service.progressions(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Progression, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Progression",
    action: "read",
    possession: "own",
  })
  async progression(
    @graphql.Args() args: ProgressionFindUniqueArgs
  ): Promise<Progression | null> {
    const result = await this.service.progression(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Progression)
  @nestAccessControl.UseRoles({
    resource: "Progression",
    action: "delete",
    possession: "any",
  })
  async deleteProgression(
    @graphql.Args() args: DeleteProgressionArgs
  ): Promise<Progression | null> {
    try {
      return await this.service.deleteProgression(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}