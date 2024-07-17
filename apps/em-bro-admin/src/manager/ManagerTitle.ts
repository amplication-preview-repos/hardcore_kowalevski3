import { Manager as TManager } from "../api/manager/Manager";

export const MANAGER_TITLE_FIELD = "id";

export const ManagerTitle = (record: TManager): string => {
  return record.id?.toString() || String(record.id);
};
