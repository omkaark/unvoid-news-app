import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/BlogArticle.module.scss";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";

//@ts-ignore
const BlogArticle: NextPage = ({ post }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content="News that gets you thinking big" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <img src={post.imgUrl} />
      <h2>{post.title}</h2>
      <h3>By {post.author}</h3>
      <p>{post.title}</p>
    </div>
  );
};

BlogArticle.getInitialProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/blog/" + context.query.id);
  const data = await res.json();
  return { post: data };
};

export default BlogArticle;
