import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VisualizationService } from "./visualization.service";
import { VisualizationControllerBase } from "./base/visualization.controller.base";

@swagger.ApiTags("visualizations")
@common.Controller("visualizations")
export class VisualizationController extends VisualizationControllerBase {
  constructor(
    protected readonly service: VisualizationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
