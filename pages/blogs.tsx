import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Blogs.module.scss";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getSession, useSession, signOut } from "next-auth/client";

/* @ts-ignore */
const Blogs: NextPage = ({ posts }) => {
  const router = useRouter();
  const [session, loading] = useSession();
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
      <div className={styles.posts}>
        {session && (
          <>
            Signed in as {/* @ts-ignore */}
            {(session.user.name as String) || "Who"} <br />
            <button onClick={() => signOut()}>Sign out</button>
          </>
        )}
        {posts
          ? posts.map((post, idx: number) => {
              return (
                <div key={idx} className={styles.blogPreviewContainer}>
                  <img className={styles.image} src={post.imgUrl} alt=""></img>
                  <div>
                    <h2>{post.title}</h2>
                    <h3>By {post.author}</h3>
                    <p>{post.content.substring(0, 400)}...</p>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
      <div className={styles.createPostSection}>
        <button
          onClick={(e) => {
            router.push("/create");
            e.preventDefault();
          }}
        >
          Create Post
        </button>
      </div>
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
