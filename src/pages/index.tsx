import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import ListWidget from "../widgets/ListWidget";

type PageType = {
  host: string;
};

const Home: NextPage<PageType> = ({ host }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ListWidget variant={2} />
      </main>
    </div>
  );
};

export default Home;
