import { SkillWhereUniqueInput } from "../skill/SkillWhereUniqueInput";

export type ObjectiveUpdateInput = {
  description?: string | null;
  skill?: SkillWhereUniqueInput | null;
};
