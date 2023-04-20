import Link from "next/link";

import useWishlistState from "../hooks/useWishlistState";
import useSnipcartCount from "../hooks/useSnipcartCount";

const Header = ({ setMenuOpen }) => {
  const { cart } = useSnipcartCount();
  const { hasItems } = useWishlistState();
  const cartHasItems = cart.items.count !== 0;

  return (
    <header className="py-4 sm:py-6 px-4 mt-2">
      <div className="md:max-w-8xl mx-auto md:px-6">
        <div className="flex items-center justify-between">
          <div className="items-center justify-start">
            {/* <div className="flex-1 flex items-center justify-start"> */}
            <Link href="/">
              <a className="flex items-center text-gray-900">
                <div className="rounded-full w-12 h-12 flex items-center justify-center sm:mr-4 hidden">
                  <svg
                    className="sm:w-full h-full fill-current w-1/2"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M55.4994 63.3717C64.2846 57.013 70 46.674 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 46.674 5.71537 57.013 14.5006 63.3717V44.3834L4.37865 34.0052C4.36359 33.9907 4.34884 33.9758 4.33454 33.9605C3.87179 33.4664 3.89156 32.6853 4.37865 32.2159L17.0919 20.7148C17.2087 20.6068 17.345 20.5231 17.4934 20.468L26.7394 17.0744C26.8484 17.0356 26.9624 17.0127 27.0776 17.0064C27.7486 16.97 28.3216 17.4921 28.3575 18.1727C28.3696 18.4442 28.7589 24.7007 34.9635 24.7994C41.1316 24.7007 41.533 18.4442 41.533 18.1727C41.5391 18.0499 41.5632 17.9288 41.6045 17.8133C41.8338 17.1727 42.5317 16.8418 43.1633 17.0744L52.4214 20.431C52.5699 20.486 52.7061 20.5698 52.8229 20.6778L65.6214 32.2159C65.6364 32.2304 65.6512 32.2454 65.6655 32.2606C66.1282 32.7549 66.1084 33.5359 65.6214 34.0052L55.4994 44.3834V63.3717ZM53.0297 65.0049V35.1405C53.0297 34.4591 53.5745 33.9065 54.2463 33.9065C54.9182 33.9065 55.4629 34.4591 55.4629 35.1405V40.8664L62.9327 33.1908L51.3874 22.6769L43.7716 19.888C43.0748 23.5295 40.2678 26.3767 36.6778 27.0834C31.8167 28.0404 27.1111 24.8189 26.1676 19.888L18.5518 22.6769L6.96996 33.1908L14.4519 40.8788V35.1405C14.4519 34.4591 14.9967 33.9065 15.6685 33.9065C16.3404 33.9065 16.8851 34.4591 16.8851 35.1405V64.9535C22.1696 68.1563 28.3695 70 35 70C41.5949 70 47.7638 68.176 53.0297 65.0049Z"
                    />
                  </svg>
                </div>
                <span className="flex text-lg font-medium">
                  <button
                    className="mr-3 sm:hidden"
                    onClick={() => setMenuOpen(true)}
                  >
                    <img src="/images/menu.svg" alt="Menu" />
                  </button>
                  <b>Omcub</b>
                </span>
              </a>
            </Link>
          </div>
          <div className="md:w-1/3 hidden sm:block">
            <nav>
              <ul className="flex items-center justify-center font-semibold">
                <li className="group px-3 py-2">
                  <button className="hover:opacity-50 cursor-default">
                    Categories
                  </button>
                  <div className="absolute top-[7%] left-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[100%] transform">
                    {/* <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform"> */}
                    <div className="relative top-12 p-6 bg-white rounded-xl shadow-xl w-full h-screen">
                      <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12.65rem] duration-500 ease-in-out rounded-sm"></div>

                      <div className="relative z-10">
                        <div className="mt-6 grid grid-cols-6 gap-6">
                          <div>
                            <p className="font-bold font-serif text-xl">Tops</p>
                            <ul className="mt-3 text-[15px]">
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Shirts
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Tees
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Knits
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Sweatshirts & hoodies
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-bold font-serif text-xl">
                              Bottoms
                            </p>
                            <ul className="mt-3 text-[15px]">
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Sports wear
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Skirts
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Shorts
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Boardshorts
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Pants
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-bold font-serif text-xl">
                              Accessories
                            </p>
                            <ul className="mt-3 text-[15px]">
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Bags
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Shoes
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Hats
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Beanies
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Gear
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-bold font-serif text-xl">
                              Women
                            </p>
                            <ul className="mt-3 text-[15px]">
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  T-shirts
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  All over t-shirt
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Crop tops
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  3/4 sleeve shirts
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Jackets and hoodies
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-bold font-serif text-xl">
                              Home decor
                            </p>
                            <ul className="mt-3 text-[15px]">
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Pillow cases
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Blankets
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-bold font-serif text-xl">
                              Stationery
                            </p>
                            <ul className="mt-3 text-[15px]">
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Stickers
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="mt-6 grid grid-cols-6 gap-6">
                          <div>
                            <p className="font-bold font-serif text-xl">
                              Aporns
                            </p>
                            <ul className="mt-3 text-[15px]">
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  {/* Shirts */}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-bold font-serif text-xl">
                              Fabrics
                            </p>
                            <ul className="mt-3 text-[15px]">
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Sports wear
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-bold font-serif text-xl">
                              Towels
                            </p>
                            <ul className="mt-3 text-[15px]">
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Bags
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-bold font-serif text-xl">
                              Pet products
                            </p>
                            <ul className="mt-3 text-[15px]">
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Dog bandannas
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-bold font-serif text-xl">
                              Collections
                            </p>
                            <ul className="mt-3 text-[15px]">
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Best sellers
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Premium products
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Fall & winter
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Sportswear
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Streetwear
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Beachwear
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Halloween
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Back to school
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-bold font-serif text-xl">
                              Featured
                            </p>
                            <ul className="mt-3 text-[15px]">
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  Best sellers
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                >
                                  New arrivals
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* <li className="relative group px-3 py-2">
          <a href="#" className="hover:opacity-50 cursor-default">
            Pricing
          </a>
        </li> */}
              </ul>
            </nav>
          </div>

          <div className="md:w-1/3 flex items-center justify-end space-x-3 -mr-2.5">
            <button
              className="snipcart-customer-signin appearance-none px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 transition relative"
              aria-label="User login"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="sm:w-6 h-6 fill-current w-5"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
              </svg>
            </button>
            <Link href="/wishlist">
              <a
                className="px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 relative transition"
                aria-label="Wishlist"
              >
                {hasItems && (
                  <span className="absolute bg-red-500 rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1"></span>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="sm:w-6 h-6 fill-current w-5"
                >
                  <path fill="none" d="M0 0H24V24H0z" />
                  <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                </svg>
              </a>
            </Link>
            <button
              className="snipcart-checkout appearance-none px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 transition relative"
              aria-label="Cart"
            >
              {cartHasItems && (
                <span className="absolute bg-blue-600 rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1"></span>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="sm:w-6 h-6 fill-current w-5"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;