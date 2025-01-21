import type { IStage } from "~/types/stages";

export interface IProgram {
  id: number;
  name: string;
  picture?: string;
  stats: IProgramStats;
  stages: IStage[];
}
export interface IProgramStats {
  contents: number;
  contentsDone: number;
  stages: number;
}
