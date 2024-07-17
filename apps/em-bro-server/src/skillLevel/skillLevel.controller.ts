import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SkillLevelService } from "./skillLevel.service";
import { SkillLevelControllerBase } from "./base/skillLevel.controller.base";

@swagger.ApiTags("skillLevels")
@common.Controller("skillLevels")
export class SkillLevelController extends SkillLevelControllerBase {
  constructor(
    protected readonly service: SkillLevelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
