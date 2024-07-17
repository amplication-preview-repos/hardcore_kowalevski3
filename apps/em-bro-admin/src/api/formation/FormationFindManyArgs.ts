import { FormationWhereInput } from "./FormationWhereInput";
import { FormationOrderByInput } from "./FormationOrderByInput";

export type FormationFindManyArgs = {
  where?: FormationWhereInput;
  orderBy?: Array<FormationOrderByInput>;
  skip?: number;
  take?: number;
};
