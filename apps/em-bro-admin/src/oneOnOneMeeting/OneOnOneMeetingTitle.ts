import { OneOnOneMeeting as TOneOnOneMeeting } from "../api/oneOnOneMeeting/OneOnOneMeeting";

export const ONEONONEMEETING_TITLE_FIELD = "id";

export const OneOnOneMeetingTitle = (record: TOneOnOneMeeting): string => {
  return record.id?.toString() || String(record.id);
};
