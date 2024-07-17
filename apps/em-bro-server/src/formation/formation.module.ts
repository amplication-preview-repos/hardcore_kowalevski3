import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FormationModuleBase } from "./base/formation.module.base";
import { FormationService } from "./formation.service";
import { FormationController } from "./formation.controller";
import { FormationResolver } from "./formation.resolver";

@Module({
  imports: [FormationModuleBase, forwardRef(() => AuthModule)],
  controllers: [FormationController],
  providers: [FormationService, FormationResolver],
  exports: [FormationService],
})
export class FormationModule {}
