import { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Nasa App" />
      </Head>
      <body className="bg-zinc-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
