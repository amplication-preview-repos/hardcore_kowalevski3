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
import { Collaborator } from "./Collaborator";
import { CollaboratorCountArgs } from "./CollaboratorCountArgs";
import { CollaboratorFindManyArgs } from "./CollaboratorFindManyArgs";
import { CollaboratorFindUniqueArgs } from "./CollaboratorFindUniqueArgs";
import { CreateCollaboratorArgs } from "./CreateCollaboratorArgs";
import { UpdateCollaboratorArgs } from "./UpdateCollaboratorArgs";
import { DeleteCollaboratorArgs } from "./DeleteCollaboratorArgs";
import { SkillLevelFindManyArgs } from "../../skillLevel/base/SkillLevelFindManyArgs";
import { SkillLevel } from "../../skillLevel/base/SkillLevel";
import { VisualizationFindManyArgs } from "../../visualization/base/VisualizationFindManyArgs";
import { Visualization } from "../../visualization/base/Visualization";
import { CollaboratorService } from "../collaborator.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Collaborator)
export class CollaboratorResolverBase {
  constructor(
    protected readonly service: CollaboratorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Collaborator",
    action: "read",
    possession: "any",
  })
  async _collaboratorsMeta(
    @graphql.Args() args: CollaboratorCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Collaborator])
  @nestAccessControl.UseRoles({
    resource: "Collaborator",
    action: "read",
    possession: "any",
  })
  async collaborators(
    @graphql.Args() args: CollaboratorFindManyArgs
  ): Promise<Collaborator[]> {
    return this.service.collaborators(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Collaborator, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Collaborator",
    action: "read",
    possession: "own",
  })
  async collaborator(
    @graphql.Args() args: CollaboratorFindUniqueArgs
  ): Promise<Collaborator | null> {
    const result = await this.service.collaborator(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Collaborator)
  @nestAccessControl.UseRoles({
    resource: "Collaborator",
    action: "create",
    possession: "any",
  })
  async createCollaborator(
    @graphql.Args() args: CreateCollaboratorArgs
  ): Promise<Collaborator> {
    return await this.service.createCollaborator({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Collaborator)
  @nestAccessControl.UseRoles({
    resource: "Collaborator",
    action: "update",
    possession: "any",
  })
  async updateCollaborator(
    @graphql.Args() args: UpdateCollaboratorArgs
  ): Promise<Collaborator | null> {
    try {
      return await this.service.updateCollaborator({
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

  @graphql.Mutation(() => Collaborator)
  @nestAccessControl.UseRoles({
    resource: "Collaborator",
    action: "delete",
    possession: "any",
  })
  async deleteCollaborator(
    @graphql.Args() args: DeleteCollaboratorArgs
  ): Promise<Collaborator | null> {
    try {
      return await this.service.deleteCollaborator(args);
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
    @graphql.Parent() parent: Collaborator,
    @graphql.Args() args: SkillLevelFindManyArgs
  ): Promise<SkillLevel[]> {
    const results = await this.service.findSkillLevels(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Visualization], { name: "visualizations" })
  @nestAccessControl.UseRoles({
    resource: "Visualization",
    action: "read",
    possession: "any",
  })
  async findVisualizations(
    @graphql.Parent() parent: Collaborator,
    @graphql.Args() args: VisualizationFindManyArgs
  ): Promise<Visualization[]> {
    const results = await this.service.findVisualizations(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}