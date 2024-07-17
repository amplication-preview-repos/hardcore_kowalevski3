import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OneOnOneMeetingServiceBase } from "./base/oneOnOneMeeting.service.base";

@Injectable()
export class OneOnOneMeetingService extends OneOnOneMeetingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
