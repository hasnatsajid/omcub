import Link from "next/link";
import { useState } from "react";

const Sidebar = ({ setMenuOpen }) => {
  const [category, setCategory] = useState(true);

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
                <a onClick={() => setMenuOpen(false)}>Best sellers</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/123">
                <a onClick={() => setMenuOpen(false)}>New arrivals</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="#">Tops</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/6">
                <a onClick={() => setMenuOpen(false)}>Shirts</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/7">
                <a onClick={() => setMenuOpen(false)}>Hoodies & Jackets</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/27">
                <a onClick={() => setMenuOpen(false)}>All-over shirts</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/85">
                <a onClick={() => setMenuOpen(false)}>Embroidered shirts</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/117">
                <a onClick={() => setMenuOpen(false)}>Sportswear</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/107">
                <a onClick={() => setMenuOpen(false)}>Bottoms</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/117">
                <a onClick={() => setMenuOpen(false)}>Sports wear</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/58">
                <a onClick={() => setMenuOpen(false)}>Shorts</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="#">
                <a onClick={() => setMenuOpen(false)}>Boardshorts</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/240">
                <a onClick={() => setMenuOpen(false)}>Pants</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/125">
                <a onClick={() => setMenuOpen(false)}>Underwear</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/4">
                <a onClick={() => setMenuOpen(false)}>Accessories</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/16">
                <a onClick={() => setMenuOpen(false)}>Bags</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/205">
                <a onClick={() => setMenuOpen(false)}>Footwear</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/15">
                <a onClick={() => setMenuOpen(false)}>Hats</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/45">
                <a onClick={() => setMenuOpen(false)}>Beanies</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="#">
                <a onClick={() => setMenuOpen(false)}>Gear</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/112">
                <a onClick={() => setMenuOpen(false)}>Drinkware & coasters</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/191">
                <a onClick={() => setMenuOpen(false)}>Water bottles</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/195">
                <a onClick={() => setMenuOpen(false)}>Mugs</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/238">
                <a onClick={() => setMenuOpen(false)}>Tumblers</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/21">
                <a onClick={() => setMenuOpen(false)}>Wall Art</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/202">
                <a onClick={() => setMenuOpen(false)}>Stickers</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/55">
                <a onClick={() => setMenuOpen(false)}>Posters</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/57">
                <a onClick={() => setMenuOpen(false)}>Canvas prints</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/243">
                <a onClick={() => setMenuOpen(false)}>Tech accessories</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/244">
                <a onClick={() => setMenuOpen(false)}>Phones cases</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/250">
                <a onClick={() => setMenuOpen(false)}>Laptop cases</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/">
                <a onClick={() => setMenuOpen(false)}>Kids & Youth</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/252">
                <a onClick={() => setMenuOpen(false)}>Home decor</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/258">
                <a onClick={() => setMenuOpen(false)}>Pillow cases</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/255">
                <a onClick={() => setMenuOpen(false)}>Blankets</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="#">
                <a onClick={() => setMenuOpen(false)}>Collections</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/188">
                <a onClick={() => setMenuOpen(false)}>Best sellers</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="#">
                <a onClick={() => setMenuOpen(false)}>Pickleball</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/223">
                <a onClick={() => setMenuOpen(false)}>Premium products</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/144">
                <a onClick={() => setMenuOpen(false)}>Fall & winter</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/117">
                <a onClick={() => setMenuOpen(false)}>Sportswear</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/119">
                <a onClick={() => setMenuOpen(false)}>Streetwear</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/120">
                <a onClick={() => setMenuOpen(false)}>Beachwear</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/260">
                <a onClick={() => setMenuOpen(false)}>Halloween</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/209">
                <a onClick={() => setMenuOpen(false)}>Back to school</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/226">
                <a onClick={() => setMenuOpen(false)}>Shop All Mens</a>
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
                <a onClick={() => setMenuOpen(false)}>T-shirts</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/35">
                <a onClick={() => setMenuOpen(false)}>All over t-shirt</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/31">
                <a onClick={() => setMenuOpen(false)}>Crop tops</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/33">
                <a onClick={() => setMenuOpen(false)}>3/4 sleeve shirts</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/34">
                <a onClick={() => setMenuOpen(false)}>long sleeve shirts</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/96">
                <a onClick={() => setMenuOpen(false)}>Hoodies & Jackets</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/117">
                <a onClick={() => setMenuOpen(false)}>Sportswear</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/60">
                <a onClick={() => setMenuOpen(false)}>Skirts</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/11">
                <a onClick={() => setMenuOpen(false)}>Dresses</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/58">
                <a onClick={() => setMenuOpen(false)}>Shorts</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/240">
                <a onClick={() => setMenuOpen(false)}>Pants</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/100">
                <a onClick={() => setMenuOpen(false)}>Swimwear</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/125">
                <a onClick={() => setMenuOpen(false)}>Under wear</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/4">
                <a onClick={() => setMenuOpen(false)}>Accessories</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/16">
                <a onClick={() => setMenuOpen(false)}>Bags & beauty</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/205">
                <a onClick={() => setMenuOpen(false)}>Footwear</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/15">
                <a onClick={() => setMenuOpen(false)}>Hats</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/45">
                <a onClick={() => setMenuOpen(false)}>Beanies</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="#">
                <a onClick={() => setMenuOpen(false)}>Gear</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/112">
                <a onClick={() => setMenuOpen(false)}>Drinkware & coasters</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/191">
                <a onClick={() => setMenuOpen(false)}>Water bottles</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/195">
                <a onClick={() => setMenuOpen(false)}>Mugs</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/238">
                <a onClick={() => setMenuOpen(false)}>Tumblers</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/21">
                <a onClick={() => setMenuOpen(false)}>Wall Art</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/202">
                <a onClick={() => setMenuOpen(false)}>Stickers</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/55">
                <a onClick={() => setMenuOpen(false)}>Posters</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/57">
                <a onClick={() => setMenuOpen(false)}>Canvas prints</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/243">
                <a onClick={() => setMenuOpen(false)}>Tech accessories</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/244">
                <a onClick={() => setMenuOpen(false)}>Phones cases</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/250">
                <a onClick={() => setMenuOpen(false)}>Laptop cases</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/">
                <a onClick={() => setMenuOpen(false)}>Kids & Youth</a>
              </Link>
            </div>
          </div>

          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/252">
                <a onClick={() => setMenuOpen(false)}>Home decor</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/258">
                <a onClick={() => setMenuOpen(false)}>Pillow cases</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/255">
                <a onClick={() => setMenuOpen(false)}>Blankets</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="#">
                <a onClick={() => setMenuOpen(false)}>Duvet covers</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/45">
                <a onClick={() => setMenuOpen(false)}>Bean bags</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="#">
                <a onClick={() => setMenuOpen(false)}>Collections</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/188">
                <a onClick={() => setMenuOpen(false)}>Best sellers</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="#">
                <a onClick={() => setMenuOpen(false)}>Pickleball</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/223">
                <a onClick={() => setMenuOpen(false)}>Premium products</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/144">
                <a onClick={() => setMenuOpen(false)}>Fall & winter</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/117">
                <a onClick={() => setMenuOpen(false)}>Sportswear</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/119">
                <a onClick={() => setMenuOpen(false)}>Streetwear</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/120">
                <a onClick={() => setMenuOpen(false)}>Beachwear</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/260">
                <a onClick={() => setMenuOpen(false)}>Halloween</a>
              </Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/209">
                <a onClick={() => setMenuOpen(false)}>Back to school</a>
              </Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/227">
                <a onClick={() => setMenuOpen(false)}>Shop All Womens</a>
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
