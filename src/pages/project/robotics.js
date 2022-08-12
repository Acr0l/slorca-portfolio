// @ts-nocheck
import Head from "next/head";
import Link from "next/link";
import { Layout } from "../../layout/Layout";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Robotics = () => {
  return (
    <>
      <Head>
        <title>Robotics | Sebastian Lorca</title>
      </Head>
      <Layout>
        <Section>
          <SectionTitle>Robotics</SectionTitle>
          <SectionText>
            For seven years I participated in a{" "}
            <a href="https://neoeduca.cl">robotics workshop</a> (4th grade until
            11th grade), starting with a introduction to robotics and the basics
            of programming. After that I prototyped robots and familiarized
            myself with 3D design and programming, starting to participate in
            several regional and national competitions. I've also participated
            in a Science and Innovation Fair with{" "}
            <a href="/projects/lookation" rel="noopener">
              Lookation
            </a>{" "}
            winning the best technological regional award.
          </SectionText>
          <br />
          <h2>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </h2>
        </Section>
      </Layout>
    </>
  );
};

export default Robotics;
