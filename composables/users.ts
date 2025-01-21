import users from "~/assets/mock/users";
import type { IUser } from "~/types/user";

export const useMe = () => useState<IUser>("me", () => users[0]);
export const useUsers = () => useState<IUser[]>("users", () => users);
