import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link
            rel="stylesheet"
            href="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest"></link>
        </Head>
        <body className="antialiased">
          <Main />
          <NextScript />
          <script
            async
            src="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js"
          ></script>
          <div
            id="snipcart"
            data-config-modal-style="side"
            data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY}
            hidden
          >
            <address-fields section="top">
              <div className="snipcart-form__field">
                <snipcart-label for="phone">Phone number</snipcart-label>
                <snipcart-input name="phone"></snipcart-input>
              </div>
            </address-fields>
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
