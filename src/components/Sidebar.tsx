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
              <Link href="/collections/188">Best sellers</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/123">New arrivals</Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/">Tops</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/6">Shirts</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/7">Hoodies & Jackets</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/27">All-over shirts</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/85">Embroidered shirts</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/117">Sportswear</Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/107">Bottoms</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/117">Sports wear</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/58">Shorts</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="#">Boardshorts</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/240">Pants</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/125">Underwear</Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/4">Accessories</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/16">Bags</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/205">Footwear</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/15">Hats</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/45">Beanies</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="#">Gear</Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/112">Drinkware & coasters</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/191">Water bottles</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/195">Mugs</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/238">Tumblers</Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/21">Wall Art</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/202">Stickers</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/55">Posters</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/57">Canvas prints</Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/243">Tech accessories</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/244">Phones cases</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/250">Laptop cases</Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/">Kids & Youth</Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/252">Home decor</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/258">Pillow cases</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/255">Blankets</Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="#">Collections</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/188">Best sellers</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="#">Pickleball</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/223">Premium products</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/144">Fall & winter</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/117">Sportswear</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/119">Streetwear</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/120">Beachwear</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/260">Halloween</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/209">Back to school</Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/226">Shop All Mens</Link>
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
              <Link href="/collections/32">T-shirts</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/35">All over t-shirt</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/31">Crop tops</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/33">3/4 sleeve shirts</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/34">long sleeve shirts</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/96">Hoodies & Jackets</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/117">Sportswear</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/60">Skirts</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/11">Dresses</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/58">Shorts</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/240">Pants</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/100">Swimwear</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/125">Under wear</Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/4">Accessories</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/16">Bags & beauty</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/205">Footwear</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/15">Hats</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/45">Beanies</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="#">Gear</Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/112">Drinkware & coasters</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/191">Water bottles</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/195">Mugs</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/238">Tumblers</Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/21">Wall Art</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/202">Stickers</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/55">Posters</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/57">Canvas prints</Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/243">Tech accessories</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/244">Phones cases</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/250">Laptop cases</Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/">Kids & Youth</Link>
            </div>
          </div>

          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/252">Home decor</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/258">Pillow cases</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/255">Blankets</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="#">Duvet covers</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/45">Bean bags</Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="#">Collections</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/188">Best sellers</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="#">Pickleball</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/223">Premium products</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/144">Fall & winter</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/117">Sportswear</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/119">Streetwear</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/120">Beachwear</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/260">Halloween</Link>
            </div>
            <div className="sub-item ml-4 text-gray-600 font-normal">
              <Link href="/collections/209">Back to school</Link>
            </div>
          </div>
          <div className="menu-item my-4">
            <div className="item font-serif font-bold">
              <Link href="/collections/227">Shop All Womens</Link>
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
