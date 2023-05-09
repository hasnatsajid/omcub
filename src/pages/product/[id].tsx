import { GetStaticProps } from "next";
import { printful } from "../../lib/printful-client";

import Carousel from "../../components/Carousel";
import { useEffect, useState } from "react";
import Scrollbar from "../../components/Scrollbar";

function Product({ productData, product }) {
  const { sync_product, sync_variants } = product;
  // return <h1>fdfd</h1>;

  // const { variants } = productData;
  const variants = sync_variants;

  // console.log("sync variants", sync_variants);

  const initialVariant = variants[0];
  const [allVariants, setAllVariants] = useState([]);
  const [activeVariant, setactiveVariant] = useState({ ...initialVariant });
  const [variantToggle, setVariantToggle] = useState(false);
  const [uniqueColorObjects, setUniqueColorObjects] = useState([]);
  const [uniqueColorsArray, setUniqueColorsArray] = useState([]);
  const [activeVariantExternalId, setActiveVariantExternalId] = useState();
  const [activeVariantFile, setActiveVariantFile] = useState(
    activeVariant.files.find(({ type }) => type === "preview")
  );
  // const initialVariantSizes = allVariants.filter(
  //   (variant) => variant.color === activeVariant.color
  // );
  const [sizeVariants, setSizeVariants] = useState([]);

  useEffect(() => {
    setactiveVariant({ ...initialVariant });

    let sizes = [];
    let splittedVariantsArray;
    const newVariants = [];

    // setUniqueColorObjects(
    setUniqueColorsArray(
      variants.filter((variant) => {
        splittedVariantsArray = variant.name.split(" ");
        sizes.push(splittedVariantsArray[splittedVariantsArray.length - 1]);

        const nameCutted = variant.name
          .substring(variant.name.indexOf("-") + 1)
          .trim();
        const color = nameCutted
          .substring(0, nameCutted.lastIndexOf("/"))
          .trim();
        // colors.push(nameCutted.substring(0, nameCutted.lastIndexOf("/")));
        variant = { ...variant, color };
        newVariants.push(variant);

        if (map.get(variant.color)) {
          // if (map.get(variant.color_code)) {
          return false;
        }
        map.set(variant.color, variant);
        return true;
      })
    );
    // );

    setAllVariants([...newVariants]);
    setactiveVariant(newVariants[0]);
  }, []);

  useEffect(() => {
    setSizeVariants(
      allVariants.filter((variant) => variant.color === activeVariant.color)
    );

    setActiveVariantExternalId(activeVariant.external_id);
    setActiveVariantFile(
      activeVariant.files.find(({ type }) => type === "preview")
    );

    // console.log(activeVariant, activeVariantFile.preview_url);
  }, [activeVariant]);

  useEffect(() => {
    // console.log(activeVariantFile);
  }, [activeVariantFile]);

  useEffect(() => {
    let sizes = [];
    let splittedVariantsArray;
    const newVariants = [];

    const uniqueColorIds = variants
      .filter((variant) => {
        splittedVariantsArray = variant.name.split(" ");
        sizes.push(splittedVariantsArray[splittedVariantsArray.length - 1]);

        const nameCutted = variant.name
          .substring(variant.name.indexOf("-") + 1)
          .trim();
        const color = nameCutted
          .substring(0, nameCutted.lastIndexOf("/"))
          .trim();
        // colors.push(nameCutted.substring(0, nameCutted.lastIndexOf("/")));
        variant = { ...variant, color };
        newVariants.push(variant);

        if (map.get(variant.color)) {
          // if (map.get(variant.color_code)) {
          return false;
        }
        map.set(variant.color, variant);
        return true;
      })
      .map((el) => el.id);

    setUniqueColorsArray(
      allVariants.filter((element, i) => uniqueColorIds.includes(element.id))
    );

    // console.log(
    //   uniqueColorIds,
    //   uniqueColorsArray,
    //   allVariants.filter((element, i) => uniqueColorIds.includes(element.id))
    // );
  }, [allVariants]);

  useEffect(() => {
    setSizeVariants(
      allVariants.filter((variant) => {
        return variant.color === activeVariant.color;
      })
    );

    // setactiveVariant();

    // console.log("Active", activeVariant);
    // console.log("all variants", allVariants);
  }, [variantToggle]);

  const uniqueColors = Array.from(
    new Set(variants.map((item) => item.color_code))
  );

  const variantSizes = variants.filter(
    (item) => item.color_code === initialVariant.color_code
  );

  const variantColorToggle = (e) => {
    // console.log(e.target.dataset.id);

    // return;
    setactiveVariant(
      allVariants.filter((variant) => variant.id === +e.target.dataset.id)[0]
    );

    // console.log(activeVariant.files.find(({ type }) => type === "preview"));

    setVariantToggle((prev) => !prev);
  };

  const variantSizeToggle = (e) => {
    // console.log(e.target.dataset.id);
    // return;
    setactiveVariant(
      allVariants.filter((variant) => variant.id === +e.target.dataset.id)[0]
    );

    setVariantToggle((prev) => !prev);
  };

  var map = new Map();

  // const variantImages = variants.map((variant) => variant.image);

  return (
    <>
      <Scrollbar />
      <div className="product bg-[#f9f9f9]">
        <div className="wrapper lg:flex w-4/5 m-auto ">
          <div className="carousel flex-1">
            <Carousel images={uniqueColorsArray} />
          </div>
          <div className="product_form 2xl:w-3/12 md:w-2/6">
            <div className="title flex justify-between pt-6 pb-2 items-start">
              <div className="heading font-serif text-[22px] w-3/4">
                {sync_product.name}
              </div>
              <div className="price text-xl font-bold">
                ${activeVariant && activeVariant.retail_price}
              </div>
            </div>
            <div className="info text-[13px] border-b border-gray-300 pb-4">
              <div className="category text-[#736b67]">{product.type_name}</div>
              <div className="rating"></div>
            </div>
            <div className="variants my-6">
              <div className="tile text-[13px] text-[#736b67]">
                {activeVariant && activeVariant.color}
              </div>
              <div className="variant_catalogue grid grid-cols-4 gap-2 py-4">
                {uniqueColorsArray &&
                  activeVariant &&
                  uniqueColorsArray.map(({ color, id, product }) => {
                    // console.log("id and color ", id, color, product.image);
                    return (
                      <div
                        key={id}
                        data-id={id}
                        className={`w-[70px] h-[auto] item mr-[7px] mb-[7px] border ${
                          // className={`w-[70px] h-[70px] item mr-[7px] mb-[7px] border ${
                          activeVariant.color === color
                            ? "border-2 border-black"
                            : ""
                        }`}
                        style={{
                          backgroundImage: `url(${product.image})`,
                          height: "5rem",
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          backgroundAttachment: "inherit",
                          backgroundPosition: "center",
                        }}
                        onClick={variantColorToggle}
                      >
                        {/* <div className="item ">
                          <img src={product.image} alt="Shirt 1" />
                        </div> */}
                        {/* {color} */}
                      </div>
                    );
                  })}

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
                  sizeVariants.map(({ size, id, name }) => {
                    const splittedVariantsArray = name.split(" ");
                    const splittedVariantsArrayActive =
                      activeVariant.name.split(" ");

                    return (
                      <div
                        key={id}
                        data-id={id}
                        className={`box cursor-pointer border-2 px-4 py-3 text-[13px] ${
                          activeVariant &&
                          splittedVariantsArrayActive[
                            splittedVariantsArrayActive.length - 1
                          ] ===
                            splittedVariantsArray[
                              splittedVariantsArray.length - 1
                            ]
                            ? "active"
                            : ""
                        }`}
                        onClick={variantSizeToggle}
                      >
                        {
                          splittedVariantsArray[
                            splittedVariantsArray.length - 1
                          ]
                        }
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="action_btn my-4">
              <button
                type="submit"
                className="snipcart-add-item bg-[#f15a31] hover:bg-black text-white w-full py-3 duration-200 hover:ease-out"
                data-item-id={activeVariantExternalId}
                data-item-price={activeVariant.retail_price}
                data-item-url={`/api/products/${activeVariantExternalId}`}
                data-item-description={activeVariant.name}
                data-item-image={
                  activeVariantFile && activeVariantFile.preview_url
                }
                data-item-name={activeVariant.name}
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

  const productResponse = await fetch(
    `https://api.printful.com/store/products/${context.params.id}`,
    {
      headers: {
        Authorization: "Bearer WMrkZspe4PkOWW3Jy76VVWdJ6fkagMd9XOst78mI",
      },
    }
  );
  const product = await productResponse.json();

  // console.log(product);

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
      product: product.result,
      productData: result,
      // products: shuffle(products),
    },
  };
};

export default Product;
