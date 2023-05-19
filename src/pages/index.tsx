import { GetStaticProps } from "next";
import shuffle from "lodash.shuffle";

import { printful } from "../lib/printful-client";
import { formatVariantName } from "../lib/format-variant-name";
import { PrintfulProduct } from "../types";

import bestSellers from "./best_sellers.json";
import WomenData from "./women.json";
import InstagramData from "./instagram.json";
import data from "./data.json";

import ProductGrid from "../components/ProductGrid";
import Carousel from "../components/CarouselMulti";
import { useState } from "react";
import Head from "next/head";
import InstagramSlider from "../components/InstagramSlider";

type IndexPageProps = {
  products: PrintfulProduct[];
};

const IndexPage = ({ products }) => {
  const [images, setImages] = useState(data);

  // const IndexPage: React.FC<IndexPageProps> = ({ products }) => (
  return (
    <>
      <Head>
        <title>Omcub Shop Mens, Shirts, Hoodies, Bags &amp; more</title>
        <meta
          name="description"
          content="Omcub Shop Mens, Shirts, Hoodies, Bags &amp; more"
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

      <div className="hero mb-12"></div>
      <div className="new-arrivals py-12 bg-[#f9f9f9]">
        <div className="wrapper">
          <div className="title flex justify-between w-4/5 mx-auto">
            <div className="info relative">
              <h2 className="heading sm:text-[22px] font-serif font-bold">
                Best Sellers
              </h2>
              <div className="count text-[13px]">126 items</div>
            </div>
            <div className="button">
              <button className="font-bold text-xs border border-black  rounded px-5 py-2 hover:bg-black hover:text-white duration-200 hover:ease">
                SHOP ALL
              </button>
            </div>
          </div>
          <div className="carousel">
            <Carousel col={3} data={bestSellers} />
          </div>
        </div>
      </div>
      <div className="new-arrivals py-12 bg-[#f9f9f9]">
        <div className="wrapper">
          <div className="title flex justify-between w-4/5 mx-auto">
            <div className="info relative">
              <h2 className="heading sm:text-[22px] font-serif font-bold">
                Men&apos;s New Arrivals
              </h2>
              <div className="count text-[13px]">126 items</div>
            </div>
            <div className="button">
              <button className="font-bold text-xs border border-black  rounded px-5 py-2 hover:bg-black hover:text-white duration-200 hover:ease">
                SHOP ALL
              </button>
            </div>
          </div>
          <div className="carousel">
            <Carousel col={4} data={images} />
          </div>
        </div>
      </div>
      <div className="new-arrivals py-12 bg-[#f9f9f9]">
        <div className="wrapper">
          <div className="title flex justify-between w-4/5 mx-auto">
            <div className="info relative">
              <h2 className="heading sm:text-[22px] font-serif font-bold">
                Women&apos;s Collection
              </h2>
              <div className="count text-[13px]">126 items</div>
            </div>
            <div className="button">
              <button className="font-bold text-xs border border-black  rounded px-5 py-2 hover:bg-black hover:text-white duration-200 hover:ease">
                SHOP ALL
              </button>
            </div>
          </div>
          <div className="carousel">
            <Carousel col={3} data={WomenData} />
          </div>
        </div>
      </div>
      <div className="text-center pb-6 md:pb-12">
        {/* <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
        All Products
      </h1> */}
      </div>

      <div className="instagram-slider">
        <div className="title text-center py-6">
          <div className="heading ">
            <h1 className="font-semibold font-serif text-2xl">
              I<span className="text-lg">nstagram</span>
            </h1>
          </div>
          <a
            href="https://instagram.com/om_cub"
            target="new"
            className="sub text-xs pt-1 pb-3 w-max mx-auto border-b border-black"
          >
            @om_cub
          </a>
        </div>
        <InstagramSlider col={3} data={InstagramData} />
      </div>
      {/* 
      <ProductGrid products={products} /> */}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { result: productIds } = await printful.get("sync/products");
  const allProducts = await Promise.all(
    productIds.map(async ({ id }) => await printful.get(`sync/products/${id}`))
  );
  const products: PrintfulProduct[] = allProducts.map(
    ({ result: { sync_product, sync_variants } }) => ({
      ...sync_product,
      variants: sync_variants.map(({ name, ...variant }) => ({
        name: formatVariantName(name),
        ...variant,
      })),
    })
  );
  return {
    props: {
      products: shuffle(products),
    },
  };
};

export default IndexPage;
