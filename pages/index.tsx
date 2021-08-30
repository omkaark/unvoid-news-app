import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/MainLogin.module.scss";
import { signIn, signOut, useSession } from "next-auth/client";
import { useEffect } from "react";
import { getSession } from "next-auth/client";

const Home: NextPage = () => {
  const router = useRouter();
  const [session, loading] = useSession();
  useEffect(() => {
    if (session !== null) {
      router.push("/blogs");
    }
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Join UNVOID</title>
        <meta name="description" content="News that gets you thinking big" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.loginContainer}>
        {!session && (
          <>
            Not signed in <br />
            <button
              onClick={() =>
                signIn("google", { callbackUrl: process.env.NEXTAUTH_URL })
              }
            >
              Sign in google
            </button>
            {/*<button
              onClick={() =>
                signIn("github", { callbackUrl: process.env.NEXTAUTH_URL })
              }
            >
              Sign in github
            </button>*/}
          </>
        )}
        {session && (
          <>
            Signed in as {/* @ts-ignore */}
            {(session.user.name as String) || "Who"} <br />
            <button onClick={() => signOut()}>Sign out</button>
          </>
        )}
      </div>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}

export default Home;
