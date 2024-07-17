import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SkillLevelModuleBase } from "./base/skillLevel.module.base";
import { SkillLevelService } from "./skillLevel.service";
import { SkillLevelController } from "./skillLevel.controller";
import { SkillLevelResolver } from "./skillLevel.resolver";

@Module({
  imports: [SkillLevelModuleBase, forwardRef(() => AuthModule)],
  controllers: [SkillLevelController],
  providers: [SkillLevelService, SkillLevelResolver],
  exports: [SkillLevelService],
})
export class SkillLevelModule {}
