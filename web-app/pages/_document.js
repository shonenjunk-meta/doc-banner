// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css?family=Poppins:400,700&display=optional'
          rel='stylesheet'
        ></link>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
