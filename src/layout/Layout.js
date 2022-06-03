import Head from "next/head";
import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Sebastian Lorca | Community, Technology, Impact</title>
        {/*  Primary Meta Tags */}
        <title>Sebastian Lorca Portfolio | Community, Technology, Impact</title>
        <meta
          name="title"
          content="Sebastian Lorca Portfolio | Community, Technology, Impact"
        />
        <meta
          name="description"
          content="Sebastian Lorca is a software engineer based in Santiago, Chile. He is passionate about communicating his ideas through technology and friendly interfaces."
        />

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sebastianlorca.com/" />
        <meta
          property="og:title"
          content="Sebastian Lorca Portfolio | Community, Technology, Impact"
        />
        <meta
          property="og:description"
          content="Sebastian Lorca is a software engineer based in Santiago, Chile. He is passionate about communicating his ideas through technology and friendly interfaces."
        />
        <meta property="og:image" content="https://i.imgur.com/hInWP1N.jpg?1" />

        {/*  Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta
          property="twitter:title"
          content="Sebastian Lorca Portfolio | Community, Technology, Impact"
        />
        <meta
          property="twitter:description"
          content="Sebastian Lorca is a software engineer based in Santiago, Chile. He is passionate about communicating his ideas through technology and friendly interfaces."
        />
        <meta
          property="twitter:image"
          content="https://i.imgur.com/hInWP1N.jpg?1"
        />
      </Head>
      <Container>
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
};
