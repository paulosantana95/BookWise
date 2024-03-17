import { AuthButtons } from "@/components/AuthButtons";
import { Heading, Text } from "@/components/Typography";
import {
  LoginContainer,
  LogoSection,
  WelcomeSection,
} from "@/styles/pages/login";
import Head from "next/head";
import Image from "next/image";

export default function Login() {
  return (
    <LoginContainer>
      <Head>
        <title>Login | BookWise</title>
      </Head>
      <LogoSection>
        <Image
          src="/images/logo.svg"
          width={232}
          height={58}
          alt="BookWise logo"
          priority={false}
        />
      </LogoSection>

      <WelcomeSection>
        <Heading size="lg" color="gray-100">
          Boas vindas!
        </Heading>
        <Text color="gray-200">Faça seu login ou acesse como visitante.</Text>
        <AuthButtons canGuest />
      </WelcomeSection>
    </LoginContainer>
  );
}
