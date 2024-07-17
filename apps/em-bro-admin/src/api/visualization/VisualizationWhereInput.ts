import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { CollaboratorWhereUniqueInput } from "../collaborator/CollaboratorWhereUniqueInput";

export type VisualizationWhereInput = {
  id?: StringFilter;
  data?: JsonFilter;
  typeField?: "Option1";
  collaborator?: CollaboratorWhereUniqueInput;
};
