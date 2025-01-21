import mockTickets from "~/assets/mock/tickets";
import type { ITicket } from "~/types/tickets";

export const useTickets = () => useState<ITicket[]>("tickets", () => mockTickets);

export function createTicket(payload: {
  title: string;
  description: string;
  category: string;
  programId: number;
}) {
  const me = useMe();
  const { title, description, category, programId } = payload;

  const tickets = useTickets();
  tickets.value = [...tickets.value, {
    author: me.value,
    title,
    description,
    category,
    programId,
    createdAt: new Date(),
  }];
}
