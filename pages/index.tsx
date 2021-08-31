import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Homepage.module.scss";
import { signIn, signOut, useSession } from "next-auth/client";
import { useEffect, useRef } from "react";
import { getSession } from "next-auth/client";
import React from "react";
import Lottie from "react-lottie-player";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginPopup from "../components/LoginPopup";

import aboveTheFoldImage from "../static/above_the_fold_image.svg";
import section1Image from "../static/section1_image.svg";
import section2Image from "../static/section2_image.svg";
import section3Image from "../static/section3_image.svg";
import sec1AnimData from "../static/HomePageSection1SVGAnim.json";
import sec2AnimData from "../static/HomePageSection2SVGAnim.json";
import sec3AnimData from "../static/HomePageSection3SVGAnim.json";
import { useState } from "react";

const Home: NextPage = () => {
  const router = useRouter();
  const [session, loading] = useSession();
  const [login, setLogin] = useState(false);
  const [navbarOption, setNavbarOption] = useState("");
  return (
    <>
      {navbarOption === "login" ? (
        <LoginPopup
          navbarOption={navbarOption}
          setNavbarOption={setNavbarOption}
        />
      ) : (
        ""
      )}
      <Navbar
        navbarOption={navbarOption}
        setNavbarOption={setNavbarOption}
        session={session}
      />
      <div className={styles.container}>
        <Head>
          <title>Join UNVOID</title>
          <meta name="description" content="News that gets you thinking big" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <div className={styles.foldContainer}>
          <div className={styles.aboveTheFold}>
            <div className={styles.leftSideFold}>
              <h1>Passionate about Tech, VCs and Startups?</h1>
              <button
                className={`${styles["CTAButton"]} ${styles["CTAButtonFold"]}`}
              >
                Leverage Your Passion
              </button>
            </div>
            <div className={styles.rightSideFold}>
              <Image
                className={styles.rightSideFoldImage}
                src={aboveTheFoldImage}
                alt="Passion for technology"
              />
            </div>
          </div>
        </div>
        <div className={styles.yellowContainer}>
          <div className={styles.section1}>
            <div className={styles.leftSide}>
              <Image
                className={styles.sideImage}
                src={section1Image}
                alt="Passion for technology"
              />
            </div>
            <div className={styles.rightSide}>
              <h2>Break into tech and VC by proving exceptional knowledge</h2>
              <button
                className={`${styles["CTAButton"]} ${styles["CTAButton1"]}`}
              >
                Start writing now!
              </button>
            </div>
          </div>
        </div>
        <div className={styles.blackContainer}>
          <div className={styles.section2}>
            <div className={styles.leftSide}>
              <h2>Impress industry professionals with your blogs</h2>
              <button
                className={`${styles["CTAButton"]} ${styles["CTAButton2"]}`}
              >
                Read impressive blogs!
              </button>
            </div>
            <div className={styles.rightSide}>
              <Image
                className={styles.sideImage}
                src={section2Image}
                alt="Passion for technology"
              />
            </div>
          </div>
        </div>
        <div className={styles.yellowContainer}>
          <div className={styles.section3}>
            <div className={styles.leftSide}>
              <Image
                className={styles.sideImage}
                src={section3Image}
                alt="Passion for technology"
              />
            </div>
            <div className={styles.rightSide}>
              <h2>Network with like-minded individuals and learn more</h2>
              <button
                className={`${styles["CTAButton"]} ${styles["CTAButton"]}`}
              >
                Start networking now!
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}

export default Home;
