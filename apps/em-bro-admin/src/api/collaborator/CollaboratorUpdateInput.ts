import { SkillLevelUpdateManyWithoutCollaboratorsInput } from "./SkillLevelUpdateManyWithoutCollaboratorsInput";
import { VisualizationUpdateManyWithoutCollaboratorsInput } from "./VisualizationUpdateManyWithoutCollaboratorsInput";

export type CollaboratorUpdateInput = {
  seniority?: "Option1" | null;
  lastname?: string | null;
  firstname?: string | null;
  skillLevels?: SkillLevelUpdateManyWithoutCollaboratorsInput;
  visualizations?: VisualizationUpdateManyWithoutCollaboratorsInput;
};
