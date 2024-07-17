import { SkillLevelUpdateManyWithoutSkillsInput } from "./SkillLevelUpdateManyWithoutSkillsInput";
import { ObjectiveUpdateManyWithoutSkillsInput } from "./ObjectiveUpdateManyWithoutSkillsInput";
import { FormationUpdateManyWithoutSkillsInput } from "./FormationUpdateManyWithoutSkillsInput";

export type SkillUpdateInput = {
  name?: string | null;
  skillLevels?: SkillLevelUpdateManyWithoutSkillsInput;
  objectives?: ObjectiveUpdateManyWithoutSkillsInput;
  formations?: FormationUpdateManyWithoutSkillsInput;
};
