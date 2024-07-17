import { SkillLevelCreateNestedManyWithoutCollaboratorsInput } from "./SkillLevelCreateNestedManyWithoutCollaboratorsInput";
import { VisualizationCreateNestedManyWithoutCollaboratorsInput } from "./VisualizationCreateNestedManyWithoutCollaboratorsInput";

export type CollaboratorCreateInput = {
  seniority?: "Option1" | null;
  lastname?: string | null;
  firstname?: string | null;
  skillLevels?: SkillLevelCreateNestedManyWithoutCollaboratorsInput;
  visualizations?: VisualizationCreateNestedManyWithoutCollaboratorsInput;
};
