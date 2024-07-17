import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProgressionService } from "./progression.service";
import { ProgressionControllerBase } from "./base/progression.controller.base";

@swagger.ApiTags("progressions")
@common.Controller("progressions")
export class ProgressionController extends ProgressionControllerBase {
  constructor(
    protected readonly service: ProgressionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
