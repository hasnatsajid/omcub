import Link from "next/link";

const Sidebar = ({ setMenuOpen }) => {
  return (
    <div className="side-menu z-[100] fixed h-screen bg-white w-screen block sm:hidden overflow-scroll">
      <div className="title flex justify-between w-5/6 mx-auto py-4 sticky top-0 bg-white">
        <h2 className="font-bold">Omcub</h2>
        <div onClick={() => setMenuOpen(false)}>
          <img src="/images/close.svg" alt="Close menu" />
        </div>
      </div>

      <div className="menu-items w-5/6 mx-auto my-6">
        <div className="menu-item my-4">
          <div className="item font-serif font-bold">
            <Link href="/">Tops</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="">Shirts</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="/">Tees</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="/">Knits</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="/">Sweatshirts & hoodies</Link>
          </div>
        </div>
        <div className="menu-item my-4">
          <div className="item font-serif font-bold">
            <Link href="/">Bottoms</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="">Sports wear</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="/">Skirts</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="/">Shorts</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="/">Boardshorts</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="/">Pants</Link>
          </div>
        </div>
        <div className="menu-item my-4">
          <div className="item font-serif font-bold">
            <Link href="/">Accessories</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="">Bags</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="/">Shoes</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="/">Hats</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="/">Beanies</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="/">Gear</Link>
          </div>
        </div>
        <div className="menu-item my-4">
          <div className="item font-serif font-bold">
            <Link href="/">Women</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="">T-shirts</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="/">All over t-shirt</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="/">Crop tops</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="/">3/4 sleeve shirts</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="/">Jackets and hoodies</Link>
          </div>
        </div>
        <div className="menu-item my-4">
          <div className="item font-serif font-bold">
            <Link href="/">Home decor</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="">Pillow cases</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="/">Blankets</Link>
          </div>
        </div>
        <div className="menu-item my-4">
          <div className="item font-serif font-bold">
            <Link href="/">Stationery</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="">Stickers</Link>
          </div>
        </div>
        <div className="menu-item my-4">
          <div className="item font-serif font-bold">
            <Link href="/">Aporns</Link>
          </div>
        </div>
        <div className="menu-item my-4">
          <div className="item font-serif font-bold">
            <Link href="/">Fabrics</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="">Sports wear</Link>
          </div>
        </div>
        <div className="menu-item my-4">
          <div className="item font-serif font-bold">
            <Link href="/">Towels</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="">Bags</Link>
          </div>
        </div>
        <div className="menu-item my-4">
          <div className="item font-serif font-bold">
            <Link href="/">Pet products</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="">Dog food</Link>
          </div>
        </div>
        <div className="menu-item my-4">
          <div className="item font-serif font-bold">
            <Link href="/">Collections</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="">Best sellers</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="">Premium products</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="">Fall & winter</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="">Sportswear</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="">Streetwear</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="">Beachwear</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="">Halloween</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="">Back to school</Link>
          </div>
        </div>
        <div className="menu-item my-4">
          <div className="item font-serif font-bold">
            <Link href="/">Featured</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="">Best sellers</Link>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <Link href="">New arrivals</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
