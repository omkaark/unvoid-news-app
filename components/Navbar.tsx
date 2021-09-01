import styles from "../styles/components/Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/unvoid_logo.png";
import createBlogIcon from "../static/create_blog_icon.svg";
import viewBlogsIcon from "../static/view_blogs_icon.svg";
import { useRouter } from "next/router";
import { signOut } from "next-auth/client";

const Navbar = ({ session, navbarOption, setNavbarOption }) => {
  const router = useRouter();
  if (session === null) {
    // Not logged in
    return (
      <>
        <div className={styles.navbarShell}></div>
        <div className={styles.navbar}>
          <Link href="/">
            <Image src={logo} height={30} width={150} />
          </Link>
          <div className={styles.notLoggedInOptions}>
            <button
              className={styles.login}
              onClick={() => setNavbarOption("login")}
            >
              Log In
            </button>
            <button
              className={styles.signup}
              onClick={() => setNavbarOption("login")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </>
    );
  }
  // Logged in
  return (
    <>
      <div className={styles.navbarShell}></div>
      <div className={styles.navbar}>
        <Link href="/">
          <Image src={logo} height={30} width={150} />
        </Link>
        <div className={styles.loggedInOptions}>
          <div
            className={`${styles.option} ${
              navbarOption === "blogs" ? styles.optionActive : ""
            }`}
            onClick={() => {
              setNavbarOption("blogs");
              router.push("/blogs");
            }}
          >
            <Image
              className={styles.optionImage}
              src={viewBlogsIcon}
              width={30}
              height={30}
            />
            <p>View Blogs</p>
          </div>
          <div
            className={`${styles.option} ${
              navbarOption === "create" ? styles.optionActive : ""
            }`}
            onClick={() => {
              setNavbarOption("create");
              router.push("/create");
            }}
          >
            <Image className={styles.optionImage} src={createBlogIcon} />
            <p>Create Post</p>
          </div>
          <div
            className={`${styles.option} ${
              navbarOption === "profile" ? styles.optionActive : ""
            }`}
            onClick={() => {
              setNavbarOption("profile");
              // router.push("/profile");
              signOut();
            }}
          >
            <Image
              className={styles.profileImage}
              width={30}
              height={30}
              src={session.user.image}
            />
            <p>Account</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
