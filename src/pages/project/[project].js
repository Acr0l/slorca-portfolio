import Head from "next/head";
import Link from "next/link";
import { Layout } from "../../layout/Layout";

export default function ProjectDescription() {
  return (
    <>
      <Head>
        <title>Project {} | Sebastian Lorca</title>
      </Head>
      <Layout>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    </>
  );
}
