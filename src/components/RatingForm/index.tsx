import {
  ActionsContainer,
  Container,
  FormContainer,
  UserDetails,
} from "./styles";
import { Avatar } from "../ui/Avatar";
import { Heading } from "../Typography";
import { RatingStars } from "../RatingStars";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { TextArea } from "../ui/Form/TextArea";
import { ActionIcon } from "../ui/ActionIcon";
import { Check, X } from "@phosphor-icons/react";

type RatingFormProps = {
  onCancel: () => void;
  bookId: string;
};

export const RatingForm = ({ onCancel, bookId }: RatingFormProps) => {
  const [description, setDescription] = useState("");
  const [currentRate, setCurrentRate] = useState(0);
  const { data: session } = useSession();

  const user = session?.user;
  const submitDisabled = !description.trim() || !currentRate;

  return (
    <Container>
      {user && (
        <UserDetails>
          <section>
            <Avatar alt={user.name} src={user.avatar_url} />
            <Heading size="xs">{user.name}</Heading>
          </section>

          <RatingStars size="lg" rating={currentRate} />
        </UserDetails>
      )}

      <FormContainer>
        <TextArea
          placeholder="Escreva sua avaliação"
          maxLength={450}
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
        <ActionsContainer>
          <ActionIcon
            type="button"
            onClick={onCancel}
            iconColor="purple100"
            icon={<X />}
          />
          <ActionIcon
            type="submit"
            iconColor="green100"
            icon={<Check />}
            disabled={submitDisabled}
          />
        </ActionsContainer>
      </FormContainer>
    </Container>
  );
};
