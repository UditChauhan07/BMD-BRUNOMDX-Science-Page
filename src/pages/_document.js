import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon-black.png" />
        <title>
          BrunoMD | Health and Wellness Products | Beauty Supplements
        </title>
        <meta
          name="description"
          content="Health and wellness products rooted in the heart of Italy, made from all-natural ingredients. Pharmaceutical grade supplements to fuel your future."
        />
        <meta
          property="og:image"
          content="https://cdn.shopify.com/s/files/1/0021/0573/7291/files/brunomdus-share-image.png?v=1697540514"
        />
        <meta property="og:image:type" content="image/png" />
        <link
          rel="stylesheet"
          href="https://cdn.shopify.com/s/files/1/0674/0518/5339/files/ivypresto.css?v=1695031279"
          as="style"
          onload="this.onload=null;this.rel='stylesheet'"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
