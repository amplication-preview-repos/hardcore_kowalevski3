import { Skill } from "../skill/Skill";

export type Objective = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  skill?: Skill | null;
};
