import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const staticBase =
    process.env.NEXT_PUBLIC_STATIC_EXPORT_BASE === "1" &&
    process.env.NEXT_PUBLIC_HTML_BASE_HREF;

  return (
    <Html lang='ar'>
      <Head>
        {staticBase ? (
          <base href={process.env.NEXT_PUBLIC_HTML_BASE_HREF} />
        ) : null}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
