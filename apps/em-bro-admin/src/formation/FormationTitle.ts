import { Formation as TFormation } from "../api/formation/Formation";

export const FORMATION_TITLE_FIELD = "id";

export const FormationTitle = (record: TFormation): string => {
  return record.id?.toString() || String(record.id);
};
