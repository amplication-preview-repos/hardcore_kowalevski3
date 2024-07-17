import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProgressionServiceBase } from "./base/progression.service.base";

@Injectable()
export class ProgressionService extends ProgressionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
