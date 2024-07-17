import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SkillLevelListRelationFilter } from "../skillLevel/SkillLevelListRelationFilter";
import { ObjectiveListRelationFilter } from "../objective/ObjectiveListRelationFilter";
import { FormationListRelationFilter } from "../formation/FormationListRelationFilter";

export type SkillWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  skillLevels?: SkillLevelListRelationFilter;
  objectives?: ObjectiveListRelationFilter;
  formations?: FormationListRelationFilter;
};
