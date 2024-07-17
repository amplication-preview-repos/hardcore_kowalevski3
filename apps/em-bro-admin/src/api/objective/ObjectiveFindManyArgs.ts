import { ObjectiveWhereInput } from "./ObjectiveWhereInput";
import { ObjectiveOrderByInput } from "./ObjectiveOrderByInput";

export type ObjectiveFindManyArgs = {
  where?: ObjectiveWhereInput;
  orderBy?: Array<ObjectiveOrderByInput>;
  skip?: number;
  take?: number;
};
