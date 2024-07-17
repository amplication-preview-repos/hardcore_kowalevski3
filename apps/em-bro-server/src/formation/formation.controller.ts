import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FormationService } from "./formation.service";
import { FormationControllerBase } from "./base/formation.controller.base";

@swagger.ApiTags("formations")
@common.Controller("formations")
export class FormationController extends FormationControllerBase {
  constructor(
    protected readonly service: FormationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
