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
import { VisualizationCreateInput } from "./VisualizationCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateVisualizationArgs {
  @ApiProperty({
    required: true,
    type: () => VisualizationCreateInput,
  })
  @ValidateNested()
  @Type(() => VisualizationCreateInput)
  @Field(() => VisualizationCreateInput, { nullable: false })
  data!: VisualizationCreateInput;
}

export { CreateVisualizationArgs as CreateVisualizationArgs };
