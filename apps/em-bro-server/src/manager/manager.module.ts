import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ManagerModuleBase } from "./base/manager.module.base";
import { ManagerService } from "./manager.service";
import { ManagerController } from "./manager.controller";
import { ManagerResolver } from "./manager.resolver";

@Module({
  imports: [ManagerModuleBase, forwardRef(() => AuthModule)],
  controllers: [ManagerController],
  providers: [ManagerService, ManagerResolver],
  exports: [ManagerService],
})
export class ManagerModule {}
