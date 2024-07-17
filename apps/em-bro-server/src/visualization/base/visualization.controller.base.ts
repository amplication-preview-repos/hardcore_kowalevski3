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
import { VisualizationService } from "../visualization.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { VisualizationCreateInput } from "./VisualizationCreateInput";
import { Visualization } from "./Visualization";
import { VisualizationFindManyArgs } from "./VisualizationFindManyArgs";
import { VisualizationWhereUniqueInput } from "./VisualizationWhereUniqueInput";
import { VisualizationUpdateInput } from "./VisualizationUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class VisualizationControllerBase {
  constructor(
    protected readonly service: VisualizationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Visualization })
  @nestAccessControl.UseRoles({
    resource: "Visualization",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: VisualizationCreateInput,
  })
  async createVisualization(
    @common.Body() data: VisualizationCreateInput
  ): Promise<Visualization> {
    return await this.service.createVisualization({
      data: {
        ...data,

        collaborator: data.collaborator
          ? {
              connect: data.collaborator,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Visualization] })
  @ApiNestedQuery(VisualizationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Visualization",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async visualizations(
    @common.Req() request: Request
  ): Promise<Visualization[]> {
    const args = plainToClass(VisualizationFindManyArgs, request.query);
    return this.service.visualizations({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Visualization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Visualization",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async visualization(
    @common.Param() params: VisualizationWhereUniqueInput
  ): Promise<Visualization | null> {
    const result = await this.service.visualization({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Visualization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Visualization",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: VisualizationUpdateInput,
  })
  async updateVisualization(
    @common.Param() params: VisualizationWhereUniqueInput,
    @common.Body() data: VisualizationUpdateInput
  ): Promise<Visualization | null> {
    try {
      return await this.service.updateVisualization({
        where: params,
        data: {
          ...data,

          collaborator: data.collaborator
            ? {
                connect: data.collaborator,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Visualization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Visualization",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteVisualization(
    @common.Param() params: VisualizationWhereUniqueInput
  ): Promise<Visualization | null> {
    try {
      return await this.service.deleteVisualization({
        where: params,
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