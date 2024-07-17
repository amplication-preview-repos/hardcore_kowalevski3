import { SkillLevelCreateNestedManyWithoutSkillsInput } from "./SkillLevelCreateNestedManyWithoutSkillsInput";
import { ObjectiveCreateNestedManyWithoutSkillsInput } from "./ObjectiveCreateNestedManyWithoutSkillsInput";
import { FormationCreateNestedManyWithoutSkillsInput } from "./FormationCreateNestedManyWithoutSkillsInput";

export type SkillCreateInput = {
  name?: string | null;
  skillLevels?: SkillLevelCreateNestedManyWithoutSkillsInput;
  objectives?: ObjectiveCreateNestedManyWithoutSkillsInput;
  formations?: FormationCreateNestedManyWithoutSkillsInput;
};
