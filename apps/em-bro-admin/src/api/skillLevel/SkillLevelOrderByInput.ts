import { SortOrder } from "../../util/SortOrder";

export type SkillLevelOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  level?: SortOrder;
  collaboratorId?: SortOrder;
  skillId?: SortOrder;
};
