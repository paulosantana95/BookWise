import Image from "next/image";
import { Container, LoginButton, UserDetails } from "./styles";
import { Navigation } from "../Navigation";
import { signOut, useSession } from "next-auth/react";
import { SignIn, SignOut } from "@phosphor-icons/react";
import { Text } from "../Typography";
import { Avatar } from "../ui/Avatar";
import { useRouter } from "next/router";

export const Sidebar = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const user = session?.user;

  function handleOpenProfile() {
    router.push(`/profile/${user?.id}`);
  }

  return (
    <Container>
      <div>
        <Image
          src="/images/logo.svg"
          width={128}
          height={32}
          alt="BookWise logo"
        />
        <Navigation />
      </div>
      <footer>
        {!user ? (
          <LoginButton href="/login">
            Fazer Login <SignIn size={24} />
          </LoginButton>
        ) : (
          <UserDetails>
            <Avatar
              src={user?.avatar_url}
              size="sm"
              alt={user?.name}
              onClick={handleOpenProfile}
              css={{ cursor: "pointer" }}
            />
            <Text size="sm">{user?.name}</Text>
            <SignOut color="#F75A68" size={20} onClick={() => signOut()} />
          </UserDetails>
        )}
      </footer>
    </Container>
  );
};
