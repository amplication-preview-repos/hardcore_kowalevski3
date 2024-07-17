import { JsonValue } from "type-fest";
import { Collaborator } from "../collaborator/Collaborator";

export type Visualization = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  data: JsonValue;
  typeField?: "Option1" | null;
  collaborator?: Collaborator | null;
};
