import Head from "next/head";
import React from "react";
import Theme from "../styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/*  Primary Meta Tags */}
        <title>Sebastian Lorca Portfolio | Community, Technology, Impact</title>
        <meta
          name="title"
          content="Sebastian Lorca Portfolio | Community, Technology, Impact"
        />
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="Sebastian, Lorca, Portfolio, Community, Technology, Impact"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="revised" content="Sebastian Lorca, 2022-08-16" />
        <meta name="author" content="Sebastian Lorca" />

        <meta
          name="description"
          content="Sebastian Lorca is a high school student based in Santiago, Chile. He is passionate about communicating his ideas through technology and leadership."
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
          content="Sebastian Lorca is a high school student based in Santiago, Chile. He is passionate about communicating his ideas through technology and leadership."
        />
        <meta
          property="og:image"
          content="https://sebastianlorca.com/images/icons/sl.png"
        />

        {/*  Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta
          property="twitter:title"
          content="Sebastian Lorca Portfolio | Community, Technology, Impact"
        />
        <meta
          property="twitter:description"
          content="Sebastian Lorca is a high school student based in Santiago, Chile. He is passionate about communicating his ideas through technology and leadership."
        />
        <meta
          property="twitter:image"
          content="https://i.imgur.com/hInWP1N.jpg?1"
        />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
