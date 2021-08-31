import styles from "../styles/components/Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/unvoid_logo.png";
import createBlogIcon from "../static/create_blog_icon.svg";
import viewBlogsIcon from "../static/view_blogs_icon.svg";

const Navbar = ({ session, navbarOption, setNavbarOption }) => {
  if (session === null) {
    // Not logged in
    return (
      <div style={{ position: "fixed", top: "0px" }} className={styles.navbar}>
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
    );
  }
  // Logged in
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <Image src={logo} height={30} width={150} />
      </Link>
      <div className={styles.loggedInOptions}>
        <div
          className={styles.option}
          onClick={() => setNavbarOption("viewBlogs")}
        >
          <Image
            className={styles.optionImage}
            src={createBlogIcon}
            width={30}
            height={30}
          />
          <p>View Blogs</p>
        </div>
        <div
          className={styles.option}
          onClick={() => setNavbarOption("createPost")}
        >
          <Image className={styles.optionImage} src={viewBlogsIcon} />
          <p>Create Post</p>
        </div>
        <div
          className={styles.option}
          onClick={() => setNavbarOption("account")}
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
  );
};

export default Navbar;
