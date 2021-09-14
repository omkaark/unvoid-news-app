import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Blogs.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getSession, useSession, signOut } from "next-auth/client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Query } from "mongoose";

const Paginator = ({ postCount, currentPage }) => {
  const pages: number[] = [];
  for (let i = 0; i < Math.ceil(postCount / 6); i++) {
    pages.push(i + 1);
  }
  return (
    <div className={styles.paginator}>
      <a
        href={
          currentPage - 1 >= 1
            ? `/blogs?page=${currentPage - 1}`
            : `/blogs?page=1`
        }
      >
        {"<"}
      </a>
      {pages.map((page) => (
        <a
          className={currentPage == page ? styles.currentPage : ""}
          href={`/blogs?page=${page}`}
        >
          {page}
        </a>
      ))}
      <a
        href={
          currentPage + 1 > pages.length
            ? `/blogs?page=${pages.length}`
            : `/blogs?page=${currentPage + 1}`
        }
      >
        {">"}
      </a>
    </div>
  );
};

/* @ts-ignore */
const Blogs: NextPage = ({ posts, postCount }) => {
  const router = useRouter();
  const [session, loading] = useSession();
  const [navbarOption, setNavbarOption] = useState("blogs");
  useEffect(() => {
    router.query.page === null ||
    router.query.page === undefined ||
    // @ts-ignore
    router.query.page < 1
      ? router.push(
          {
            pathname: "/blogs",
            query: { page: 1 },
          },
          undefined,
          { shallow: true }
        )
      : null;
  }, []);
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
              <Link href={`/blog/${post._id}`}>
                <div className={styles.postCard} key={idx}>
                  <img className={styles.previewImage} src={post.imgUrl} />
                  <div className={styles.contentArea}>
                    <h2>{post.title}</h2>
                    <h3>By {post.author}</h3>
                    <p>{post.content.substring(0, 130)}...</p>
                  </div>
                  <div className={styles.tags}>
                    {post.tags?.map((tag: String, idx) => (
                      <div key={idx} className={styles.tag}>
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))
          : ""}
      </div>
      <Paginator
        postCount={postCount}
        currentPage={parseInt(router.query.page as string) || 1}
      />
      <Footer />
    </div>
  );
};

export async function getServerSideProps(context) {
  let res: any = 0;
  if (context.query.page !== undefined) {
    res = await fetch(`/api/blogs?page=${context.query.page}`);
  } else {
    res = await fetch(`/api/blogs?page=1`);
  }
  const data = await res.json();
  return {
    props: {
      session: await getSession(context),
      postCount: data.count,
      posts: data.posts,
    },
  };
}

export default Blogs;
