/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  OneOnOneMeeting as PrismaOneOnOneMeeting,
} from "@prisma/client";

export class OneOnOneMeetingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.OneOnOneMeetingCountArgs, "select">
  ): Promise<number> {
    return this.prisma.oneOnOneMeeting.count(args);
  }

  async oneOnOneMeetings(
    args: Prisma.OneOnOneMeetingFindManyArgs
  ): Promise<PrismaOneOnOneMeeting[]> {
    return this.prisma.oneOnOneMeeting.findMany(args);
  }
  async oneOnOneMeeting(
    args: Prisma.OneOnOneMeetingFindUniqueArgs
  ): Promise<PrismaOneOnOneMeeting | null> {
    return this.prisma.oneOnOneMeeting.findUnique(args);
  }
  async createOneOnOneMeeting(
    args: Prisma.OneOnOneMeetingCreateArgs
  ): Promise<PrismaOneOnOneMeeting> {
    return this.prisma.oneOnOneMeeting.create(args);
  }
  async updateOneOnOneMeeting(
    args: Prisma.OneOnOneMeetingUpdateArgs
  ): Promise<PrismaOneOnOneMeeting> {
    return this.prisma.oneOnOneMeeting.update(args);
  }
  async deleteOneOnOneMeeting(
    args: Prisma.OneOnOneMeetingDeleteArgs
  ): Promise<PrismaOneOnOneMeeting> {
    return this.prisma.oneOnOneMeeting.delete(args);
  }
}