import { ProgressionWhereInput } from "./ProgressionWhereInput";
import { ProgressionOrderByInput } from "./ProgressionOrderByInput";

export type ProgressionFindManyArgs = {
  where?: ProgressionWhereInput;
  orderBy?: Array<ProgressionOrderByInput>;
  skip?: number;
  take?: number;
};
