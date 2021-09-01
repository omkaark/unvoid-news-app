import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/CreatePost.module.scss";
import { useRouter } from "next/router";
import { getSession, useSession } from "next-auth/client";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Footer from "../components/Footer";
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
    let tags = e.target.tags.value.split(",");
    let tagWords: String[] = [];
    for (let i = 0; i < Math.min(3, tags.length); i++) {
      tags[i] = tags[i].trim();
      tagWords = tags[i].split(" ");
      for (let j = 0; j < tagWords.length; j++) {
        tagWords[j] = tagWords[j].trim();
        tagWords[j] =
          tagWords[j].slice(0, 1).toUpperCase() + tagWords[j].substring(1);
      }
      tags[i] = tagWords.join(" ");
    }
    tags.length = 3;
    const res = await fetch("/api/create", {
      body: JSON.stringify({
        title: e.target.title.value,
        imgUrl: e.target.imgUrl.value,
        author: session?.user?.name,
        content: e.target.content.value,
        tags: tags,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    router.push("/blogs");
  };
  const [navbarOption, setNavbarOption] = useState("create");
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Post</title>
        <meta name="description" content="News that gets you thinking big" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar
        session={session}
        navbarOption={navbarOption}
        setNavbarOption={setNavbarOption}
      />
      <form
        autoComplete="off"
        onSubmit={(e) => handleCreate(e)}
        className={styles.createPost}
      >
        {/* method="POST" action="/api/create" */}
        <input
          className={styles.formTitle}
          name="title"
          type="text"
          placeholder="Click here to enter title"
        />
        <input
          className={styles.formImgUrl}
          name="imgUrl"
          type="text"
          placeholder="Click here to enter a hero Image URL"
        />
        <textarea
          className={styles.formContent}
          name="content"
          placeholder="Click here to enter content"
        ></textarea>
        <input
          className={styles.formTags}
          name="tags"
          type="text"
          placeholder="Enter tags (Max: 3) and separate by , (a comma)"
        />
        <button className={styles.formButton}>Post</button>
      </form>
      <Footer />
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
