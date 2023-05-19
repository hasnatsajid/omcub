import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import "tailwindcss/tailwind.css";
import "../styles/app.css";
import "../styles/scss/files.scss";

import { defaultSEO } from "../../next-seo.config";
import { WishlistProvider } from "../context/wishlist";
import Layout from "../components/Layout";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <WishlistProvider>
      <Layout setIsLoading={setIsLoading}>
        <DefaultSeo {...defaultSEO} />
        <Component
          {...pageProps}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
        />
      </Layout>
    </WishlistProvider>
  );
}

export default MyApp;
