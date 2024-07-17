/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SkillLevelWhereUniqueInput } from "./SkillLevelWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SkillLevelUpdateInput } from "./SkillLevelUpdateInput";

@ArgsType()
class UpdateSkillLevelArgs {
  @ApiProperty({
    required: true,
    type: () => SkillLevelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SkillLevelWhereUniqueInput)
  @Field(() => SkillLevelWhereUniqueInput, { nullable: false })
  where!: SkillLevelWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SkillLevelUpdateInput,
  })
  @ValidateNested()
  @Type(() => SkillLevelUpdateInput)
  @Field(() => SkillLevelUpdateInput, { nullable: false })
  data!: SkillLevelUpdateInput;
}

export { UpdateSkillLevelArgs as UpdateSkillLevelArgs };
