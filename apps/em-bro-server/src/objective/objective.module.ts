import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ObjectiveModuleBase } from "./base/objective.module.base";
import { ObjectiveService } from "./objective.service";
import { ObjectiveController } from "./objective.controller";
import { ObjectiveResolver } from "./objective.resolver";

@Module({
  imports: [ObjectiveModuleBase, forwardRef(() => AuthModule)],
  controllers: [ObjectiveController],
  providers: [ObjectiveService, ObjectiveResolver],
  exports: [ObjectiveService],
})
export class ObjectiveModule {}
