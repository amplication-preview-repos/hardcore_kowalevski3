import { SortOrder } from "../../util/SortOrder";

export type VisualizationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  data?: SortOrder;
  typeField?: SortOrder;
  collaboratorId?: SortOrder;
};
