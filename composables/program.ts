import programs from "~/assets/mock/programs";
import type { IProgram } from "~/types/programs";

export const useSelectedProgram = () => useState<IProgram>("selectedProgram", () => programs[0]);
export const usePrograms = () => useState<IProgram[]>("programs", () => programs);
