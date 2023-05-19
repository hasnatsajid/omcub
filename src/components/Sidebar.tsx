import Link from "next/link";
import { useState } from "react";

const Sidebar = ({ setMenuOpen, setIsLoading }) => {
  const [category, setCategory] = useState(true);

  const onClickMenuItem = () => {
    setMenuOpen(false);
    setIsLoading(true);
  };

  return (
    <div className="side-menu z-[100] fixed h-screen bg-white w-screen block sm:hidden overflow-scroll">
      <div className="title flex justify-between w-5/6 mx-auto py-4 sticky top-0 bg-white">
        <h2 className="font-bold">Omcub</h2>
        <div onClick={() => setMenuOpen(false)}>
          <img src="/images/close.svg" alt="Close menu" />
        </div>
      </div>

      <div className="categories flex mx-8 my-8">
        <div
          className={`men font-serif font-bold mr-4  border-black ${
            category ? "border-b-2" : ""
          }`}
          onClick={() => setCategory(true)}
        >
          Men
        </div>
        <div
          className={`women font-serif font-bold mr-4  border-black ${
            !category ? "border-b-2" : ""
          }`}
          onClick={() => setCategory(false)}
        >
          Women
        </div>
      </div>

      {category ? (
        <div className="menu-items w-5/6 mx-auto my-6">
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/">Featured</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/188">
                <a onClick={onClickMenuItem}>Best sellers</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/123">
                <a onClick={onClickMenuItem}>New arrivals</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="#">Tops</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/6">
                <a onClick={onClickMenuItem}>Shirts</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/7">
                <a onClick={onClickMenuItem}>Hoodies & Jackets</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/27">
                <a onClick={onClickMenuItem}>All-over shirts</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/85">
                <a onClick={onClickMenuItem}>Embroidered shirts</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/117">
                <a onClick={onClickMenuItem}>Sportswear</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/107">
                <a onClick={onClickMenuItem}>Bottoms</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/117">
                <a onClick={onClickMenuItem}>Sports wear</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/58">
                <a onClick={onClickMenuItem}>Shorts</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="#">
                <a onClick={onClickMenuItem}>Boardshorts</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/240">
                <a onClick={onClickMenuItem}>Pants</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/125">
                <a onClick={onClickMenuItem}>Underwear</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/4">
                <a onClick={onClickMenuItem}>Accessories</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/16">
                <a onClick={onClickMenuItem}>Bags</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/205">
                <a onClick={onClickMenuItem}>Footwear</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/15">
                <a onClick={onClickMenuItem}>Hats</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/45">
                <a onClick={onClickMenuItem}>Beanies</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="#">
                <a onClick={onClickMenuItem}>Gear</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/112">
                <a onClick={onClickMenuItem}>Drinkware & coasters</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/191">
                <a onClick={onClickMenuItem}>Water bottles</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/195">
                <a onClick={onClickMenuItem}>Mugs</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/238">
                <a onClick={onClickMenuItem}>Tumblers</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/21">
                <a onClick={onClickMenuItem}>Wall Art</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/202">
                <a onClick={onClickMenuItem}>Stickers</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/55">
                <a onClick={onClickMenuItem}>Posters</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/57">
                <a onClick={onClickMenuItem}>Canvas prints</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/243">
                <a onClick={onClickMenuItem}>Tech accessories</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/244">
                <a onClick={onClickMenuItem}>Phones cases</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/250">
                <a onClick={onClickMenuItem}>Laptop cases</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/">
                <a onClick={onClickMenuItem}>Kids & Youth</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/252">
                <a onClick={onClickMenuItem}>Home decor</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/258">
                <a onClick={onClickMenuItem}>Pillow cases</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/255">
                <a onClick={onClickMenuItem}>Blankets</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="#">
                <a onClick={onClickMenuItem}>Collections</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/188">
                <a onClick={onClickMenuItem}>Best sellers</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="#">
                <a onClick={onClickMenuItem}>Pickleball</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/223">
                <a onClick={onClickMenuItem}>Premium products</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/144">
                <a onClick={onClickMenuItem}>Fall & winter</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/117">
                <a onClick={onClickMenuItem}>Sportswear</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/119">
                <a onClick={onClickMenuItem}>Streetwear</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/120">
                <a onClick={onClickMenuItem}>Beachwear</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/260">
                <a onClick={onClickMenuItem}>Halloween</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/209">
                <a onClick={onClickMenuItem}>Back to school</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/226">
                <a onClick={onClickMenuItem}>Shop All Mens</a>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {!category ? (
        <div className="menu-items w-5/6 mx-auto my-6">
          <div className="menu-item my-4">
            {/* <div className="item font-serif font-bold">
              <Link href="/">Featured</Link>
            </div> */}
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/32">
                <a onClick={onClickMenuItem}>T-shirts</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/35">
                <a onClick={onClickMenuItem}>All over t-shirt</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/31">
                <a onClick={onClickMenuItem}>Crop tops</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/33">
                <a onClick={onClickMenuItem}>3/4 sleeve shirts</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/34">
                <a onClick={onClickMenuItem}>long sleeve shirts</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/96">
                <a onClick={onClickMenuItem}>Hoodies & Jackets</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/117">
                <a onClick={onClickMenuItem}>Sportswear</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/60">
                <a onClick={onClickMenuItem}>Skirts</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/11">
                <a onClick={onClickMenuItem}>Dresses</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/58">
                <a onClick={onClickMenuItem}>Shorts</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/240">
                <a onClick={onClickMenuItem}>Pants</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/100">
                <a onClick={onClickMenuItem}>Swimwear</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/125">
                <a onClick={onClickMenuItem}>Under wear</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/4">
                <a onClick={onClickMenuItem}>Accessories</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/16">
                <a onClick={onClickMenuItem}>Bags & beauty</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/205">
                <a onClick={onClickMenuItem}>Footwear</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/15">
                <a onClick={onClickMenuItem}>Hats</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/45">
                <a onClick={onClickMenuItem}>Beanies</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="#">
                <a onClick={onClickMenuItem}>Gear</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/112">
                <a onClick={onClickMenuItem}>Drinkware & coasters</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/191">
                <a onClick={onClickMenuItem}>Water bottles</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/195">
                <a onClick={onClickMenuItem}>Mugs</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/238">
                <a onClick={onClickMenuItem}>Tumblers</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/21">
                <a onClick={onClickMenuItem}>Wall Art</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/202">
                <a onClick={onClickMenuItem}>Stickers</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/55">
                <a onClick={onClickMenuItem}>Posters</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/57">
                <a onClick={onClickMenuItem}>Canvas prints</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/243">
                <a onClick={onClickMenuItem}>Tech accessories</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/244">
                <a onClick={onClickMenuItem}>Phones cases</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/250">
                <a onClick={onClickMenuItem}>Laptop cases</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/">
                <a onClick={onClickMenuItem}>Kids & Youth</a>
              </Link>
            </div>
          </div>

          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/252">
                <a onClick={onClickMenuItem}>Home decor</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/258">
                <a onClick={onClickMenuItem}>Pillow cases</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/255">
                <a onClick={onClickMenuItem}>Blankets</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="#">
                <a onClick={onClickMenuItem}>Duvet covers</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/45">
                <a onClick={onClickMenuItem}>Bean bags</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="#">
                <a onClick={onClickMenuItem}>Collections</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/188">
                <a onClick={onClickMenuItem}>Best sellers</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="#">
                <a onClick={onClickMenuItem}>Pickleball</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/223">
                <a onClick={onClickMenuItem}>Premium products</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/144">
                <a onClick={onClickMenuItem}>Fall & winter</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/117">
                <a onClick={onClickMenuItem}>Sportswear</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/119">
                <a onClick={onClickMenuItem}>Streetwear</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/120">
                <a onClick={onClickMenuItem}>Beachwear</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/260">
                <a onClick={onClickMenuItem}>Halloween</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/209">
                <a onClick={onClickMenuItem}>Back to school</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/227">
                <a onClick={onClickMenuItem}>Shop All Womens</a>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Sidebar;
