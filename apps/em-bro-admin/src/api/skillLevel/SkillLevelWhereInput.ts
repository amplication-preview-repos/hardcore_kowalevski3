import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { CollaboratorWhereUniqueInput } from "../collaborator/CollaboratorWhereUniqueInput";
import { SkillWhereUniqueInput } from "../skill/SkillWhereUniqueInput";

export type SkillLevelWhereInput = {
  id?: StringFilter;
  level?: IntNullableFilter;
  collaborator?: CollaboratorWhereUniqueInput;
  skill?: SkillWhereUniqueInput;
};
