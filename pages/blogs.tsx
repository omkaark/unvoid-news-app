import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Blogs.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getSession, useSession, signOut } from "next-auth/client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* @ts-ignore */
const Blogs: NextPage = ({ posts }) => {
  const router = useRouter();
  const [session, loading] = useSession();
  const [navbarOption, setNavbarOption] = useState("");
  useEffect(() => {
    if (session === null) {
      router.push("/");
    }
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="News that gets you thinking big" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar
        session={session}
        navbarOption={navbarOption}
        setNavbarOption={setNavbarOption}
      />
      <h1>All Blogs</h1>
      <div className={styles.blogPreviewsContainer}>
        {session && posts
          ? posts.map((post, idx) => (
              <div className={styles.postCard} key={idx}>
                <img className={styles.previewImage} src={post.imgUrl} />
                <div className={styles.contentArea}>
                  <h2>{post.title}</h2>
                  <h3>By {post.author}</h3>
                  <p>{post.content.substring(0, 180)}...</p>
                </div>
                {/*<div className={styles.tags}>
                  {post.tags?.map((tag, idx) => (
                    <div key={idx} className={styles.tag}>
                      {tag}
                    </div>
                  ))}
                  </div>*/}
                <div className={styles.tags}>
                  <div className={styles.tag}>Computer Science</div>
                  <div className={styles.tag}>Technology</div>
                  <div className={styles.tag}>ED Tech</div>
                </div>
              </div>
            ))
          : ""}
      </div>
      <Footer />
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api/blogs");
  const posts = await res.json();
  return {
    props: {
      session: await getSession(context),
      posts: posts,
    },
  };
}

export default Blogs;
