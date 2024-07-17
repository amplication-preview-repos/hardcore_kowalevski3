import { SkillLevel } from "../skillLevel/SkillLevel";
import { Visualization } from "../visualization/Visualization";

export type Collaborator = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  seniority?: "Option1" | null;
  lastname: string | null;
  firstname: string | null;
  skillLevels?: Array<SkillLevel>;
  visualizations?: Array<Visualization>;
};
