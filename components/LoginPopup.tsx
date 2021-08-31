import styles from "../styles/components/LoginPopup.module.scss";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import CancelIcon from "@material-ui/icons/Cancel";

const LoginPopup = ({ navbarOption, setNavbarOption }) => {
  if (navbarOption !== "login") {
    return <></>;
  }
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.popup}>
          <p>
            We take your privacy seriously... That’s why we don’t take your
            password!
          </p>
          <div
            style={{ backgroundColor: "#4285F4", color: "#fff" }}
            className={styles["google-btn"]}
            onClick={() =>
              signIn("google", { callbackUrl: process.env.NEXTAUTH_URL })
            }
          >
            <div className={styles["google-icon-wrapper"]}>
              <img
                className={styles["google-icon-svg"]}
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              />
            </div>
            <p className={styles["btn-text"]}>
              <b>Log in with Google</b>
            </p>
          </div>

          <div
            className={styles["google-btn"]}
            style={{ backgroundColor: "#fff" }}
            onClick={() =>
              signIn("google", { callbackUrl: process.env.NEXTAUTH_URL })
            }
          >
            <div className={styles["google-icon-wrapper"]}>
              <img
                className={styles["google-icon-svg"]}
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              />
            </div>
            <p className={styles["btn-text"]}>
              <b>Sign up with Google</b>
            </p>
          </div>
          <div
            className={styles["google-btn"]}
            style={{ backgroundColor: "#000", color: "#fff" }}
            onClick={() => setNavbarOption("")}
          >
            <p className={styles["btn-text"]}>
              {/*<CancelIcon />*/}
              <b>Cancel</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPopup;
