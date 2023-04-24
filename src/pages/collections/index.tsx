import { GetStaticProps } from "next";
// import shuffle from "lodash.shuffle";

import { printful } from "../../lib/printful-client";
import { formatVariantName } from "../../lib/format-variant-name";
import { PrintfulProduct } from "../../types";

import ProductGrid from "../../components/ProductGrid";

function Collections({ products }) {
  console.log(products);
  return (
    <>
      <div className="scrollbar border-b border-t border-gray-200">
        <div className="px-4">
          <div className="flex py-4 overflow-scroll">
            <div className="category active">
              <button className="text-white bg-[#f15a31] px-4 py-2 text-sm rounded mr-2 w-max">
                Shop All
              </button>
            </div>
            <div className="category">
              <button className="border border-[#d3c7c1] px-4 py-2 text-sm rounded mr-2 w-max">
                Short Sleeve
              </button>
            </div>
            <div className="category">
              <button className="border border-[#d3c7c1] px-4 py-2 text-sm rounded mr-2 w-max">
                Long Sleeve
              </button>
            </div>
            <div className="category">
              <button className="border border-[#d3c7c1] px-4 py-2 text-sm rounded mr-2 w-max">
                Sleeveless
              </button>
            </div>
            <div className="category">
              <button className="border border-[#d3c7c1] px-4 py-2 text-sm rounded mr-2 w-max">
                Tees
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="collection">
        <div className="main">
          <div className="wrapper mx-auto max-w-[90%]">
            <div className="title text-center py-12">
              <div className="heading text-4xl">
                <h1 className="font-semibold">Shirts</h1>
              </div>
              <div className="sub text-xs text-[#77706c] py-1">
                There&apos;s a story in every stitch
              </div>
            </div>
            <div className="categories flex pb-6 border-b border-gray-200">
              <div className="category active">
                <button className="text-white bg-[#f15a31] px-4 py-2 text-sm rounded mr-2">
                  Shop All
                </button>
              </div>
              <div className="category">
                <button className="border border-[#d3c7c1] px-4 py-2 text-sm rounded mr-2">
                  Short Sleeve
                </button>
              </div>
              <div className="category">
                <button className="border border-[#d3c7c1] px-4 py-2 text-sm rounded mr-2">
                  Long Sleeve
                </button>
              </div>
            </div>

            <div className="filters my-6">
              {/* <button className="border border-black rounded-2xl px-4">
                Filters
              </button> */}
            </div>

            <div className="hidden catalogue grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
              <div className="product mb-6 px-6">
                <div className="product_container">
                  <div className="tile_note text-xs text-orange-400">
                    NEW ARRIVAL
                  </div>
                  <div className="image">
                    <img src="/images/shirt1.webp" alt="Shirt 1" />
                  </div>
                  <div className="info flex justify-between border-t border-gray-300 pt-3">
                    <div className="title text-base font-bold font-serif">
                      Bless Up Breathable Stretch Shirt
                    </div>
                    <div className="price">$89</div>
                  </div>
                  <div className="options text-xs py-1">Hinano Dark Navy</div>
                  <div className="category text-xs">Shirt</div>
                  <div className="rating"></div>
                </div>
              </div>
              <div className="product mb-6 px-6">
                <div className="product_container">
                  <div className="tile_note text-xs text-orange-400">
                    NEW ARRIVAL
                  </div>
                  <div className="image">
                    <img src="/images/shirt1.webp" alt="Shirt 1" />
                  </div>
                  <div className="info flex justify-between border-t border-gray-300 pt-3">
                    <div className="title text-base font-bold font-serif">
                      Bless Up Breathable Stretch Shirt
                    </div>
                    <div className="price">$89</div>
                  </div>
                  <div className="options text-xs py-1">Hinano Dark Navy</div>
                  <div className="category text-xs">Shirt</div>
                  <div className="rating"></div>
                </div>
              </div>
              <div className="product mb-6 px-6">
                <div className="product_container">
                  <div className="tile_note text-xs text-orange-400">
                    NEW ARRIVAL
                  </div>
                  <div className="image">
                    <img src="/images/shirt1.webp" alt="Shirt 1" />
                  </div>
                  <div className="info flex justify-between border-t border-gray-300 pt-3">
                    <div className="title text-base font-bold font-serif">
                      Bless Up Breathable Stretch Shirt
                    </div>
                    <div className="price">$89</div>
                  </div>
                  <div className="options text-xs py-1">Hinano Dark Navy</div>
                  <div className="category text-xs">Shirt</div>
                  <div className="rating"></div>
                </div>
              </div>
              <div className="product mb-6 px-6">
                <div className="product_container">
                  <div className="tile_note text-xs text-orange-400">
                    NEW ARRIVAL
                  </div>
                  <div className="image">
                    <img src="/images/shirt1.webp" alt="Shirt 1" />
                  </div>
                  <div className="info flex justify-between border-t border-gray-300 pt-3">
                    <div className="title text-base font-bold font-serif">
                      Bless Up Breathable Stretch Shirt
                    </div>
                    <div className="price">$89</div>
                  </div>
                  <div className="options text-xs py-1">Hinano Dark Navy</div>
                  <div className="category text-xs">Shirt</div>
                  <div className="rating"></div>
                </div>
              </div>
            </div>

            <ProductGrid products={products} />
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // const { result: productIds } = await printful.get("sync/products");
  const { result } = await printful.get("/products");
  // const { result } = await printful.get("/products");
  // const { result } = await printful.get("/products?category_id=32");
  // const allProducts = await Promise.all(
  //   productIds.map(async ({ id }) => await printful.get(`sync/products/${id}`))
  // );
  // const products: PrintfulProduct[] = allProducts.map(
  //   ({ result: { sync_product, sync_variants } }) => ({
  //     ...sync_product,
  //     variants: sync_variants.map(({ name, ...variant }) => ({
  //       name: formatVariantName(name),
  //       ...variant,
  //     })),
  //   })
  // );

  return {
    props: {
      products: result,
      // products: shuffle(products),
    },
  };
};

export default Collections;
