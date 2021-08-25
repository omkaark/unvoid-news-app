import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Signup.module.scss";
import { useRouter } from "next/router";

const SignUp: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Signup</title>
        <meta name="description" content="News that gets you thinking big" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form className={styles.signup}>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Submit</button>
        <button
          onClick={(e) => {
            router.push("/login");
            e.preventDefault();
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignUp;
