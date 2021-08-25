import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/MainLogin.module.scss'

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Join UNVOID</title>
        <meta name="description" content="News that gets you thinking big" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.loginContainer}>
        <button className={styles.login} onClick={() => router.push('/login')}>Log In</button>
        <button className={styles.signup} onClick={() => router.push('/signup')}>Sign Up</button>
        <button className={styles.google} onClick={() => router.push('/googauth')}>Log In with Google</button>
      </div>
    </div>
  )
}

export default Home
