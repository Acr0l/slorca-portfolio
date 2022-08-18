// @ts-nocheck
import Head from "next/head";
import Link from "next/link";
import { RightSection } from "../../components/Hero/HeroStyles";
import { Layout } from "../../layout/Layout";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Kimm = () => {
  return (
    <>
      <Head>
        <title>Kimm Education | Sebastian Lorca</title>
        <meta
          name="description"
          content="Sebastian found in his surroundings a dying passion for learning, so he started to work on a project that could help students find their learning purpose."
        />
      </Head>
      <Layout>
        <Section row>
          <RightSection>
            <SectionTitle main>Kimm Education</SectionTitle>
            <SectionText>
              During his last year of high school, Sebastian found in his
              surroundings a dying passion for learning, so he started to work
              on a project that could help students find their learning purpose.
              <br />
              Kimm Education seeks to empower students to find their learning
              purpose, and to create schedules that could help them reach their
              goals, creating healthy habits and meeting new people interested
              in learning the same way.
            </SectionText>
            <br />
            <h2>
              <Link href="/#projects">
                <a>Back to home</a>
              </Link>
            </h2>
          </RightSection>
          <RightSection>
            <img
              style={{
                width: "20em",
                height: "100%",
                objectFit: "contain",
                overflow: "hidden",
              }}
              src={"/images/kimm.png"}
              alt="Kimm Education Logo, stylized K with green and blu-ish colors."
            />
          </RightSection>
        </Section>
      </Layout>
    </>
  );
};

export default Kimm;
