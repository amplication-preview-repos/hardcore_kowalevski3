import { InputJsonValue } from "../../types";
import { CollaboratorWhereUniqueInput } from "../collaborator/CollaboratorWhereUniqueInput";

export type VisualizationCreateInput = {
  data?: InputJsonValue;
  typeField?: "Option1" | null;
  collaborator?: CollaboratorWhereUniqueInput | null;
};
