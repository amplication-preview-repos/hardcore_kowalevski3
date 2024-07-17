import { CollaboratorWhereInput } from "./CollaboratorWhereInput";
import { CollaboratorOrderByInput } from "./CollaboratorOrderByInput";

export type CollaboratorFindManyArgs = {
  where?: CollaboratorWhereInput;
  orderBy?: Array<CollaboratorOrderByInput>;
  skip?: number;
  take?: number;
};
