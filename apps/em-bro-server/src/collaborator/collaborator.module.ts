import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CollaboratorModuleBase } from "./base/collaborator.module.base";
import { CollaboratorService } from "./collaborator.service";
import { CollaboratorController } from "./collaborator.controller";
import { CollaboratorResolver } from "./collaborator.resolver";

@Module({
  imports: [CollaboratorModuleBase, forwardRef(() => AuthModule)],
  controllers: [CollaboratorController],
  providers: [CollaboratorService, CollaboratorResolver],
  exports: [CollaboratorService],
})
export class CollaboratorModule {}
