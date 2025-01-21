import type { IContent } from "~/types/contents";

export type TStageType = "e-learning" | "presential" | "videoconference";

export interface IStage {
  name: string;
  type: TStageType[];
  contents: IContent[];
  isLocked?: boolean;
}
