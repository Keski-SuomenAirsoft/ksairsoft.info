import type { NextPage } from "next";
import Head from "next/head";
import { Heading, Paragraph } from "theme-ui";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>KS Airsoft</title>
        <meta
          name="description"
          content="Airsoft association in central finland"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading>Welcome to KS Airsoft's new website</Heading>

      <Paragraph>
        Get started by editing <br />
        <code>pages/index.tsx</code>
      </Paragraph>
    </>
  );
};

export default Home;
