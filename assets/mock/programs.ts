import type { IProgram } from "~/types/programs";

export default [
  {
    id: 1,
    name: "Master Barman : L'Art des Cocktails",
    stats: {
      contents: 200,
      contentsDone: 123,
      stages: 7,
    },
    stages: [
      {
        name: "Introduction au Métier de Barman",
        description: "Comprendre les bases du métier de barman.",
        type: ["e-learning", "presential", "videoconference"],
        isLocked: false,
        contents: [
          {
            name: "Rôle et Responsabilités",
            design: {
              picture: "https://images.pexels.com/photos/170809/pexels-photo-170809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            },
            progression: {
              done: true,
              viewed: true,
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto assumenda autem dolorem doloremque dolores enim facere magnam molestiae natus necessitatibus nemo, nihil nulla sequi veritatis? Aliquid asperiores assumenda eum fugit harum laudantium magni neque pariatur perspiciatis quo, sed ullam veniam voluptas. Cumque deleniti deserunt, dignissimos enim esse excepturi, exercitationem maiores officia repellat rerum suscipit tempore vel, voluptas. Adipisci doloribus facilis ipsam neque obcaecati quia quo rem, ullam. Animi beatae consequuntur dicta eaque harum in minus molestias mollitia nemo possimus quam recusandae repellat, suscipit tenetur ut. Animi asperiores aut blanditiis dolorum ea eaque, facilis fuga iste nihil praesentium qui ratione soluta sunt totam voluptatem! Ab aut, culpa deleniti dolor dolore labore, neque omnis quis recusandae repellat temporibus unde voluptatum. Aut cum ea eaque et eveniet ex expedita ipsam modi, perspiciatis, quia tempore veniam? Alias aliquam deserunt dolore ducimus hic iure laboriosam praesentium sunt veniam voluptate. Asperiores consequatur illo ipsum quasi!",
          },
          {
            name: "Presential",
            duration: 5,
            design: {},
            progression: {
              viewed: false,
              done: false,
            },
            link: [
              {
                label: "Ouvrir le lien",
                url: "https://www.youtube.com",
                type: "external",
              },
            ],
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur debitis, dolorem eaque error excepturi expedita explicabo facere hic ipsum minima nam nihil nisi quasi qui quo, recusandae reiciendis saepe soluta tempore ullam velit veritatis. Accusamus ad, atque laudantium placeat qui quos similique suscipit tempore ut. Et explicabo laborum odit ut voluptatum. Molestias quas, ullam? Accusamus ad aspernatur at atque aut blanditiis commodi cum deleniti dolore eaque earum expedita illo iste itaque magnam magni molestiae natus nesciunt nisi non nulla numquam obcaecati, optio perspiciatis placeat quam quasi quod repellat reprehenderit saepe sequi soluta veritatis vero voluptate voluptatem voluptates voluptatum. Animi delectus dolore doloremque doloribus earum explicabo nihil sint. Ducimus modi nihil nostrum voluptate voluptatum. Accusantium aperiam asperiores autem blanditiis commodi earum fugit inventore, officia repellat soluta? Accusamus accusantium aspernatur aut beatae corporis distinctio eligendi eveniet incidunt iusto maiores minus mollitia nihil, non numquam optio perferendis provident quidem saepe temporibus ullam, vel veritatis vitae voluptatem. Ad cumque doloremque illum ipsam, iste libero necessitatibus, nihil omnis provident quia quis recusandae reprehenderit temporibus tenetur vel. Ad asperiores commodi culpa debitis doloremque et explicabo facere fugiat harum hic ipsa ipsam magni modi, nam non officiis perferendis quis quod rem repellendus sit veniam vero! Alias!",
          },
        ],
      },
      {
        name: "Connaissance des boissons",
        type: ["e-learning"],
        contents: [],
      },
      {
        name: "Techniques de Bar et Pratique",
        type: ["e-learning", "presential"],
        contents: [],
      },
      {
        name: "Gestion et Organisation du Bar",
        type: ["e-learning", "videoconference"],
        contents: [],
      },
      {
        name: "Service Client et Communication",
        type: ["e-learning", "presential"],
        contents: [],
      },
      {
        name: "Sécurité et Réglementation",
        type: ["e-learning"],
        contents: [],
      },
      {
        name: "Stage Pratique et Évaluation finale",
        type: ["e-learning", "presential"],
        contents: [],
      },
    ],
  },
] as IProgram[];
