import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Login.module.scss";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta name="description" content="News that gets you thinking big" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <form className={styles.login}>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Submit</button>
        <button
          onClick={(e) => {
            router.push("/signup");
            e.preventDefault();
          }}
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Home;
