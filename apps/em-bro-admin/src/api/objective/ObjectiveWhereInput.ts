import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SkillWhereUniqueInput } from "../skill/SkillWhereUniqueInput";

export type ObjectiveWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  skill?: SkillWhereUniqueInput;
};
