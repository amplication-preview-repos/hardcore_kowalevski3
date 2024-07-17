import { SortOrder } from "../../util/SortOrder";

export type ObjectiveOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  skillId?: SortOrder;
};
