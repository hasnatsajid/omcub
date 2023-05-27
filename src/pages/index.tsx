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
import Link from "next/link";

type IndexPageProps = {
  products: PrintfulProduct[];
};

const IndexPage = ({ products, men, women }) => {
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
              <div className="count text-[13px]">{products.length} items</div>
            </div>
            <div className="button">
              <Link href="/collections/188">
                <button className="font-bold text-xs border border-black  rounded px-5 py-2 hover:bg-black hover:text-white duration-200 hover:ease">
                  SHOP ALL
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel">
            <Carousel col={3} data={products} />
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
              <div className="count text-[13px]">{men.length} items</div>
            </div>
            <div className="button">
              <Link href="/collections/123">
                <button className="font-bold text-xs border border-black  rounded px-5 py-2 hover:bg-black hover:text-white duration-200 hover:ease">
                  SHOP ALL
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel">
            <Carousel col={4} data={men} />
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
              <div className="count text-[13px]">{women.length} items</div>
            </div>
            <div className="button">
              <Link href="/collections/227">
                <button className="font-bold text-xs border border-black  rounded px-5 py-2 hover:bg-black hover:text-white duration-200 hover:ease">
                  SHOP ALL
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel">
            <Carousel col={3} data={women} />
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
  const newSellersResponse = await fetch(
    `https://api.printful.com/store/products?category_id=188`,
    {
      headers: {
        Authorization: "Bearer WMrkZspe4PkOWW3Jy76VVWdJ6fkagMd9XOst78mI",
      },
    }
  );
  const products = await newSellersResponse.json();

  const menArrivalsResponse = await fetch(
    `https://api.printful.com/store/products?category_id=188`,
    {
      headers: {
        Authorization: "Bearer WMrkZspe4PkOWW3Jy76VVWdJ6fkagMd9XOst78mI",
      },
    }
  );
  const men = await menArrivalsResponse.json();

  const womenArrivalsResponse = await fetch(
    `https://api.printful.com/store/products?category_id=188`,
    {
      headers: {
        Authorization: "Bearer WMrkZspe4PkOWW3Jy76VVWdJ6fkagMd9XOst78mI",
      },
    }
  );
  const women = await womenArrivalsResponse.json();

  return {
    props: {
      products: products.result,
      men: men.result,
      women: women.result,
    },
  };
};

export default IndexPage;
