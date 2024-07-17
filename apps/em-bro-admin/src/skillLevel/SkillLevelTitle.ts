import { SkillLevel as TSkillLevel } from "../api/skillLevel/SkillLevel";

export const SKILLLEVEL_TITLE_FIELD = "id";

export const SkillLevelTitle = (record: TSkillLevel): string => {
  return record.id?.toString() || String(record.id);
};
