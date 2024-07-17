import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SkillLevelListRelationFilter } from "../skillLevel/SkillLevelListRelationFilter";
import { VisualizationListRelationFilter } from "../visualization/VisualizationListRelationFilter";

export type CollaboratorWhereInput = {
  id?: StringFilter;
  seniority?: "Option1";
  lastname?: StringNullableFilter;
  firstname?: StringNullableFilter;
  skillLevels?: SkillLevelListRelationFilter;
  visualizations?: VisualizationListRelationFilter;
};
