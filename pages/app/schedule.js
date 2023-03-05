import Head from "next/head";
import Container from "../../src/container/schedule";
import BottomNavbar from "../../src/component/bottomNavbar";
import TopNavbar from "../../src/component/topNavbar";

export default function SchedulePage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNavbar />
      <Container />
      <BottomNavbar />
    </>
  );
}
