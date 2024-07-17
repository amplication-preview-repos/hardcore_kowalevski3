import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OneOnOneMeetingService } from "./oneOnOneMeeting.service";
import { OneOnOneMeetingControllerBase } from "./base/oneOnOneMeeting.controller.base";

@swagger.ApiTags("oneOnOneMeetings")
@common.Controller("oneOnOneMeetings")
export class OneOnOneMeetingController extends OneOnOneMeetingControllerBase {
  constructor(
    protected readonly service: OneOnOneMeetingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
