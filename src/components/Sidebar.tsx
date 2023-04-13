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
            <a href="/">Tops</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="">Shirts</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="/">Tees</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="/">Knits</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="/">Sweatshirts & hoodies</a>
          </div>
        </div>
        <div className="menu-item my-4">
          <div className="item font-serif font-bold">
            <a href="/">Bottoms</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="">Sports wear</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="/">Skirts</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="/">Shorts</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="/">Boardshorts</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="/">Pants</a>
          </div>
        </div>
        <div className="menu-item my-4">
          <div className="item font-serif font-bold">
            <a href="/">Accessories</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="">Bags</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="/">Shoes</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="/">Hats</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="/">Beanies</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="/">Gear</a>
          </div>
        </div>
        <div className="menu-item my-4">
          <div className="item font-serif font-bold">
            <a href="/">Women</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="">T-shirts</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="/">All over t-shirt</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="/">Crop tops</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="/">3/4 sleeve shirts</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="/">Jackets and hoodies</a>
          </div>
        </div>
        <div className="menu-item my-4">
          <div className="item font-serif font-bold">
            <a href="/">Home decor</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="">Pillow cases</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="/">Blankets</a>
          </div>
        </div>
        <div className="menu-item my-4">
          <div className="item font-serif font-bold">
            <a href="/">Stationery</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="">Stickers</a>
          </div>
        </div>
        <div className="menu-item my-4">
          <div className="item font-serif font-bold">
            <a href="/">Aporns</a>
          </div>
        </div>
        <div className="menu-item my-4">
          <div className="item font-serif font-bold">
            <a href="/">Fabrics</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="">Sports wear</a>
          </div>
        </div>
        <div className="menu-item my-4">
          <div className="item font-serif font-bold">
            <a href="/">Towels</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="">Bags</a>
          </div>
        </div>
        <div className="menu-item my-4">
          <div className="item font-serif font-bold">
            <a href="/">Pet products</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="">Dog food</a>
          </div>
        </div>
        <div className="menu-item my-4">
          <div className="item font-serif font-bold">
            <a href="/">Collections</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="">Best sellers</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="">Premium products</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="">Fall & winter</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="">Sportswear</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="">Streetwear</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="">Beachwear</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="">Halloween</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="">Back to school</a>
          </div>
        </div>
        <div className="menu-item my-4">
          <div className="item font-serif font-bold">
            <a href="/">Featured</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="">Best sellers</a>
          </div>
          <div className="sub-item ml-4 text-gray-600 font-normal">
            <a href="">New arrivals</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
