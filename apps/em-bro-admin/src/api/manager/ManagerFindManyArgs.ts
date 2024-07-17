import { ManagerWhereInput } from "./ManagerWhereInput";
import { ManagerOrderByInput } from "./ManagerOrderByInput";

export type ManagerFindManyArgs = {
  where?: ManagerWhereInput;
  orderBy?: Array<ManagerOrderByInput>;
  skip?: number;
  take?: number;
};
