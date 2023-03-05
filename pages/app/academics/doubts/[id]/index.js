import Head from "next/head";
import Container from "../../../../../src/container/academics/doubtsView";
import BottomNavbar from "../../../../../src/component/bottomNavbar";
import TopNavbar from "../../../../../src/component/topNavbar";
import { useRouter } from "next/router";

export default function AcademicsPage() {
  const router = useRouter();
  const {id} = router.query;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNavbar variant='secondary' title={'Doubt : ' + id} />
      <Container page={0} />
      <BottomNavbar />
    </>
  );
}
