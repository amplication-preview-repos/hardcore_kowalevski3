import { SkillWhereUniqueInput } from "../skill/SkillWhereUniqueInput";

export type FormationUpdateInput = {
  description?: string | null;
  skill?: SkillWhereUniqueInput | null;
};
