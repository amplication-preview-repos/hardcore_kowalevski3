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
import { Manager } from "./Manager";
import { ManagerCountArgs } from "./ManagerCountArgs";
import { ManagerFindManyArgs } from "./ManagerFindManyArgs";
import { ManagerFindUniqueArgs } from "./ManagerFindUniqueArgs";
import { DeleteManagerArgs } from "./DeleteManagerArgs";
import { ManagerService } from "../manager.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Manager)
export class ManagerResolverBase {
  constructor(
    protected readonly service: ManagerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Manager",
    action: "read",
    possession: "any",
  })
  async _managersMeta(
    @graphql.Args() args: ManagerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Manager])
  @nestAccessControl.UseRoles({
    resource: "Manager",
    action: "read",
    possession: "any",
  })
  async managers(
    @graphql.Args() args: ManagerFindManyArgs
  ): Promise<Manager[]> {
    return this.service.managers(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Manager, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Manager",
    action: "read",
    possession: "own",
  })
  async manager(
    @graphql.Args() args: ManagerFindUniqueArgs
  ): Promise<Manager | null> {
    const result = await this.service.manager(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Manager)
  @nestAccessControl.UseRoles({
    resource: "Manager",
    action: "delete",
    possession: "any",
  })
  async deleteManager(
    @graphql.Args() args: DeleteManagerArgs
  ): Promise<Manager | null> {
    try {
      return await this.service.deleteManager(args);
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
