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
import { SkillLevelService } from "../skillLevel.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SkillLevelCreateInput } from "./SkillLevelCreateInput";
import { SkillLevel } from "./SkillLevel";
import { SkillLevelFindManyArgs } from "./SkillLevelFindManyArgs";
import { SkillLevelWhereUniqueInput } from "./SkillLevelWhereUniqueInput";
import { SkillLevelUpdateInput } from "./SkillLevelUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SkillLevelControllerBase {
  constructor(
    protected readonly service: SkillLevelService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SkillLevel })
  @nestAccessControl.UseRoles({
    resource: "SkillLevel",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: SkillLevelCreateInput,
  })
  async createSkillLevel(
    @common.Body() data: SkillLevelCreateInput
  ): Promise<SkillLevel> {
    return await this.service.createSkillLevel({
      data: {
        ...data,

        collaborator: data.collaborator
          ? {
              connect: data.collaborator,
            }
          : undefined,

        skill: data.skill
          ? {
              connect: data.skill,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [SkillLevel] })
  @ApiNestedQuery(SkillLevelFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SkillLevel",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async skillLevels(@common.Req() request: Request): Promise<SkillLevel[]> {
    const args = plainToClass(SkillLevelFindManyArgs, request.query);
    return this.service.skillLevels({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SkillLevel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SkillLevel",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async skillLevel(
    @common.Param() params: SkillLevelWhereUniqueInput
  ): Promise<SkillLevel | null> {
    const result = await this.service.skillLevel({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SkillLevel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SkillLevel",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: SkillLevelUpdateInput,
  })
  async updateSkillLevel(
    @common.Param() params: SkillLevelWhereUniqueInput,
    @common.Body() data: SkillLevelUpdateInput
  ): Promise<SkillLevel | null> {
    try {
      return await this.service.updateSkillLevel({
        where: params,
        data: {
          ...data,

          collaborator: data.collaborator
            ? {
                connect: data.collaborator,
              }
            : undefined,

          skill: data.skill
            ? {
                connect: data.skill,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: SkillLevel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SkillLevel",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSkillLevel(
    @common.Param() params: SkillLevelWhereUniqueInput
  ): Promise<SkillLevel | null> {
    try {
      return await this.service.deleteSkillLevel({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}