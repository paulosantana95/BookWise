import { ChartLineUp } from "@phosphor-icons/react";
import { PageTitle } from "../ui/PageTitle";
import { Container } from "./styles";
import { Text } from "../Typography";
import { RatingCard } from "../RatingCard";

export const LatestRatings = () => {
  return (
    <Container>
      <PageTitle
        title="Início"
        icon={<ChartLineUp size={32} />}
        css={{ marginBottom: 40 }}
      />

      <Text size="sm">Avaliações mais recentes</Text>

      <section>
        {Array.from({ length: 20 }).map((_, i) => (
          <RatingCard
            key={i}
            rating={{
              id: "aa",
              rate: 4,
              user: {
                name: "jhon Doe",
                avatar_url:
                  "https://avatars.githubusercontent.com/u/91387292?v=4",
                email: "johndoe@gmail.com",
                id: "asoaspk",
                created_at: new Date(),
              },
              book: {
                id: "aopskpoas",
                cover_url:
                  "https://avatars.githubusercontent.com/u/91387292?v=4",
                author: "Scooby Do!",
                name: "Scooby",
                summary:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, laudantium? Nisi eaque recusandae fugiat velit repellat quasi culpa reiciendis ducimus laudantium ipsa, quod facere repellendus labore, ipsum ullam. Sint, dolorum.",
                total_pages: 100,
              },
              created_at: new Date(),
            }}
          />
        ))}
      </section>
    </Container>
  );
};
