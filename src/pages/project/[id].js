import Head from "next/head";
import Link from "next/link";
import { projects } from "../../constants/constants";
import { Layout } from "../../layout/Layout";

export async function getStaticPaths() {
  const paths = projects.map((projectO) => ({
    params: { 
      id: projectO.id.toString(),
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      projectData: projects[params.id],
    }
  }
}

export default function ProjectDescription({ projectData }) {
  return (
    <>
      <Head>
        <title>Project {projectData.title} | Sebastian Lorca</title>
      </Head>
      <Layout>
        <h1>{projectData.title}</h1>
        <p>{projectData.text}</p>
        <br/>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    </>
  );
}
