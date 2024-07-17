import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VisualizationServiceBase } from "./base/visualization.service.base";

@Injectable()
export class VisualizationService extends VisualizationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
