import { GetStaticProps } from "next";
import { printful } from "../../lib/printful-client";

import Carousel from "../../components/Carousel";
import { useEffect, useState } from "react";

function Product({ productData }) {
  const { product, variants } = productData;
  const initialVariant = variants[0];
  const [activeVariant, setactiveVariant] = useState({ ...initialVariant });
  const [variantToggle, setVariantToggle] = useState(false);
  const [uniqueColorObjects, setUniqueColorObjects] = useState([]);
  const initialVariantSizes = variants.filter(
    (variant) => variant.color === activeVariant.color
  );
  const [sizeVariants, setSizeVariants] = useState([...initialVariantSizes]);

  useEffect(() => {
    setactiveVariant({ ...initialVariant });

    setUniqueColorObjects(
      variants.filter((web) => {
        if (map.get(web.color_code)) {
          return false;
        }
        map.set(web.color_code, web);
        return true;
      })
    );
  }, []);

  useEffect(() => {
    setSizeVariants(
      variants.filter((variant) => variant.color === activeVariant.color)
    );
  }, [variantToggle]);

  const uniqueColors = Array.from(
    new Set(variants.map((item) => item.color_code))
  );

  const variantSizes = variants.filter(
    (item) => item.color_code === initialVariant.color_code
  );

  const variantColorToggle = (e) => {
    setactiveVariant(
      variants.filter((variant) => variant.id === +e.target.dataset.id)[0]
    );

    setVariantToggle((prev) => !prev);
  };

  const variantSizeToggle = (e) => {
    // (e.target.dataset.id);
    setactiveVariant(
      variants.filter((variant) => variant.id === +e.target.dataset.id)[0]
    );

    setVariantToggle((prev) => !prev);
  };

  var map = new Map();

  // const variantImages = variants.map((variant) => variant.image);

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
      <div className="product bg-[#f9f9f9]">
        <div className="wrapper lg:flex w-4/5 m-auto ">
          <div className="carousel flex-1">
            <Carousel images={variants} />
          </div>
          <div className="product_form 2xl:w-3/12 md:w-2/6">
            <div className="title flex justify-between pt-6 pb-2 items-start">
              <div className="heading font-serif text-[22px] w-3/4">
                {product.title}
              </div>
              <div className="price text-xl font-bold">
                ${activeVariant.price}
              </div>
            </div>
            <div className="info text-[13px] border-b border-gray-300 pb-4">
              <div className="category text-[#736b67]">{product.type_name}</div>
              <div className="rating"></div>
            </div>
            <div className="variants my-6">
              <div className="tile text-[13px] text-[#736b67]">
                {activeVariant.color}
              </div>
              <div className="variant_catalogue grid grid-cols-4 gap-2 py-4">
                {uniqueColorObjects &&
                  uniqueColorObjects.map(({ color_code, id }) => (
                    <div
                      key={id}
                      data-id={id}
                      className={`w-[70px] h-[70px] item mr-[7px] mb-[7px] border ${
                        activeVariant.color_code === color_code
                          ? "border-2 border-black"
                          : ""
                      }`}
                      style={{ backgroundColor: `${color_code}` }}
                      onClick={variantColorToggle}
                    ></div>
                  ))}

                {/* <div className="item mr-[7px] mb-[7px] border border-2 border-black">
                  <img src="/images/variants/shirt1.png" alt="Shirt 1" />
                </div> */}
              </div>
            </div>
            <div className="sizes">
              <div className="title flex justify-between">
                <div className="heading">Select Size</div>
                <div className="guide"></div>
              </div>

              <div className="size-list flex  flex-wrap">
                {sizeVariants &&
                  sizeVariants.map(({ size, id }) => (
                    <div
                      key={id}
                      data-id={id}
                      className={`box cursor-pointer border-2 px-4 py-3 text-[13px] ${
                        size === activeVariant.size ? "active" : ""
                      }`}
                      onClick={variantSizeToggle}
                    >
                      {size}
                    </div>
                  ))}
                {/* {variantSizes &&
                  variantSizes.map(({ size, id }) => (
                    <div
                      key={id}
                      className={`box cursor-pointer border-2 px-4 py-3 text-[13px] ${
                        size === initialVariant.size ? "active" : ""
                      }`}
                      onClick={variantSizeToggle}
                    >
                      {size}
                    </div>
                  ))} */}
              </div>
            </div>
            <div className="action_btn my-4">
              <button
                type="submit"
                className="bg-[#f15a31] hover:bg-black text-white w-full py-3 duration-200 hover:ease-out"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  // const { result: productIds } = await printful.get("sync/products");
  // const { result } = await printful.get(`/products/362`);
  const response = await fetch(
    `https://api.printful.com/products/${context.params.id}`
  );
  const { result } = await response.json();
  // console.log(jsonData);

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
      productData: result,
      // products: shuffle(products),
    },
  };
};

export default Product;
