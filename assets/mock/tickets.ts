import type { ITicket } from "~/types/tickets";

export default [
  {
    author: {
      id: 2516,
      avatarUrl: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      firstname: "Florian",
      lastname: "ERLACHER",
      email: "florian@humonio.com",
    },
    title: "Test des tickets",
    description: "Je test le système de tickets !",
    category: "other",
    programId: 1,
    createdAt: new Date("Jan. 20, 2025"),
    closed: true,
  },
] as ITicket[];
