// @ts-nocheck
import Head from "next/head";
import Link from "next/link";
import { Layout } from "../../layout/Layout";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Lookation = () => {
  return (
    <>
      <Head>
        <title>Lookation | Sebastian Lorca</title>
        <meta
          name="description"
          content="Visually impaired people face great difficulties, and Sebastian sought to help them through technology to be able to locate themselves in new spaces and environments."
        />
      </Head>
      <Layout>
        <Section>
          <SectionTitle main>Lookation</SectionTitle>
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

export default Lookation;
