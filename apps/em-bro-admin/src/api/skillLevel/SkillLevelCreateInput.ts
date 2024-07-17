import { CollaboratorWhereUniqueInput } from "../collaborator/CollaboratorWhereUniqueInput";
import { SkillWhereUniqueInput } from "../skill/SkillWhereUniqueInput";

export type SkillLevelCreateInput = {
  level?: number | null;
  collaborator?: CollaboratorWhereUniqueInput | null;
  skill?: SkillWhereUniqueInput | null;
};
