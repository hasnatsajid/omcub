import useWishlistState from "../hooks/useWishlistState";
import useSnipcartCount from "../hooks/useSnipcartCount";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, setIsLoading }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useSnipcartCount();
  const { hasItems } = useWishlistState();
  const cartHasItems = cart.items.count !== 0;

  return (
    <>
      {menuOpen ? (
        <Sidebar setMenuOpen={setMenuOpen} setIsLoading={setIsLoading} />
      ) : (
        ""
      )}

      <Header setMenuOpen={setMenuOpen} setIsLoading={setIsLoading} />
      <main className="py-2 md:pb-12">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
