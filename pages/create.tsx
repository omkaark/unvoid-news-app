import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/CreatePost.module.scss";
import { useRouter } from "next/router";
import { getSession, useSession } from "next-auth/client";
import { useEffect } from "react";
const CreatePost: NextPage = () => {
  const router = useRouter();
  const [session, loading] = useSession();
  useEffect(() => {
    if (session === null) {
      router.push("/");
    }
  }, []);
  const handleCreate: Function = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/create", {
      body: JSON.stringify({
        title: e.target.title.value,
        imgUrl: e.target.imgUrl.value,
        author: session?.user?.name || "Omkaar",
        content: e.target.content.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    router.push("/");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Post</title>
        <meta name="description" content="News that gets you thinking big" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <form onSubmit={(e) => handleCreate(e)} className={styles.createPost}>
        {" "}
        {/* method="POST" action="/api/create" */}
        <input name="title" type="text" placeholder="Title" />
        <input name="imgUrl" type="text" placeholder="Image URL (square)" />
        <textarea name="content" placeholder="Post Content"></textarea>
        <button>Post</button>
      </form>
    </div>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}

export default CreatePost;
