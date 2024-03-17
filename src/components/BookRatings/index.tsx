import { useState } from "react";
import { Text } from "../Typography";
import { RatingWithAuthor, UserRatingCard } from "../UserRatingCard";
import { Link } from "../ui/Link";
import { Container } from "./styles";
import { RatingForm } from "../RatingForm";
import { useSession } from "next-auth/react";

type BookRatingsProps = {
  ratings: RatingWithAuthor[];
  bookId: string;
};

export const BookRatings = ({ ratings, bookId }: BookRatingsProps) => {
  const { status, data: session } = useSession();
  const [showForm, setShowForm] = useState(false);

  const isAuthenticated = status === "authenticated";

  const handleRate = () => {
    if (!isAuthenticated) return;
    setShowForm(true);
  };

  const canRate = ratings.every(
    (rating) => rating.user_id !== session?.user?.id
  );

  return (
    <Container>
      <header>
        <Text>Avaliações</Text>
        {canRate && <Link withoutIcon onClick={handleRate} text="Avaliar" />}
      </header>

      <section>
        {showForm && (
          <RatingForm bookId={bookId} onCancel={() => setShowForm(false)} />
        )}
        {ratings.map((rating) => (
          <UserRatingCard key={rating.id} rating={rating} />
        ))}
      </section>
    </Container>
  );
};
