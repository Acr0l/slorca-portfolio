// @ts-nocheck
import Head from "next/head";
import Link from "next/link";
import { Layout } from "../../layout/Layout";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Trm = () => {
  return (
    <>
      <Head>
        <title>TRM | Sebastian Lorca</title>
        <meta
          name="description"
          content="Sebastian loves Math, and he took an advanced course to improve himself and understand how simple concepts can be used to build complex theorems."
        />
      </Head>
      <Layout>
        <Section>
          <SectionTitle main>TRM</SectionTitle>
          <SectionText>
            I've always been a Math enthusiast, interested in problem solving
            and the theory behind it. This led me to participate in several math
            competitions and olympiads, many of them from the school, but also
            from other regional and national scope. After demonstrating my
            interest in the area, I took a course offered by the{" "}
            <a href="https://www.uc.cl" rel="noopener">
              Pontificia Universidad Católica de Chile
            </a>
            , called{" "}
            <a href="https://www.trm.mat.uc.cl" rel="noopener">
              Taller de Razonamiento Matemático
            </a>
            . This course, that lasted two years, allowed me to develop my
            logical analysis and reasoning skills. I had to face challenging
            problems that required strategic thinking and problem solving to get
            to the correct answer. The TRM gave me autonomy, teamwork,
            collaboration, knowledge-thirst, and perseverance.
            <br />I can say that I enjoyed the process and I value the results,
            specially the talks that taught me about the roles mathematicians
            play in the world.
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

export default Trm;
