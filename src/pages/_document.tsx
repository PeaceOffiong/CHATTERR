import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en">
      <Head ><script src="https://smtpjs.com/v3/smtp.js"></script></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

// import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

// class MyDocument extends Document {
//   static async getInitialProps(ctx: DocumentContext) {
//     const initialProps = await Document.getInitialProps(ctx);
//     return { ...initialProps };
//   }

//   render() {
//     return (
//       <Html lang="en">
//         <Head>
//           <script src="https://smtpjs.com/v3/smtp.js" />
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

// export default MyDocument;

