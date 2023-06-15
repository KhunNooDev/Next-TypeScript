import { signOut } from "next-auth/react";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function SignOut() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      signOut({ redirect: false });
    } else if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status]);

  return <></>;
}
