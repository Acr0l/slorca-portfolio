// @ts-nocheck
import Head from "next/head";
import Link from "next/link";
import { Layout } from "../../layout/Layout";

const Robotics = () => {
  return (
    <>
      <Head>
        <title>Robotics | Sebastian Lorca</title>
      </Head>
      <Layout>
        <h1>Robotics</h1>
        <p>How it all started...</p>
        <br/>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    </>
  )
}

export default Robotics