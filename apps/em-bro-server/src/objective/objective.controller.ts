import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ObjectiveService } from "./objective.service";
import { ObjectiveControllerBase } from "./base/objective.controller.base";

@swagger.ApiTags("objectives")
@common.Controller("objectives")
export class ObjectiveController extends ObjectiveControllerBase {
  constructor(
    protected readonly service: ObjectiveService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
