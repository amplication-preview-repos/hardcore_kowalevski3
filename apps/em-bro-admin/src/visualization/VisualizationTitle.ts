import { Visualization as TVisualization } from "../api/visualization/Visualization";

export const VISUALIZATION_TITLE_FIELD = "id";

export const VisualizationTitle = (record: TVisualization): string => {
  return record.id?.toString() || String(record.id);
};
