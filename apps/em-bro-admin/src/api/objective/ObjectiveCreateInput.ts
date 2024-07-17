import { SkillWhereUniqueInput } from "../skill/SkillWhereUniqueInput";

export type ObjectiveCreateInput = {
  description?: string | null;
  skill?: SkillWhereUniqueInput | null;
};
