export type TeamCategory =
  | "leadership"
  | "project-head"
  | "core"
  | "volunteer"
  | "youth";

export interface ITeamMember {
  id: string;
  name: string;
  role?: string;
  image: string;
  category: TeamCategory;
  message?: string;
}