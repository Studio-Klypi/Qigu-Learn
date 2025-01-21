import type { IContent } from "~/types/contents";

export const useSelectedActivity = () => useState<IContent | null>("selectedActivity", () => null);
