import { Objective as TObjective } from "../api/objective/Objective";

export const OBJECTIVE_TITLE_FIELD = "id";

export const ObjectiveTitle = (record: TObjective): string => {
  return record.id?.toString() || String(record.id);
};
