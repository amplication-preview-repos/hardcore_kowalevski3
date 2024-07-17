import { SortOrder } from "../../util/SortOrder";

export type CollaboratorOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  seniority?: SortOrder;
  lastname?: SortOrder;
  firstname?: SortOrder;
};
