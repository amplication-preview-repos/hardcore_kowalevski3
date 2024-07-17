import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ManagerService } from "./manager.service";
import { ManagerControllerBase } from "./base/manager.controller.base";

@swagger.ApiTags("managers")
@common.Controller("managers")
export class ManagerController extends ManagerControllerBase {
  constructor(
    protected readonly service: ManagerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
