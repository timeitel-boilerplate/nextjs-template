import Head from "next/head";
import { FC } from 'react';

const Home: FC<{}> = () => {
  return (
    <div>
      <Head>
        <title>My App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main></main>

      <footer></footer>
    </div>
  );
}

export default Home;