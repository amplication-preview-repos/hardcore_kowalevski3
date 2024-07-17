import { Collaborator as TCollaborator } from "../api/collaborator/Collaborator";

export const COLLABORATOR_TITLE_FIELD = "lastname";

export const CollaboratorTitle = (record: TCollaborator): string => {
  return record.lastname?.toString() || String(record.id);
};
