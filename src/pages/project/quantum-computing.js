// @ts-nocheck
import Head from "next/head";
import Link from "next/link";
import {
  LeftSection,
  RightSection
} from "../../components/Hero/HeroStyles";
import { Layout } from "../../layout/Layout";
import {
  Section,
  SectionText,
  SectionTitle
} from "../../styles/GlobalComponents";

const Quantum = () => {
  return (
    <>
      <Head>
        <title>Quantum Computing | Sebastian Lorca</title>
      </Head>
      <Layout>
        <Section row>
          <LeftSection>
            <SectionTitle main center>
              Quantum Computing
            </SectionTitle>
            <SectionText>
              The course{" "}
              <a
                href="https://verified.cv/en/verify/82579078660284"
                rel="noopener"
              >
                High School Introduction to Quantum Computing
              </a>
              , offered by Qubit by Qubit was a unique opportunity for me to
              learn more about quantum mechanics, python, and{" "}
              <a href="https://qiskit.org/" rel="noopener">
                Qiskit
              </a>{" "}
              (an IBM developed library to communicate with quantum computers).
              <br />
              <br />I started without any prior knowledge of quantum mechanics,
              and little knowledge about Python, but I was able to learn a lot
              about the subject in the year that I took the course.
              <br />
              <br />
              The course guided us through the virtual representation of quantum
              states, and the quantum circuit. The TAs included content of the
              library while Dr. Akshay was the mains instructor who broke down
              the concepts and explained them in a simple manner.
            </SectionText>
            <h2>
              <Link href="/">
                <a>Back to home</a>
              </Link>
            </h2>
          </LeftSection>
          <RightSection>
            <img
              style={{
                borderRadius: "9%",
                width: "50vh",
                height: "100%",
                objectFit: "contain",
                overflow: "hidden",
              }}
              src={"/images/qc/qc_notebook.PNG"}
              alt="Quantum Computer Jupyter Notebook code"
            />
          </RightSection>
        </Section>
      </Layout>
    </>
  );
};

export default Quantum;
