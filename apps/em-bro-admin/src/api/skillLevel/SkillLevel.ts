import { Collaborator } from "../collaborator/Collaborator";
import { Skill } from "../skill/Skill";

export type SkillLevel = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  level: number | null;
  collaborator?: Collaborator | null;
  skill?: Skill | null;
};
