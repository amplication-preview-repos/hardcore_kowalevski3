/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CollaboratorService } from "../collaborator.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CollaboratorCreateInput } from "./CollaboratorCreateInput";
import { Collaborator } from "./Collaborator";
import { CollaboratorFindManyArgs } from "./CollaboratorFindManyArgs";
import { CollaboratorWhereUniqueInput } from "./CollaboratorWhereUniqueInput";
import { CollaboratorUpdateInput } from "./CollaboratorUpdateInput";
import { SkillLevelFindManyArgs } from "../../skillLevel/base/SkillLevelFindManyArgs";
import { SkillLevel } from "../../skillLevel/base/SkillLevel";
import { SkillLevelWhereUniqueInput } from "../../skillLevel/base/SkillLevelWhereUniqueInput";
import { VisualizationFindManyArgs } from "../../visualization/base/VisualizationFindManyArgs";
import { Visualization } from "../../visualization/base/Visualization";
import { VisualizationWhereUniqueInput } from "../../visualization/base/VisualizationWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CollaboratorControllerBase {
  constructor(
    protected readonly service: CollaboratorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Collaborator })
  @nestAccessControl.UseRoles({
    resource: "Collaborator",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: CollaboratorCreateInput,
  })
  async createCollaborator(
    @common.Body() data: CollaboratorCreateInput
  ): Promise<Collaborator> {
    return await this.service.createCollaborator({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        seniority: true,
        lastname: true,
        firstname: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Collaborator] })
  @ApiNestedQuery(CollaboratorFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Collaborator",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async collaborators(@common.Req() request: Request): Promise<Collaborator[]> {
    const args = plainToClass(CollaboratorFindManyArgs, request.query);
    return this.service.collaborators({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        seniority: true,
        lastname: true,
        firstname: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Collaborator })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Collaborator",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async collaborator(
    @common.Param() params: CollaboratorWhereUniqueInput
  ): Promise<Collaborator | null> {
    const result = await this.service.collaborator({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        seniority: true,
        lastname: true,
        firstname: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Collaborator })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Collaborator",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: CollaboratorUpdateInput,
  })
  async updateCollaborator(
    @common.Param() params: CollaboratorWhereUniqueInput,
    @common.Body() data: CollaboratorUpdateInput
  ): Promise<Collaborator | null> {
    try {
      return await this.service.updateCollaborator({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          seniority: true,
          lastname: true,
          firstname: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Collaborator })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Collaborator",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCollaborator(
    @common.Param() params: CollaboratorWhereUniqueInput
  ): Promise<Collaborator | null> {
    try {
      return await this.service.deleteCollaborator({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          seniority: true,
          lastname: true,
          firstname: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/skillLevels")
  @ApiNestedQuery(SkillLevelFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SkillLevel",
    action: "read",
    possession: "any",
  })
  async findSkillLevels(
    @common.Req() request: Request,
    @common.Param() params: CollaboratorWhereUniqueInput
  ): Promise<SkillLevel[]> {
    const query = plainToClass(SkillLevelFindManyArgs, request.query);
    const results = await this.service.findSkillLevels(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        level: true,

        collaborator: {
          select: {
            id: true,
          },
        },

        skill: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/skillLevels")
  @nestAccessControl.UseRoles({
    resource: "Collaborator",
    action: "update",
    possession: "any",
  })
  async connectSkillLevels(
    @common.Param() params: CollaboratorWhereUniqueInput,
    @common.Body() body: SkillLevelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      skillLevels: {
        connect: body,
      },
    };
    await this.service.updateCollaborator({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/skillLevels")
  @nestAccessControl.UseRoles({
    resource: "Collaborator",
    action: "update",
    possession: "any",
  })
  async updateSkillLevels(
    @common.Param() params: CollaboratorWhereUniqueInput,
    @common.Body() body: SkillLevelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      skillLevels: {
        set: body,
      },
    };
    await this.service.updateCollaborator({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/skillLevels")
  @nestAccessControl.UseRoles({
    resource: "Collaborator",
    action: "update",
    possession: "any",
  })
  async disconnectSkillLevels(
    @common.Param() params: CollaboratorWhereUniqueInput,
    @common.Body() body: SkillLevelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      skillLevels: {
        disconnect: body,
      },
    };
    await this.service.updateCollaborator({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/visualizations")
  @ApiNestedQuery(VisualizationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Visualization",
    action: "read",
    possession: "any",
  })
  async findVisualizations(
    @common.Req() request: Request,
    @common.Param() params: CollaboratorWhereUniqueInput
  ): Promise<Visualization[]> {
    const query = plainToClass(VisualizationFindManyArgs, request.query);
    const results = await this.service.findVisualizations(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        data: true,
        typeField: true,

        collaborator: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/visualizations")
  @nestAccessControl.UseRoles({
    resource: "Collaborator",
    action: "update",
    possession: "any",
  })
  async connectVisualizations(
    @common.Param() params: CollaboratorWhereUniqueInput,
    @common.Body() body: VisualizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      visualizations: {
        connect: body,
      },
    };
    await this.service.updateCollaborator({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/visualizations")
  @nestAccessControl.UseRoles({
    resource: "Collaborator",
    action: "update",
    possession: "any",
  })
  async updateVisualizations(
    @common.Param() params: CollaboratorWhereUniqueInput,
    @common.Body() body: VisualizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      visualizations: {
        set: body,
      },
    };
    await this.service.updateCollaborator({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/visualizations")
  @nestAccessControl.UseRoles({
    resource: "Collaborator",
    action: "update",
    possession: "any",
  })
  async disconnectVisualizations(
    @common.Param() params: CollaboratorWhereUniqueInput,
    @common.Body() body: VisualizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      visualizations: {
        disconnect: body,
      },
    };
    await this.service.updateCollaborator({
      where: params,
      data,
      select: { id: true },
    });
  }
}