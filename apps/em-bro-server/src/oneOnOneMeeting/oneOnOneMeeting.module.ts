import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OneOnOneMeetingModuleBase } from "./base/oneOnOneMeeting.module.base";
import { OneOnOneMeetingService } from "./oneOnOneMeeting.service";
import { OneOnOneMeetingController } from "./oneOnOneMeeting.controller";
import { OneOnOneMeetingResolver } from "./oneOnOneMeeting.resolver";

@Module({
  imports: [OneOnOneMeetingModuleBase, forwardRef(() => AuthModule)],
  controllers: [OneOnOneMeetingController],
  providers: [OneOnOneMeetingService, OneOnOneMeetingResolver],
  exports: [OneOnOneMeetingService],
})
export class OneOnOneMeetingModule {}
