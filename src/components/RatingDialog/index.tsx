import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import {
  BookContent,
  BookDetailsContainer,
  BookDetailsWrapper,
  BookImage,
  BookInfos,
  DialogClose,
  DialogContent,
  DialogOverlay,
} from "./styles";
import { BookOpen, BookmarkSimple, X } from "@phosphor-icons/react";
import { Heading, Text } from "../Typography";
import { RatingStars } from "../RatingStars";
import { BookInfo } from "./BookInfo";
import { BookRatings } from "../BookRatings";

type RatingDialogProps = {
  children: ReactNode;
};

export const RatingDialog = ({ children }: RatingDialogProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogClose>
            <X size={24} />
          </DialogClose>

          <BookDetailsWrapper>
            <BookDetailsContainer>
              <BookImage
                width={171}
                height={242}
                alt="book name"
                src="https://github.com/paulosantana95.png"
              />
              <BookContent>
                <div>
                  <Heading size="sm">Book Name</Heading>
                  <Text color="gray-300" css={{ marginTop: "$2" }}>
                    Joe Doe
                  </Text>
                </div>
                <div>
                  <RatingStars rating={4} size="md" />
                  <Text size="sm" color="gray-400" css={{ marginTop: "$1" }}>
                    2 avaliações
                  </Text>
                </div>
              </BookContent>
            </BookDetailsContainer>

            <BookInfos>
              <BookInfo
                icon={<BookmarkSimple />}
                title="Categorias"
                info="Ficção, Ação"
              />
              <BookInfo icon={<BookOpen />} title="Páginas" info="217" />
            </BookInfos>
          </BookDetailsWrapper>

          <BookRatings />
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
