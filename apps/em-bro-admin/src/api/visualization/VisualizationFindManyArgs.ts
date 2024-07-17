import { VisualizationWhereInput } from "./VisualizationWhereInput";
import { VisualizationOrderByInput } from "./VisualizationOrderByInput";

export type VisualizationFindManyArgs = {
  where?: VisualizationWhereInput;
  orderBy?: Array<VisualizationOrderByInput>;
  skip?: number;
  take?: number;
};
