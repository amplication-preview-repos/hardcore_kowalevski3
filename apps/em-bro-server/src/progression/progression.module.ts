import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProgressionModuleBase } from "./base/progression.module.base";
import { ProgressionService } from "./progression.service";
import { ProgressionController } from "./progression.controller";
import { ProgressionResolver } from "./progression.resolver";

@Module({
  imports: [ProgressionModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProgressionController],
  providers: [ProgressionService, ProgressionResolver],
  exports: [ProgressionService],
})
export class ProgressionModule {}
