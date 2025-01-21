import type { IUser } from "~/types/user";

export interface ITicket {
  author: IUser;
  programId: number;
  title: string;
  description: string;
  category: string;
  createdAt: Date;
  closed?: boolean;
}
