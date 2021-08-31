import styles from "../styles/components/Footer.module.scss";
import Link from "next/link";
import logo from "../public/unvoid_logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logo} height={30} width={150} />
        </Link>
      </div>
      <p>
        Like the idea?{" "}
        <a target="_blank" href="https://linkedin.com/in/omkaark">
          Send me a message on linkedin!
        </a>
      </p>
    </div>
  );
};

export default Footer;
