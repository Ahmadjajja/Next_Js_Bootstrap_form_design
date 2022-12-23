import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Read <Link href="/posts/first-page">firstPage!</Link>
          <br />
          Read <Link href="/posts/bootstrap-design">bootstrapDesign Page!</Link> 
        </h1>
      </main>
    </div>
  );
}
