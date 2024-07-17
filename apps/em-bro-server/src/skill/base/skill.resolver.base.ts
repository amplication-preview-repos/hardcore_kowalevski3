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
import { Skill } from "./Skill";
import { SkillCountArgs } from "./SkillCountArgs";
import { SkillFindManyArgs } from "./SkillFindManyArgs";
import { SkillFindUniqueArgs } from "./SkillFindUniqueArgs";
import { CreateSkillArgs } from "./CreateSkillArgs";
import { UpdateSkillArgs } from "./UpdateSkillArgs";
import { DeleteSkillArgs } from "./DeleteSkillArgs";
import { SkillLevelFindManyArgs } from "../../skillLevel/base/SkillLevelFindManyArgs";
import { SkillLevel } from "../../skillLevel/base/SkillLevel";
import { ObjectiveFindManyArgs } from "../../objective/base/ObjectiveFindManyArgs";
import { Objective } from "../../objective/base/Objective";
import { FormationFindManyArgs } from "../../formation/base/FormationFindManyArgs";
import { Formation } from "../../formation/base/Formation";
import { SkillService } from "../skill.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Skill)
export class SkillResolverBase {
  constructor(
    protected readonly service: SkillService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Skill",
    action: "read",
    possession: "any",
  })
  async _skillsMeta(
    @graphql.Args() args: SkillCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Skill])
  @nestAccessControl.UseRoles({
    resource: "Skill",
    action: "read",
    possession: "any",
  })
  async skills(@graphql.Args() args: SkillFindManyArgs): Promise<Skill[]> {
    return this.service.skills(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Skill, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Skill",
    action: "read",
    possession: "own",
  })
  async skill(
    @graphql.Args() args: SkillFindUniqueArgs
  ): Promise<Skill | null> {
    const result = await this.service.skill(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Skill)
  @nestAccessControl.UseRoles({
    resource: "Skill",
    action: "create",
    possession: "any",
  })
  async createSkill(@graphql.Args() args: CreateSkillArgs): Promise<Skill> {
    return await this.service.createSkill({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Skill)
  @nestAccessControl.UseRoles({
    resource: "Skill",
    action: "update",
    possession: "any",
  })
  async updateSkill(
    @graphql.Args() args: UpdateSkillArgs
  ): Promise<Skill | null> {
    try {
      return await this.service.updateSkill({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Skill)
  @nestAccessControl.UseRoles({
    resource: "Skill",
    action: "delete",
    possession: "any",
  })
  async deleteSkill(
    @graphql.Args() args: DeleteSkillArgs
  ): Promise<Skill | null> {
    try {
      return await this.service.deleteSkill(args);
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
  @graphql.ResolveField(() => [SkillLevel], { name: "skillLevels" })
  @nestAccessControl.UseRoles({
    resource: "SkillLevel",
    action: "read",
    possession: "any",
  })
  async findSkillLevels(
    @graphql.Parent() parent: Skill,
    @graphql.Args() args: SkillLevelFindManyArgs
  ): Promise<SkillLevel[]> {
    const results = await this.service.findSkillLevels(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Objective], { name: "objectives" })
  @nestAccessControl.UseRoles({
    resource: "Objective",
    action: "read",
    possession: "any",
  })
  async findObjectives(
    @graphql.Parent() parent: Skill,
    @graphql.Args() args: ObjectiveFindManyArgs
  ): Promise<Objective[]> {
    const results = await this.service.findObjectives(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Formation], { name: "formations" })
  @nestAccessControl.UseRoles({
    resource: "Formation",
    action: "read",
    possession: "any",
  })
  async findFormations(
    @graphql.Parent() parent: Skill,
    @graphql.Args() args: FormationFindManyArgs
  ): Promise<Formation[]> {
    const results = await this.service.findFormations(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}