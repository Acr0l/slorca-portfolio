// @ts-nocheck
import Head from "next/head";
import Link from "next/link";
import { Layout } from "../../layout/Layout";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const PersonalBlog = () => {
  return (
    <>
      <Head>
        <title>Personal Blog | Sebastian Lorca</title>
        <meta
          name="description"
          content="Communication is the key to a successful relationship. Sebastian has a passion for writing and has started a personal blog to share his thoughts and experiences."
        />
      </Head>
      <Layout>
        <Section>
          <SectionTitle main>Personal Blog</SectionTitle>
          <SectionText>
            This section is still under construction, sorry for the
            inconvenience.
          </SectionText>
          <br />
          <h2>
            <Link href="/#projects">
              <a>Back to home</a>
            </Link>
          </h2>
        </Section>
      </Layout>
    </>
  );
};

export default PersonalBlog;
