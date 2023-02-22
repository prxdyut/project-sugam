import Head from "next/head";
import FeedContainer from "../../src/container/feed";
import BottomNavbar from "../../src/component/bottomNavbar";

export default function FeedPage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeedContainer />
      <BottomNavbar />
    </>
  );
}
