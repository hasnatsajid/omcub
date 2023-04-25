import { GetStaticProps } from "next";
import { printful } from "../../lib/printful-client";

import Carousel from "../../components/Carousel";

function Product({ productData }) {
  const { product, variants } = productData;
  // console.log(product, variants);

  const uniqueColors = Array.from(
    new Set(variants.map((item) => item.color_code))
  );
  console.log(uniqueColors);
  // console.log(uniqueColors);
  // const uniqueColorCodes = [
  //   ...new Set(variants.map((item) => item.color_code)),
  // ];
  // console.log(uniqueColors, uniqueColorCodes);

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
              <div className="price text-xl font-bold">$89</div>
            </div>
            <div className="info text-[13px] border-b border-gray-300 pb-4">
              <div className="category text-[#736b67]">{product.type_name}</div>
              <div className="rating"></div>
            </div>
            <div className="variants my-6">
              <div className="tile text-[13px] text-[#736b67]">
                Hinano Dark Navy
              </div>
              <div className="variant_catalogue grid grid-cols-4 gap-2 py-4">
                {uniqueColors &&
                  uniqueColors.map((color, i) => (
                    <div
                      key={i}
                      className={`w-[70px] h-[70px] item mr-[7px] mb-[7px] border border-2 border-black bg-\[${color}\]`}
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

              <div className="size-list flex justify-between">
                <div className="box active border-2 px-4 py-3 text-[13px]">
                  XS
                </div>
                <div className="box box border-2 px-4 py-3 text-[13px] w-fit">
                  S
                </div>
                <div className="box box border-2 px-4 py-3 text-[13px] w-fit">
                  M
                </div>
                <div className="box box border-2 px-4 py-3 text-[13px] w-fit">
                  L
                </div>
                <div className="box box border-2 px-4 py-3 text-[13px] w-fit">
                  XL
                </div>
                <div className="box box border-2 px-2 py-3 text-[13px] w-fit">
                  XXL
                </div>
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

// export async function getStaticPaths() {
//   return {
//     paths: [],
//     // paths: [{ params: { id: "362" } }, { params: { id: "605" } }],
//     fallback: true,
//   };
// }

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
