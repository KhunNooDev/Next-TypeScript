import { useSession, signOut } from "next-auth/react";

Home.title = "Home";
export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="min-h-screen">
      <section className="bg-blue-500 p-3 text-center text-white">
        Welcome
        <br />
        {session && session.user && (
          <>
            {session.user?.name} <br />
            <button onClick={() => signOut()}>Sign out</button>
          </>
        )}
      </section>
    </main>
  );
}
