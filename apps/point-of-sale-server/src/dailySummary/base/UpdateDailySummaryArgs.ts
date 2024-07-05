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
import { DailySummaryWhereUniqueInput } from "./DailySummaryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DailySummaryUpdateInput } from "./DailySummaryUpdateInput";

@ArgsType()
class UpdateDailySummaryArgs {
  @ApiProperty({
    required: true,
    type: () => DailySummaryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DailySummaryWhereUniqueInput)
  @Field(() => DailySummaryWhereUniqueInput, { nullable: false })
  where!: DailySummaryWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DailySummaryUpdateInput,
  })
  @ValidateNested()
  @Type(() => DailySummaryUpdateInput)
  @Field(() => DailySummaryUpdateInput, { nullable: false })
  data!: DailySummaryUpdateInput;
}

export { UpdateDailySummaryArgs as UpdateDailySummaryArgs };
