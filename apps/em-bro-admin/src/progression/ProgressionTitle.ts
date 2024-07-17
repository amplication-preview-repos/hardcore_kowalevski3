import { Progression as TProgression } from "../api/progression/Progression";

export const PROGRESSION_TITLE_FIELD = "id";

export const ProgressionTitle = (record: TProgression): string => {
  return record.id?.toString() || String(record.id);
};
