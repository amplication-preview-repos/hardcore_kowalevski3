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
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Formation } from "./Formation";
import { FormationCountArgs } from "./FormationCountArgs";
import { FormationFindManyArgs } from "./FormationFindManyArgs";
import { FormationFindUniqueArgs } from "./FormationFindUniqueArgs";
import { CreateFormationArgs } from "./CreateFormationArgs";
import { UpdateFormationArgs } from "./UpdateFormationArgs";
import { DeleteFormationArgs } from "./DeleteFormationArgs";
import { Skill } from "../../skill/base/Skill";
import { FormationService } from "../formation.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Formation)
export class FormationResolverBase {
  constructor(
    protected readonly service: FormationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Formation",
    action: "read",
    possession: "any",
  })
  async _formationsMeta(
    @graphql.Args() args: FormationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Formation])
  @nestAccessControl.UseRoles({
    resource: "Formation",
    action: "read",
    possession: "any",
  })
  async formations(
    @graphql.Args() args: FormationFindManyArgs
  ): Promise<Formation[]> {
    return this.service.formations(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Formation, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Formation",
    action: "read",
    possession: "own",
  })
  async formation(
    @graphql.Args() args: FormationFindUniqueArgs
  ): Promise<Formation | null> {
    const result = await this.service.formation(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Formation)
  @nestAccessControl.UseRoles({
    resource: "Formation",
    action: "create",
    possession: "any",
  })
  async createFormation(
    @graphql.Args() args: CreateFormationArgs
  ): Promise<Formation> {
    return await this.service.createFormation({
      ...args,
      data: {
        ...args.data,

        skill: args.data.skill
          ? {
              connect: args.data.skill,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Formation)
  @nestAccessControl.UseRoles({
    resource: "Formation",
    action: "update",
    possession: "any",
  })
  async updateFormation(
    @graphql.Args() args: UpdateFormationArgs
  ): Promise<Formation | null> {
    try {
      return await this.service.updateFormation({
        ...args,
        data: {
          ...args.data,

          skill: args.data.skill
            ? {
                connect: args.data.skill,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Formation)
  @nestAccessControl.UseRoles({
    resource: "Formation",
    action: "delete",
    possession: "any",
  })
  async deleteFormation(
    @graphql.Args() args: DeleteFormationArgs
  ): Promise<Formation | null> {
    try {
      return await this.service.deleteFormation(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Skill, {
    nullable: true,
    name: "skill",
  })
  @nestAccessControl.UseRoles({
    resource: "Skill",
    action: "read",
    possession: "any",
  })
  async getSkill(@graphql.Parent() parent: Formation): Promise<Skill | null> {
    const result = await this.service.getSkill(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}