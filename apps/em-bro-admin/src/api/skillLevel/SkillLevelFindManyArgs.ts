import { SkillLevelWhereInput } from "./SkillLevelWhereInput";
import { SkillLevelOrderByInput } from "./SkillLevelOrderByInput";

export type SkillLevelFindManyArgs = {
  where?: SkillLevelWhereInput;
  orderBy?: Array<SkillLevelOrderByInput>;
  skip?: number;
  take?: number;
};
