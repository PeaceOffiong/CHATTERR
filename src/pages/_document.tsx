import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en">
      <Head ><script defer src="https://smtpjs.com/v3/smtp.js"></script>
        <script src="https://cdn.tailwindcss.com" async></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

