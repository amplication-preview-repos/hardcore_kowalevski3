/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDate,
  IsEnum,
  IsOptional,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumCollaboratorSeniority } from "./EnumCollaboratorSeniority";
import { SkillLevel } from "../../skillLevel/base/SkillLevel";
import { Visualization } from "../../visualization/base/Visualization";

@ObjectType()
class Collaborator {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    enum: EnumCollaboratorSeniority,
  })
  @IsEnum(EnumCollaboratorSeniority)
  @IsOptional()
  @Field(() => EnumCollaboratorSeniority, {
    nullable: true,
  })
  seniority?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastname!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstname!: string | null;

  @ApiProperty({
    required: false,
    type: () => [SkillLevel],
  })
  @ValidateNested()
  @Type(() => SkillLevel)
  @IsOptional()
  skillLevels?: Array<SkillLevel>;

  @ApiProperty({
    required: false,
    type: () => [Visualization],
  })
  @ValidateNested()
  @Type(() => Visualization)
  @IsOptional()
  visualizations?: Array<Visualization>;
}

export { Collaborator as Collaborator };
