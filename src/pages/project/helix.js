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
              During his last year of high school, Sebastian joined as a
              web developer for the <a href="https://helixbiojournal.com/">academic biology journal Helix</a>.
              <br />
              With the team he has devised the website where the journal
              has been able to upload their issues and voice.
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
              src={"/images/helix.png"}
              alt="Helix Logo, stylized H with sober colors."
            />
          </RightSection>
        </Section>
      </Layout>
    </>
  );
};

export default Kimm;
