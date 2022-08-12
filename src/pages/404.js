import Head from "next/head";
import React from "react";
import { Layout } from "../layout/Layout";
import { Section, SectionTitle } from "../styles/GlobalComponents";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 | Sebastian Lorca</title>
      </Head>
      <Layout>
        <Section>
          <SectionTitle main center>
            404
          </SectionTitle>
          <div>
            <p>Page not found</p>
          </div>
        </Section>
      </Layout>
    </>
  );
};

export default Custom404;
