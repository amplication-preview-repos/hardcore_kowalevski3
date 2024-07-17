import { SkillWhereUniqueInput } from "../skill/SkillWhereUniqueInput";

export type FormationCreateInput = {
  description?: string | null;
  skill?: SkillWhereUniqueInput | null;
};
