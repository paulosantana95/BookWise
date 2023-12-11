import Image from "next/image";
import { AuthButton, Container } from "./styles";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

type AuthButtonProps = {
  callbackUrl?: string;
};

export const AuthButtons = ({ callbackUrl = "/" }: AuthButtonProps) => {
  const router = useRouter();

  function handleSignIn(provider?: string) {
    if (!provider) {
      router.push(callbackUrl);
      return;
    }

    signIn(provider, {
      callbackUrl,
    });
  }

  return (
    <Container>
      <AuthButton onClick={() => handleSignIn("google")}>
        <Image
          src="/images/icons/google.svg"
          width={32}
          height={32}
          alt="Google Logo"
        />
        Entrar com Google
      </AuthButton>
      <AuthButton onClick={() => handleSignIn("github")}>
        <Image
          src="/images/icons/github.svg"
          width={32}
          height={32}
          alt="Github Logo"
        />
        Entrar com Github
      </AuthButton>
      <AuthButton onClick={() => handleSignIn()}>
        <Image
          src="/images/icons/rocket.svg"
          width={32}
          height={32}
          alt="Rocket icon"
        />
        Entrar como Visitante
      </AuthButton>
    </Container>
  );
};
