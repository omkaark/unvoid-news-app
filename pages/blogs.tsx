import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Blogs.module.scss";
import { useRouter } from "next/router";

const Posts = [
  {
    author: "Omkaar",
    title: "This is the title",
    imgUrl:
      "https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    author: "Omkaar",
    title: "This is the title",
    imgUrl:
      "https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    author: "Omkaar",
    title: "This is the title",
    imgUrl:
      "https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    author: "Omkaar",
    title: "This is the title",
    imgUrl:
      "https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    author: "Omkaar",
    title: "This is the title",
    imgUrl:
      "https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

type Post = {
  author: string;
  imgUrl: string;
  title: string;
  blurb: string;
};

const Blogs: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="News that gets you thinking big" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.posts}>
        {Posts.map((post: Post, idx: number) => {
          return (
            <div key={idx} className={styles.blogPreviewContainer}>
              <img className={styles.image} src={post.imgUrl} alt=""></img>
              <div>
                <h2>{post.title}</h2>
                <h3>By {post.author}</h3>
                <p>{post.blurb}</p>
              </div>
            </div>
          );
        })}
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

export default Blogs;
