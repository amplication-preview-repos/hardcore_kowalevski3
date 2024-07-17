import { InputJsonValue } from "../../types";
import { CollaboratorWhereUniqueInput } from "../collaborator/CollaboratorWhereUniqueInput";

export type VisualizationUpdateInput = {
  data?: InputJsonValue;
  typeField?: "Option1" | null;
  collaborator?: CollaboratorWhereUniqueInput | null;
};
