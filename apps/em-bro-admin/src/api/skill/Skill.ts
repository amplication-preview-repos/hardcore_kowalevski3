import { SkillLevel } from "../skillLevel/SkillLevel";
import { Objective } from "../objective/Objective";
import { Formation } from "../formation/Formation";

export type Skill = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  skillLevels?: Array<SkillLevel>;
  objectives?: Array<Objective>;
  formations?: Array<Formation>;
};
