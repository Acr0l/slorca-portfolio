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

const DuamTalks = () => {
  return (
    <>
      <Head>
        <title>Duam Talks | Sebastian Lorca</title>
        <meta
          name="description"
          content="Sebastian found in his surroundings a dying passion for learning, so he started to work on a project that could help students find their learning purpose."
        />
      </Head>
      <Layout>
        <Section row>
          <RightSection>
            <SectionTitle main>Duam Talks</SectionTitle>
            <SectionText>
              During his last year of high school, Sebastian found in his
              surroundings a dying passion for learning, so he started to work
              on an event that could inspire those around him and help them find
              their passion, impacting the community.
              <br />
              This{" "}
              <a href="https://saintgasparcollege.cl/">school-wide event</a> was
              a way to bring together students from all walks of life, and to
              share their passions and ideas, inviting successful people
              (students and adults alike) to share their experiences and guide
              the community.
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
              src={"/images/4.png"}
              alt="Duam Talks Logo, stylized light bulb with outline of face in upper right corner."
            />
          </RightSection>
        </Section>
      </Layout>
    </>
  );
};

export default DuamTalks;
