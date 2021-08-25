import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/CreatePost.module.scss";
import { useRouter } from "next/router";

const CreatePost: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Post</title>
        <meta name="description" content="News that gets you thinking big" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form className={styles.createPost}>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Image URL (square)" />
        <textarea placeholder="Post Content"></textarea>
        <button>Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
