import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VisualizationModuleBase } from "./base/visualization.module.base";
import { VisualizationService } from "./visualization.service";
import { VisualizationController } from "./visualization.controller";
import { VisualizationResolver } from "./visualization.resolver";

@Module({
  imports: [VisualizationModuleBase, forwardRef(() => AuthModule)],
  controllers: [VisualizationController],
  providers: [VisualizationService, VisualizationResolver],
  exports: [VisualizationService],
})
export class VisualizationModule {}
