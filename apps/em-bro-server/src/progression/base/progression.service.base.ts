/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Progression as PrismaProgression } from "@prisma/client";

export class ProgressionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ProgressionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.progression.count(args);
  }

  async progressions(
    args: Prisma.ProgressionFindManyArgs
  ): Promise<PrismaProgression[]> {
    return this.prisma.progression.findMany(args);
  }
  async progression(
    args: Prisma.ProgressionFindUniqueArgs
  ): Promise<PrismaProgression | null> {
    return this.prisma.progression.findUnique(args);
  }
  async createProgression(
    args: Prisma.ProgressionCreateArgs
  ): Promise<PrismaProgression> {
    return this.prisma.progression.create(args);
  }
  async updateProgression(
    args: Prisma.ProgressionUpdateArgs
  ): Promise<PrismaProgression> {
    return this.prisma.progression.update(args);
  }
  async deleteProgression(
    args: Prisma.ProgressionDeleteArgs
  ): Promise<PrismaProgression> {
    return this.prisma.progression.delete(args);
  }
}